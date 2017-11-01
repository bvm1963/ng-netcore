using DAL;
using DAL.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NGL.Backend.Areas.Login.Infrastructure;
using NGL.Backend.Data;
using NGL.Backend.Mappings;
using System.ComponentModel;
using System.IO;

namespace NGL
{
	public class Startup
	{
		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder()
				.SetBasePath(env.ContentRootPath)
				.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
				.AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
				.AddEnvironmentVariables();

			Configuration = builder.Build();
		}

		public IContainer ApplicationContainer { get; private set; }
		public IConfigurationRoot Configuration { get; private set; }

		public void ConfigureServices(IServiceCollection services)
		{
			// Add EntityFramework's Identity support.
			services.AddEntityFramework();

			// Add ApplicationDbContext's DbSeeder
			services.AddSingleton<DbSeeder>();

			services.AddDbContext<ApplicationDbContext>(options =>
				options.UseSqlServer(
					Configuration["Data:Configurator:ConnectionString"],
					b => b.MigrationsAssembly("NGL")));

			services.AddIdentity<ApplicationUser, IdentityRole>(config =>
			{
				config.User.RequireUniqueEmail = false;
				config.Password.RequireNonAlphanumeric = false;
				config.Password.RequiredLength = 3;
				config.Password.RequireDigit = false;
				config.Password.RequireLowercase = false;
				config.Password.RequireUppercase = false;
				config.Cookies.ApplicationCookie.AutomaticChallenge = false;
			})
				.AddEntityFrameworkStores<ApplicationDbContext>()
				.AddDefaultTokenProviders();

			services.AddMvc()
				.AddMvcOptions(options =>
				{
					options.CacheProfiles.Add("NoCache", new CacheProfile
					{
						NoStore = true,
						Duration = 0
					});
				});

			// Automapper Configuration
			AutoMapperConfiguration.Configure();
		}

		public void Configure(IApplicationBuilder app,
			IHostingEnvironment env,
			ILoggerFactory loggerFactory,
			IApplicationLifetime appLifetime,
			DbSeeder dbSeeder)
		{
			loggerFactory.AddConsole();

			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.Use(async (context, next) =>
			{
				await next();
				if (context.Response.StatusCode == 404 &&
					!Path.HasExtension(context.Request.Path.Value) &&
					!context.Request.Path.Value.StartsWith("/api/"))
				{
					context.Request.Path = "/index.html";
					await next();
				}
			});

			app.UseStaticFiles(new StaticFileOptions
			{
#if DEBUG
				OnPrepareResponse = (context) =>
				{
					// Disable caching of all static files.
					context.Context.Response.Headers["Cache-Control"] = "no-cache, no-store";
					context.Context.Response.Headers["Pragma"] = "no-cache";
					context.Context.Response.Headers["Expires"] = "-1";
				}
#endif
			});

			// Add a custom Jwt Provider to generate Tokens
			app.UseJwtProvider();

			// Add the Jwt Bearer Header Authentication to validate Tokens
			app.UseJwtBearerAuthentication(new JwtBearerOptions()
			{
				AutomaticAuthenticate = true,
				AutomaticChallenge = true,
				RequireHttpsMetadata = false,
				TokenValidationParameters = new TokenValidationParameters()
				{
					IssuerSigningKey = JwtProvider.SecurityKey,
					ValidateIssuerSigningKey = true,
					ValidIssuer = JwtProvider.Issuer,
					ValidateIssuer = false,
					ValidateAudience = false
				}
			});

			app.UseMvc();

			// Seed the Database (if needed)
			try
			{
				dbSeeder.SeedAsync(app.ApplicationServices, Configuration).Wait();
			}
			catch { }

			// If you want to dispose of resources that have been resolved in the
			// application container, register for the "ApplicationStopped" event.
			appLifetime.ApplicationStopped.Register(() => this.ApplicationContainer.Dispose());
		}
	}
}

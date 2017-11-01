using DAL;
using DAL.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Threading.Tasks;

namespace NGL.Backend.Data
{
	public class DbSeeder
    {
        #region private members
        private ApplicationDbContext DbContext;
        private RoleManager<IdentityRole> RoleManager;
        private UserManager<ApplicationUser> UserManager;
        #endregion

        #region constructor
        public DbSeeder(
            ApplicationDbContext dbContext,
            RoleManager<IdentityRole> roleManager,
            UserManager<ApplicationUser> userManager)
        {
            DbContext = dbContext;
            RoleManager = roleManager;
            UserManager = userManager;
        }
        #endregion

        #region public methods
        public async Task SeedAsync(IServiceProvider serviceProvider,
            IConfiguration configuration)
        {
            // Create default Users
            if (await DbContext.Users.CountAsync() == 0)
                await CreateAdminAccount(serviceProvider, configuration);
        }
        #endregion

        #region seed methods
        private async Task CreateAdminAccount(IServiceProvider serviceProvider,
            IConfiguration configuration)
        {
            UserManager<ApplicationUser> userManager =
                serviceProvider.GetRequiredService<UserManager<ApplicationUser>>();
            RoleManager<IdentityRole> roleManager =
                serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();

            string role = configuration["Account:AdminUser:Role"];
            string username = configuration["Account:AdminUser:User"];
            string password = configuration["Account:AdminUser:Password"];
            string email = configuration["Account:AdminUser:Email"];

            if (await userManager.FindByNameAsync(username) == null)
            {
                if (await roleManager.FindByNameAsync(role) == null)
                {
                    await roleManager.CreateAsync(new IdentityRole(role));
                }

                ApplicationUser user = new ApplicationUser
                {
                    UserName = username,
                    Email = email
                };

                IdentityResult result = await userManager
                    .CreateAsync(user, password);

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, role);
                }
            }

            await DbContext.SaveChangesAsync();
        }
        #endregion
    }
}

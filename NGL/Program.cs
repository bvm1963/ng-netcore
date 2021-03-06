﻿using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace NGL
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var host = new WebHostBuilder()
				.UseKestrel()
				.UseContentRoot(Directory.GetCurrentDirectory())
				.UseIISIntegration()
				.UseStartup<Startup>()
				.UseApplicationInsights()
				.UseUrls("http://localhost:5501")
				.Build();

			host.Run();
		}
	}
}

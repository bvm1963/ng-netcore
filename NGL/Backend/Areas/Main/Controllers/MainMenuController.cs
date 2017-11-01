using AutoMapper;
using DAL;
using DML;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using NGL.Backend.Areas.Main.Models;
using NGL.Backend.Mappings;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace NGL.Backend.Areas.Main.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class MainMenuController : Controller
	{
		private ApplicationDbContext dbContext;

		public MainMenuController(ApplicationDbContext context)
		{
			// Dependency Injection
			dbContext = context;
		}

		[HttpGet]
		public IActionResult Get()
		{
			var mainMenu = (dynamic)null;

			var paramsMainMenu = new SqlParameter[]
				{
					new SqlParameter("@p1", DBNull.Value)
				};

			try
			{
				mainMenu = dbContext.MainMenu.FromSql("exec get_MainMenu @p1", paramsMainMenu).ToList();
			}
			catch { }

			MapperViewModels.mainMenuViewModel = Mapper.Map<IEnumerable<MainMenu>, IEnumerable<MainMenuViewModel>>(mainMenu);

			var menu = from a in MapperViewModels.mainMenuViewModel
					   orderby a.ParentID, a.Group2
					   select a;

			return new JsonResult(menu, DefaultJsonSettings);
		}

		#region Helpers
		private JsonSerializerSettings DefaultJsonSettings
		{
			get
			{
				return new JsonSerializerSettings()
				{
					Formatting = Formatting.Indented
				};
			}
		}
		#endregion
	}
}

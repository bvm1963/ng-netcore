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
	public class MainController : Controller
	{
		private ApplicationDbContext dbContext;

		public MainController(ApplicationDbContext context)
		{
			// Dependency Injection
			dbContext = context;
		}

		[HttpGet]
		public IActionResult Get()
		{
			var operations = (dynamic)null;

			var paramsOperations = new SqlParameter[]
				{
					new SqlParameter("@p1", DBNull.Value)
				};

			try
			{
				operations = dbContext.Operations.FromSql("exec get_Operations @p1", paramsOperations).ToList();
			}
			catch { }

			MapperViewModels.operationsViewModel = Mapper.Map<IEnumerable<Operations>, IEnumerable<OperationsViewModel>>(operations);

			var result = from a in MapperViewModels.operationsViewModel
						 orderby a.Group2
						 select a;

			return new JsonResult(result, DefaultJsonSettings);
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

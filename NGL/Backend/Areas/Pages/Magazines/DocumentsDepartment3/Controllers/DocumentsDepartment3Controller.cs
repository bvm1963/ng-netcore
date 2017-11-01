using AutoMapper;
using DAL;
using DML;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using NGL.Backend.Areas.Pages.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;

namespace NGL.Backend.Areas.Pages.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class DocumentsDepartment3Controller : Controller
	{
		private ApplicationDbContext dbContext;

		public DocumentsDepartment3Controller(ApplicationDbContext context)
		{
			// Dependency Injetion
			dbContext = context;
		}

		[HttpGet("{id}")]
		public IActionResult Get(int id)
		{
			var result = (dynamic)null;

			var parameters = new SqlParameter[]
			{
				new SqlParameter("@p1", id)
			};

			try
			{
				result = dbContext.DocumentsDepartment3.FromSql("exec get_DocumentsDepartment3 @p1", parameters).ToList();
			}
			catch { }

			if (result != null)
				return new JsonResult(Mapper.Map<IEnumerable<DocumentsDepartment3>, IEnumerable<DocumentsDepartment3ViewModel>>(result), DefaultJsonSettings);
			else return NotFound(new { Error = "not found" });
		}

		[HttpPut("{id}")]
		[Authorize]
		public IActionResult Put(int id, [FromBody]DocumentsDepartment3ViewModel[] data)
		{
			var result = (dynamic)null;
			int mode = 0;

			if (data != null)
			{
				foreach (DocumentsDepartment3ViewModel row in data)
				{
					var parameters = new SqlParameter[]
					{
						new SqlParameter("@p1", row.Id),
						new SqlParameter("@p2", row.MagazinesID),
						new SqlParameter("@p3", row.OperationsID),
						new SqlParameter("@p4", row.ParametersID),
						new SqlParameter("@p5", row.Data1.ToString()),
						new SqlParameter("@p6", mode)
					};

					try
					{
						result = dbContext.ReturnValue.FromSql(
							"exec set_DocumentsDepartment3 @p1, @p2, @p3, @p4, @p5, @p6", parameters).ToList();
					}
					catch { }
				}

				if (result != null) return Get(id);
			}

			// return a HTTP Status 404 (Not Found) if we couldn't find a suitable item.
			return NotFound(new { Error = String.Format("ID {0} has not been found", id) });
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

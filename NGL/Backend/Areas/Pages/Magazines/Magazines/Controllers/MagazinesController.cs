using AutoMapper;
using DAL;
using DAL.Identity;
using DML;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using NGL.Backend.Areas.Common.Models;
using NGL.Backend.Areas.Pages.Models;
using NGL.Backend.Mappings;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace NGL.Backend.Areas.Pages.Controllers
{
	[Route("api/[controller]")]
	[Authorize]
	public class MagazinesController : Controller
	{
		private ApplicationDbContext dbContext;
		protected UserManager<ApplicationUser> UserManager;

		public MagazinesController(
			ApplicationDbContext context,
			UserManager<ApplicationUser> userManager)
		{
			// Dependency Injetion
			dbContext = context;
			UserManager = userManager;
		}

		[HttpGet("{id}")]
		public IActionResult Get(int Id)
		{
			var result = (dynamic)null;

			string operationsIDStr = GetOperations(Id);

			var parameters = new SqlParameter[]
			{
				new SqlParameter("@p1", operationsIDStr)
			};

			try
			{
				result = dbContext.Magazines.FromSql("exec get_MagazinesList @p1", parameters).ToList();
			}
			catch { }

			if (result != null)
				return new JsonResult(Mapper.Map<IEnumerable<Magazines>, IEnumerable<MagazinesViewModel>>(result), DefaultJsonSettings);
			else return NotFound(new { Error = String.Format("get_MagazinesList {0} : error", Id) });
		}

		public IActionResult GetRow(int Id)
		{
			var result = (dynamic)null;

			var parameters = new SqlParameter[]
			{
				new SqlParameter("@p1", Id)
			};

			try
			{
				result = dbContext.Magazines.FromSql("exec get_Magazines @p1", parameters).ToList();
			}
			catch { }

			if (result != null)
				return new JsonResult(Mapper.Map<IEnumerable<Magazines>, IEnumerable<MagazinesViewModel>>(result), DefaultJsonSettings);
			else return NotFound(new { Error = String.Format("get_Magazines {0} : error", Id) });
		}

		[HttpPost]
		public async Task<IActionResult> Post([FromBody]MagazinesViewModel row)
		{
			var user = await GetCurrentUser();

			var result = (dynamic)null;
			int mode = 0;

			if (row != null)
			{
				var parameters = new SqlParameter[]
					{
						new SqlParameter("@p1", DBNull.Value),
						new SqlParameter("@p2", user.Id),
						new SqlParameter("@p3", row.OperationsID),
						new SqlParameter("@p4", row.NumberDocument),
						new SqlParameter("@p5", row.DateDocument.ToString("d")),
						new SqlParameter("@p6", user.UserName),
						new SqlParameter("@p7", mode)
					};

				try
				{
					result = dbContext.ReturnValue.FromSql(
						"exec set_Magazines @p1, @p2, @p3, @p4, @p5, @p6, @p7", parameters).ToList();
				}
				catch { }

				if (result != null)
				{
					MapperViewModels.returnValueViewModel = Mapper.Map<IEnumerable<ReturnValue>, IEnumerable<ReturnValueViewModel>>(result);

					var rows = from a in MapperViewModels.returnValueViewModel
							   select a;

					int Id = 0;
					if (rows.Count() > 0)
					{
						Id = rows.FirstOrDefault().Id;
					}

					return GetRow(Id);
				}
			}

			// return a generic HTTP Status 500 (Not Found) if the client payload is invalid.
			return new StatusCodeResult(500);
		}

		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody]MagazinesViewModel row)
		{
			var user = await GetCurrentUser();

			var result = (dynamic)null;
			int mode = 0;

			if (row != null)
			{
				var parameters = new SqlParameter[]
					{
						new SqlParameter("@p1", row.Id),
						new SqlParameter("@p2", user.Id),
						new SqlParameter("@p3", row.OperationsID),
						new SqlParameter("@p4", row.NumberDocument),
						new SqlParameter("@p5", row.DateDocument.ToString("d")),
						new SqlParameter("@p6", user.UserName),
						new SqlParameter("@p7", mode)
					};

				try
				{
					result = dbContext.ReturnValue.FromSql(
						"exec set_Magazines @p1, @p2, @p3, @p4, @p5, @p6, @p7", parameters).ToList();
				}
				catch { }

				if (result != null)
				{
					MapperViewModels.returnValueViewModel = Mapper.Map<IEnumerable<ReturnValue>, IEnumerable<ReturnValueViewModel>>(result);

					var rows = from a in MapperViewModels.returnValueViewModel
							   select a;

					int Id = 0;
					if (rows.Count() > 0)
					{
						Id = rows.FirstOrDefault().Id;
					}

					return GetRow(Id);
				}
			}

			// return a HTTP Status 404 (Not Found) if we couldn't find a suitable item.
			return NotFound(new { Error = String.Format("ID {0} has not been found", id) });
		}

		#region Operations
		private string GetOperations(int Id)
		{
			string retStr = String.Empty;

			var rows = from a in MapperViewModels.mainMenuViewModel
					   where a.Id == Id
					   orderby a.Id
					   select a;

			if (rows.Count() > 0)
			{
				string[] OperationsList = rows.FirstOrDefault().OperationsIDStr.ToString().Split(';');

				foreach (string operid in OperationsList)
				{
					try
					{
						var row = from a in MapperViewModels.operationsViewModel
								  where a.Id == int.Parse(operid)
								  select a;

						if (row.Count() > 0)
						{
							if (retStr.Trim().Equals(String.Empty) == true)
							{
								retStr = retStr + row.FirstOrDefault().Id.ToString();
							}
							else
							{
								retStr = retStr + "," + row.FirstOrDefault().Id.ToString();
							}
						}
					}
					catch
					{
						return "0";
					}
				}

				if (retStr.Trim().Equals(String.Empty) == true)
				{
					retStr = "0";
				}
			}

			return retStr;
		}
		#endregion

		#region Helpers
		private async Task<ApplicationUser> GetCurrentUser()
		{
			return await UserManager.GetUserAsync(HttpContext.User);
		}

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

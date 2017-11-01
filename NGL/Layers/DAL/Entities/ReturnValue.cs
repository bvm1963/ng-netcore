using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
	{
		public DbSet<ReturnValue> ReturnValue { get; set; }
	}
}

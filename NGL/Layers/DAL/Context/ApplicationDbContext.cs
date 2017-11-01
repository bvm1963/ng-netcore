using DAL.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	public partial class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
			// Main
			MainMenuFluent(modelBuilder);
			OperationsFluent(modelBuilder);
			// Pages
			MagazinesFluent(modelBuilder);
			DocumentsDepartment1Fluent(modelBuilder);
			DocumentsDepartment2Fluent(modelBuilder);
			DocumentsDepartment3Fluent(modelBuilder);

			base.OnModelCreating(modelBuilder);
		}
    }
}

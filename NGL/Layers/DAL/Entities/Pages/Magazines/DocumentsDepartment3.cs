using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
	{
		public DbSet<DocumentsDepartment3> DocumentsDepartment3 { get; set; }

		public void DocumentsDepartment3Fluent(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<DocumentsDepartment3>().ToTable("vtdbDocumentsDepartment3");

			modelBuilder.Entity<DocumentsDepartment3>().HasKey(t => t.Id);
			modelBuilder.Entity<DocumentsDepartment3>().Property(t => t.Id)
				.HasColumnName("DocumentsDepartment3ID")
				.ValueGeneratedOnAdd();

			modelBuilder.Entity<DocumentsDepartment3>().Property(t => t.OperationsName).HasMaxLength(50);
			modelBuilder.Entity<DocumentsDepartment3>().Property(t => t.Parameter).HasMaxLength(50);
			modelBuilder.Entity<DocumentsDepartment3>().Property(t => t.Note).HasMaxLength(100);
		}
	}
}

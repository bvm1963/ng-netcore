using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
	{
		public DbSet<DocumentsDepartment1> DocumentsDepartment1 { get; set; }

		public void DocumentsDepartment1Fluent(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<DocumentsDepartment1>().ToTable("vtdbDocumentsDepartment1");

			modelBuilder.Entity<DocumentsDepartment1>().HasKey(t => t.Id);
			modelBuilder.Entity<DocumentsDepartment1>().Property(t => t.Id)
				.HasColumnName("DocumentsDepartment1ID")
				.ValueGeneratedOnAdd();

			modelBuilder.Entity<DocumentsDepartment1>().Property(t => t.OperationsName).HasMaxLength(50);
			modelBuilder.Entity<DocumentsDepartment1>().Property(t => t.Parameter).HasMaxLength(50);
			modelBuilder.Entity<DocumentsDepartment1>().Property(t => t.Note).HasMaxLength(100);
		}
	}
}

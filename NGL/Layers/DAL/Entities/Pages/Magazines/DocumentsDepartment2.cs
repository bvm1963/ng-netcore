using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
	{
		public DbSet<DocumentsDepartment2> DocumentsDepartment2 { get; set; }

		public void DocumentsDepartment2Fluent(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<DocumentsDepartment2>().ToTable("vtdbDocumentsDepartment2");

			modelBuilder.Entity<DocumentsDepartment2>().HasKey(t => t.Id);
			modelBuilder.Entity<DocumentsDepartment2>().Property(t => t.Id)
				.HasColumnName("DocumentsDepartment2ID")
				.ValueGeneratedOnAdd();

			modelBuilder.Entity<DocumentsDepartment2>().Property(t => t.OperationsName).HasMaxLength(50);
			modelBuilder.Entity<DocumentsDepartment2>().Property(t => t.Parameter).HasMaxLength(50);
			modelBuilder.Entity<DocumentsDepartment2>().Property(t => t.Note).HasMaxLength(100);
		}
	}
}

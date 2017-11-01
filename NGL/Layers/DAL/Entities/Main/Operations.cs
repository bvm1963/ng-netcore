using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
    {
        public DbSet<Operations> Operations { get; set; }

		public void OperationsFluent(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Operations>().ToTable("vtdbOperations");

			modelBuilder.Entity<Operations>().HasKey(t => t.Id);
			modelBuilder.Entity<Operations>().Property(t => t.Id)
				.HasColumnName("Id")
				.ValueGeneratedOnAdd();

			modelBuilder.Entity<Operations>().Property(t => t.OperationsName).IsRequired();
			modelBuilder.Entity<Operations>().Property(t => t.OperationsName).HasMaxLength(50);

			modelBuilder.Entity<Operations>().Property(t => t.OperationsCaption).IsRequired();
			modelBuilder.Entity<Operations>().Property(t => t.OperationsCaption).HasMaxLength(50);
			
			modelBuilder.Entity<Operations>().Property(t => t.OperationsCode).HasMaxLength(50);
			modelBuilder.Entity<Operations>().Property(t => t.Group1).HasMaxLength(50);
		}
	}
}

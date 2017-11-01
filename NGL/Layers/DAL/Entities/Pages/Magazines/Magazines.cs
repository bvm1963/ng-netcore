using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
	{
		public DbSet<Magazines> Magazines { get; set; }

		public void MagazinesFluent(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Magazines>().ToTable("tdbMagazines");

			modelBuilder.Entity<Magazines>().HasKey(t => t.Id);
			modelBuilder.Entity<Magazines>().Property(t => t.Id)
				.HasColumnName("MagazinesID")
				.ValueGeneratedOnAdd();

			modelBuilder.Entity<Magazines>().Property(t => t.UserID).HasMaxLength(450);
			modelBuilder.Entity<Magazines>().Property(t => t.NumberDocument).HasMaxLength(50);
			modelBuilder.Entity<Magazines>().Property(t => t.UserName).HasMaxLength(50);
			modelBuilder.Entity<Magazines>().Property(t => t.Note).HasMaxLength(100);
			modelBuilder.Entity<Magazines>().Property(t => t.OperationsName).HasMaxLength(50);
			modelBuilder.Entity<Magazines>().Property(t => t.OperationsCode).HasMaxLength(50);
		}
	}
}

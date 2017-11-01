using DML;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
	partial class ApplicationDbContext
    {
        public DbSet<MainMenu> MainMenu { get; set; }

		public void MainMenuFluent(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<MainMenu>().ToTable("vtdbMainMenu");

			modelBuilder.Entity<MainMenu>().HasKey(t => t.Id);
			modelBuilder.Entity<MainMenu>().Property(t => t.Id)
				.HasColumnName("Id")
				.ValueGeneratedOnAdd();

			modelBuilder.Entity<MainMenu>().Property(t => t.MenuName).IsRequired();
			modelBuilder.Entity<MainMenu>().Property(t => t.MenuName).HasMaxLength(50);

			modelBuilder.Entity<MainMenu>().Property(t => t.MenuCaption).IsRequired();
			modelBuilder.Entity<MainMenu>().Property(t => t.MenuCaption).HasMaxLength(50);

			modelBuilder.Entity<MainMenu>().Property(t => t.PageRoute).HasMaxLength(100);
			modelBuilder.Entity<MainMenu>().Property(t => t.Icon).HasMaxLength(100);
			modelBuilder.Entity<MainMenu>().Property(t => t.Group1).HasMaxLength(50);
			modelBuilder.Entity<MainMenu>().Property(t => t.OperationsIDStr).HasMaxLength(2000);
		}
	}
}

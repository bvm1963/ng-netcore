using System;

namespace NGL.Backend.Areas.Pages.Models
{
	public class MagazinesViewModel
    {
		public int Id { get; set; }
		public string UserID { get; set; }
		public int OperationsID { get; set; }
		public string NumberDocument { get; set; }
		public DateTime DateDocument { get; set; }
		public string UserName { get; set; }
		public string Note { get; set; }
		public DateTime DateRecord { get; set; }
		public string OperationsName { get; set; }
		public string OperationsCode { get; set; }
	}
}

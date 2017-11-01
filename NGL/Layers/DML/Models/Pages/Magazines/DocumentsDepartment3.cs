using System;

namespace DML
{
	public partial class DocumentsDepartment3
	{
		public int Id { get; set; }
		public int MagazinesID { get; set; }
		public int OperationsID { get; set; }
		public int ParametersID { get; set; }
		public decimal? Data1 { get; set; }
		public string OperationsName { get; set; }
		public string Parameter { get; set; }
		public string Note { get; set; }
		public DateTime DateRecord { get; set; }
	}
}

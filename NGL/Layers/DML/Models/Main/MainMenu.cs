namespace DML
{
	public partial class MainMenu
    {
        public int Id { get; set; }
		public int ParentID { get; set; }
		public string MenuName { get; set; }
        public string MenuCaption { get; set; }
		public string PageRoute { get; set; }
		public string Icon { get; set; }
		public int MainMenuID { get; set; }
		public int? ItemTypeInt { get; set; }
		public string Group1 { get; set; }
		public int? Group2 { get; set; }
		public string OperationsIDStr { get; set; }
	}
}

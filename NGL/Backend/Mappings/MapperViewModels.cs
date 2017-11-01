using NGL.Backend.Areas.Common.Models;
using NGL.Backend.Areas.Main.Models;
using NGL.Backend.Areas.Pages.Models;
using System.Collections.Generic;

namespace NGL.Backend.Mappings
{
	public static class MapperViewModels
	{
		public static IEnumerable<ReturnValueViewModel> returnValueViewModel;
		public static IEnumerable<OperationsViewModel> operationsViewModel;
		public static IEnumerable<MainMenuViewModel> mainMenuViewModel;
		public static IEnumerable<MagazinesViewModel> magazinesViewModel;
		public static IEnumerable<DocumentsDepartment1ViewModel> documentsDepartment1ViewModel;
		public static IEnumerable<DocumentsDepartment2ViewModel> documentsDepartment2ViewModel;
		public static IEnumerable<DocumentsDepartment3ViewModel> documentsDepartment3ViewModel;
	}
}

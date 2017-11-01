using AutoMapper;
using DML;
using NGL.Backend.Areas.Common.Models;
using NGL.Backend.Areas.Main.Models;
using NGL.Backend.Areas.Pages.Models;

namespace NGL.Backend.Mappings
{
	public class DomainToViewModelMappingProfile : Profile
	{
		public DomainToViewModelMappingProfile()
		{
			CreateMap<ReturnValue, ReturnValueViewModel>();
			CreateMap<Operations, OperationsViewModel>();
			CreateMap<MainMenu, MainMenuViewModel>();
			CreateMap<Magazines, MagazinesViewModel>();
			CreateMap<DocumentsDepartment1, DocumentsDepartment1ViewModel>();
			CreateMap<DocumentsDepartment2, DocumentsDepartment2ViewModel>();
			CreateMap<DocumentsDepartment3, DocumentsDepartment3ViewModel>();
		}
	}
}

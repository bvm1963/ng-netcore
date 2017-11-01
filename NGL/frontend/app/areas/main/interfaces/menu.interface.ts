export interface IMainMenu {
		Id: number;
		ParentID: number;
		MenuName: string;
		MenuCaption: string;
		PageRoute: string;
		Icon: string;
		MainMenuID?: number;
		ItemTypeInt?: number;
		Group1: string;
		Group2?: number;
		OperationsIDStr: string;
}

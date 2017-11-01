export interface IMagazines {
		Id: number;
		UserID: string;
		OperationsID: number;
		NumberDocument: string;
		DateDocument: Date;
		UserName: string;
		Note: string;
		DateRecord: Date;
		OperationsName: string;
		OperationsCode: string;
}

export interface IMenuOperations {
		Id: number;
		OperationsName: string;
		OperationsCaption: string;
		OperationsCode: string;
		Group1: string;
		Group2?: number;
}

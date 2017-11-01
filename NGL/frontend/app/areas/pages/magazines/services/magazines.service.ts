import { Injectable, ViewContainerRef } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { EJComponents } from 'ej-angular2';
import { GridOptions } from "ag-grid/main";

import { AuthHttp } from '../../../user/services/auth-http.service';
import { ConfigService, CommonService } from '../../../../infrastructure/index';
import { IMagazines, IMenuOperations } from '../index';

@Injectable()
export class MagazinesService {
		baseUrl: string = '';
		public magazinesID: number;
		public codeOperation: number;
		public menuOperations: IMenuOperations[] = [];
		// toolbar
		public toolFields = { tooltipText: "tooltiptext", spriteCssClass: "spriteCss" };
		public toolSeparator = false;
		// toolMagazines
		public toolMagazinesData: any = [
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_1"
				},
				{
						id: "iInsert",
						text: "  New document  ",
						tooltiptext: "New document",
						imageUrl: "../../assets/images/DBInsert.ico"
				},
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_2"
				},
				{
						id: "iRefresh",
						tooltiptext: "Refresh",
						imageUrl: "../../assets/images/refresh.ico"
				},
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_1"
				}];
		// toolControls
		public toolControlsData: any = [
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_1"
				},
				{
						id: "iUpdate",
						text: "  Update document  ",
						tooltiptext: "Update document",
						imageUrl: "../../assets/images/ToolsPencil.ico"
				},
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_2"
				},
				{
						id: "iRefresh",
						tooltiptext: "Refresh",
						imageUrl: "../../assets/images/refresh.ico"
				},
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_1"
				}];
		// toolEdits
		public toolEditsData: any = [
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_1"
				},
				{
						id: "iSave",
						text: "  Save  ",
						tooltiptext: "Save",
						imageUrl: "../../assets/images/diskette.png"
				},
				{
						id: "iCancel",
						text: "  Cancel  ",
						tooltiptext: "Cancel",
						imageUrl: "../../assets/images/error.ico"
				},
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_2"
				},
				{
						id: "iRefresh",
						tooltiptext: "Refresh",
						imageUrl: "../../assets/images/refresh.ico"
				},
				{
						id: "iEmpty",
						spriteCss: "itemEmpty_1"
				}];

		public setGridMagazinesFocus() {
				let focusedCell = this.gridOptions.api.getFocusedCell();

				this.gridOptions.api.ensureIndexVisible(focusedCell.rowIndex);
				this.gridOptions.api.setFocusedCell(focusedCell.rowIndex, focusedCell.column.getColId(), null);
		}

		public gridOptions: GridOptions;
		public gridMagazines: any;
		public grid: EJComponents<any, any>;
		public toolControls: EJComponents<any, any>;

		// custom events
		public onSaveFunction: BehaviorSubject<any>;
		public onCancelFunction: BehaviorSubject<any>;
		public onSaveMagazines: BehaviorSubject<any>;
		public onCancelEdit: BehaviorSubject<any>;

		constructor(private http: AuthHttp,
				private configService: ConfigService,
				private commonService: CommonService) {

				this.baseUrl = configService.getApiURI('magazines');

				this.onSaveFunction = new BehaviorSubject(null);
				this.onCancelFunction = new BehaviorSubject(null);
				this.onSaveMagazines = new BehaviorSubject(null);
				this.onCancelEdit = new BehaviorSubject(null);
		}

		getMagazines(id: number): Observable<IMagazines[]> {
				return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IMagazines[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}

		putMagazines(id: number, data: IMagazines[]): Observable<IMagazines[]> {
				return this.http.put(this.baseUrl + '/' + id, JSON.stringify(data[0]), this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IMagazines[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}

		postMagazines(data: IMagazines[]): Observable<IMagazines[]> {
				return this.http.post(this.baseUrl, JSON.stringify(data[0]), this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IMagazines[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}

		public getEditMode(): boolean {
				let gridIsEdit = false;
				let toolControlsHidden = false;

				try {
						gridIsEdit = this.grid.widget.model.isEdit;
						toolControlsHidden = this.toolControls.widget.model.hide
				}
				catch (e) {
						let gridIsEdit = false;
						let toolControlsHidden = false;
				}

				if (gridIsEdit == true || toolControlsHidden == true) {
						return true;
				}
				else {
						return false;
				}
		}

		public saveFunction() {
				this.onSaveFunction.next(this.magazinesID);
		}

		public cancelFunction() {
				this.onCancelFunction.next(this.magazinesID);
		}

		public saveMagazines() {
				this.onSaveMagazines.next(true);
		}

		public cancelEdit() {
				this.onCancelEdit.next(true);
		}
}

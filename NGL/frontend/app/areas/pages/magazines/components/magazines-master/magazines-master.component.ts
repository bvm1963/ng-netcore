import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs/Rx';
import * as moment from 'moment/moment';

import { GridOptions } from "ag-grid/main";
import { NavigateToNextCellParams } from "ag-grid/dist/lib/entities/gridOptions";
import { GridCellDef } from "ag-grid/dist/lib/entities/gridCell";
import { EJComponents } from 'ej-angular2';

import { MagazinesService } from '../../services/magazines.service';
import { MainService } from '../../../../main/services/main.service';
import { IMagazines, IMenuOperations } from '../../index';

import { NewDocumentComponent } from '../new-document/new-document.component';
import { ShowMessageComponent } from '../show-message/show-message.component';
import { ShowInfoComponent } from '../show-info/show-info.component';

@Component({
		selector: 'app-magazines-master',
		templateUrl: './magazines-master.component.html',
		styleUrls: ['./magazines-master.component.css'],
		encapsulation: ViewEncapsulation.None
})
export class MagazinesMasterComponent implements OnInit, OnDestroy {
		@ViewChild('grid', { read: ViewContainerRef }) grid;
		@ViewChild('toolMagazines') toolMagazines: EJComponents<any, any>;
		@ViewChild('newDocument') newDocument: NewDocumentComponent;
		@ViewChild('showMessage') showMessage: ShowMessageComponent;
		@ViewChild('showInfo') showInfo: ShowInfoComponent;
		public errorMessage: string;
		public dsMagazines: IMagazines[] = [];
		public prevRowIndex: number = 0;
		private sub: Subscription;
		public gridOptions: GridOptions;
		public columnDefs: any[];
		// toolbar
		public toolFields: any;
		public toolSeparator: boolean;
		public toolMagazinesData: any;
		// route
		private menuId: number = 0;
		// subscribe
		private aliveSubscribe: boolean = true;

		constructor(
				private router: Router,
				private activatedRoute: ActivatedRoute,
				private magazinesService: MagazinesService,
				private mainService: MainService) {
				this.gridOptions = <GridOptions>{
						rowHeight: 20,
						enableColResize: true,
						localeText: {
								noRowsToShow: 'loading data ...'
						},
						rowSelection: 'single',
						navigateToNextCell: (params: NavigateToNextCellParams): GridCellDef => {
								var previousCell = params.previousCellDef;
								var suggestedNextCell = params.nextCellDef;

								var KEY_UP = 38;
								var KEY_DOWN = 40;
								var KEY_LEFT = 37;
								var KEY_RIGHT = 39;

								switch (params.key) {
										case KEY_DOWN:
												previousCell = params.previousCellDef;
												// set selected cell on current cell + 1
												this.gridOptions.api.forEachNode((node) => {
														if (previousCell.rowIndex + 1 === node.rowIndex) {
																node.setSelected(true);
														}
												});
												return suggestedNextCell;
										case KEY_UP:
												previousCell = params.previousCellDef;
												// set selected cell on current cell - 1
												this.gridOptions.api.forEachNode((node) => {
														if (previousCell.rowIndex - 1 === node.rowIndex) {
																node.setSelected(true);
														}
												});
												return suggestedNextCell;
										case KEY_LEFT:
										case KEY_RIGHT:
												return suggestedNextCell;
										default:
												throw "this will never happen, navigation is always on of the 4 keys above";
								}
						}
				};

				this.gridOptions.rowStyle = { 'font-size': '12px' };

				this.columnDefs = [
						{ headerName: "ID", field: "Id", width: 40, editable: false, cellClass: 'text-align-left' },
						{ headerName: "Document", field: "OperationsName", width: 140, cellClass: 'text-align-left' },
						{ headerName: "Document number", field: "NumberDocument", width: 100, cellClass: 'text-align-left' },
						{ headerName: "Document date", field: "DateDocument", width: 70, cellClass: 'text-align-right', valueFormatter: dateFormatter },
						{ headerName: "Operation code", field: "OperationsCode", width: 80, editable: false, cellClass: 'text-align-right' },
						{ headerName: "User", field: "UserName", width: 60, editable: false, cellClass: 'text-align-right' },
						{
								headerName: "Recording date", field: "DateRecord", width: 100, editable: false, cellClass: 'text-align-left', valueFormatter: function (data) {
										return moment(data.value).format('DD.MM.YYYY HH:mm:ss');
								}
						}
				];

				function dateFormatter(params) {
						return moment(params.value).format('DD.MM.YYYY');
				}

				// toolbar
				this.toolFields = magazinesService.toolFields;
				this.toolSeparator = magazinesService.toolSeparator;
				this.toolMagazinesData = magazinesService.toolMagazinesData;

				// custom events
				this.magazinesService.onSaveFunction.observers.splice(0);
				this.magazinesService
						.onSaveFunction
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(p => this.saveMagazines(p));

				this.magazinesService.onCancelFunction.observers.splice(0);
				this.magazinesService
						.onCancelFunction
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(p => this.cancelMagazines(p));
		}

		ngOnInit() {
				this.menuId = this.activatedRoute.snapshot.params['id'];
				this.getData();
		}

		ngOnDestroy() {
				this.aliveSubscribe = false;
		}

		ngAfterViewInit() {
				$("#toolMagazines").ejToolbar("disableItemByID", "iEmpty");

				this.magazinesService.gridOptions = this.gridOptions;
				this.magazinesService.gridMagazines = this.grid;
		}

		onToolMagazinesClick(args) {
				if (this.magazinesService.getEditMode() == false) {
						if (args.target.id === "iInsert") {
								this.newDocument.showDialog();
						}

						if (args.target.offsetParent != null) {
								if (args.target.offsetParent.id === "iDelete") {
										console.log('Delete');
								}
						}

						if (args.target.offsetParent != null) {
								if (args.target.offsetParent.id === "iRefresh") {
										this.getData();
										this.magazinesService.setGridMagazinesFocus();
								}
						}
				}
		}

		onGridReady(params) {
				params.api.sizeColumnsToFit();
				this.gridOptions.columnApi.setColumnWidth("DateRecord", 140, true);
		}

		onRowDataChanged(arg) {
				let rowCount = this.gridOptions.api.getDisplayedRowCount() - 1;
				if (rowCount > 0) {
						this.gridOptions.api.ensureIndexVisible(rowCount);
						this.gridOptions.api.setFocusedCell(rowCount, 'Id', null);
				}
		}

		onSelectionChanged(args) {
				let gridIsEdit = false;
				let toolControlsHidden = false;

				try {
						gridIsEdit = this.magazinesService.grid.widget.model.isEdit;
						toolControlsHidden = this.magazinesService.toolControls.widget.model.hide
				}
				catch (e) {
						let gridIsEdit = false;
						let toolControlsHidden = false;
				}

				let prevRowIndex = this.prevRowIndex;

				if (gridIsEdit == true || toolControlsHidden == true) {
						this.gridOptions.api.forEachNode(function (node) {
								if (node.rowIndex === prevRowIndex) {
										node.setSelected(true);
								}
						});
				}
		}

		onCellFocused(args) {
				let gridIsEdit = false;
				let toolControlsHidden = false;

				try {
						gridIsEdit = this.magazinesService.grid.widget.model.isEdit;
						toolControlsHidden = this.magazinesService.toolControls.widget.model.hide
				}
				catch (e) {
						let gridIsEdit = false;
						let toolControlsHidden = false;
				}

				let row = this.gridOptions.api.getRowNode(args.rowIndex);
				if (row != undefined) {
						if (gridIsEdit == true || toolControlsHidden == true) {
								if (args.rowIndex != this.prevRowIndex) {
										this.gridOptions.api.ensureIndexVisible(this.prevRowIndex);
										this.gridOptions.api.setFocusedCell(this.prevRowIndex, args.column.colId, null);
								}
						}
						else {
								if (args.rowIndex != this.prevRowIndex) {
										this.prevRowIndex = args.rowIndex;
										this.magazinesService.magazinesID = row.data["Id"];
										this.magazinesService.codeOperation = row.data["OperationsCode"];

										this.router.navigate(['/main/magazines/' + this.menuId + '/default']);
										//console.log(this.magazinesService.codeOperation);

										if (this.sub != undefined) { this.sub.unsubscribe(); }
										this.sub = this.routeDelay(row.data["OperationsCode"]);
								}
						}

						this.gridOptions.api.forEachNode(function (node) {
								if (node.rowIndex === args.rowIndex) {
										node.setSelected(true);
								}
						});
				}
		}

		timeDelay(): Observable<any> {
				return Observable.of({}).delay(500);
		}

		routeDelay(codeOperation: any): any {
				return this.timeDelay()
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						(data) => {
								this.router.navigate(['/main/magazines/' + this.menuId + '/' + codeOperation]);
						}
						);
		}

		//
		//
		//
		saveMagazines(id: number) {
				let magazines: IMagazines[] = this.dsMagazines.filter(
						p => p.Id == this.magazinesService.magazinesID);

				if (magazines.length > 0) {
						this.promisePutMagazines(this.menuId, magazines);
				}
		}

		promisePutMagazines(menuId: number, magazines: IMagazines[]) {
				Promise
						.resolve()
						.then(this.putMagazines(this.menuId, magazines));
		}

		//
		//
		//
		cancelMagazines(id: number) {
				try {
						this.showMessage.btnCancelVisible = true;
						this.showMessage.message = "The changes will not be saved! \nAre you sure?";
						this.showMessage.showDialog();
				}
				catch (e) { }
		}
		
		//
		// newDocument
		//
		onClickOk(args) {
				//console.log(args.operationsID);
				//console.log(args.dateDocument);

				let operations = this.mainService.operations.filter(p => p.Id == args.operationsID);
				let operationsCode = operations[0]['OperationsCode'];

				let data: IMagazines[] = [
						{
								Id: 0,
								UserID: '',
								OperationsID: args.operationsID,
								NumberDocument: args.dateDocumentStr + '/' + operationsCode,
								DateDocument: args.dateDocument,
								UserName: '',
								Note: '',
								DateRecord: new Date(),
								OperationsName: '',
								OperationsCode: operationsCode
						}
				];

				if (data.length > 0) {
						this.postMagazines(data);
				}
		}

		//
		// showMessage
		//
		onShowMessageOk(args) {
				this.magazinesService.cancelEdit();
		}

		//
		//
		//
		getData() {
				this.getMagazines(this.menuId);
				this.magazinesService.menuOperations = this.setMenuOperations(this.menuId);
		}

		getMagazines(id: number): void {
				this.magazinesService
						.getMagazines(id)
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.dsMagazines = data,
						error => this.errorMessage = <any>error);
		}

		//
		//
		//
		postMagazines(data: IMagazines[]): any {
				this.magazinesService
						.postMagazines(data)
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.postResult(data),
						error => this.errorMessage = <any>error);
		}

		postResult(data: IMagazines[]) {
				let result: IMagazines = data[0];

				if (result.Id == -2) {
						this.showInfo.message = result.Note;
						this.showInfo.showDialog();
						return;
				}

				if (result.Id <= 0) {
						return;
				}

				this.dsMagazines.push(result);
				this.gridOptions.api.setRowData(this.dsMagazines);
		}

		//
		//
		//
		putMagazines(id: number, data: IMagazines[]): any {
				this.magazinesService
						.putMagazines(id, data)
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.putResult(data),
						error => this.errorMessage = <any>error);
		}

		putResult(data: IMagazines[]) {
				let result: IMagazines = data[0];

				if (result.Id <= 0) {
						return;
				}

				let magazinesRow: IMagazines = this.dsMagazines.filter(
						p => p.Id == this.magazinesService.magazinesID)[0];

				magazinesRow.Id = result.Id;
				magazinesRow.UserID = result.UserID;
				magazinesRow.OperationsID = result.OperationsID;
				magazinesRow.NumberDocument = result.NumberDocument;
				magazinesRow.DateDocument = result.DateDocument;
				magazinesRow.UserName = result.UserName;
				magazinesRow.Note = result.Note;
				magazinesRow.DateRecord = result.DateRecord;
				magazinesRow.OperationsName = result.OperationsName;
				magazinesRow.OperationsCode = result.OperationsCode;

				let rowIndex = this.gridOptions.api.getFocusedCell().rowIndex;
				let rowNode = this.gridOptions.api.getDisplayedRowAtIndex(rowIndex)[0];

				var params = {
						rowNodes: rowNode
				};

				this.gridOptions.api.refreshCells(params);

				this.magazinesService.saveMagazines();
		}

		//
		//
		//
		setMenuOperations(id: number): IMenuOperations[] {
				let operations = this.mainService.operations;

				let mainMenu = this.mainService.mainMenu.filter(p => p.Id == this.menuId);
				let operationsList: string[] = mainMenu[0].OperationsIDStr.split(';');

				let menuOperations: IMenuOperations[] = [];

				for (let id of operationsList) {
						let idOperations: IMenuOperations[] = operations.filter(p => p.Id.toString() === id);

						for (let row of idOperations) {
								menuOperations.push(row);
						}
				}

				return menuOperations;
		}
}

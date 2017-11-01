import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DxDropDownBoxComponent } from 'devextreme-angular';
import { DxDataGridComponent } from "devextreme-angular";

import { MagazinesService } from '../../services/magazines.service';
import { IMenuOperations } from '../../index';

declare var require: any

@Component({
		selector: 'app-oper-drop-down-box',
		templateUrl: './oper-drop-down-box.component.html',
		styleUrls: ['./oper-drop-down-box.component.css'],
		encapsulation: ViewEncapsulation.None
})
export class AppOperDropDownBoxComponent implements OnInit {
		@ViewChild("dropDownBox") dropDownBox: DxDropDownBoxComponent;
		@ViewChild('dataGrid') dataGrid: DxDataGridComponent;
		public dsOperations: IMenuOperations[] = [];
		_gridBoxValue: number;
		focusCellIndex: number = 0;

		constructor(private magazinesService: MagazinesService) { }

		ngOnInit() {
				this.getOperations();
		}

		ngAfterViewInit(): void {
				this.dropDownBox.instance.option("dropDownOptions.width", 0);
				this.dropDownBox.instance.option("dropDownOptions.height", 0);

				this.dropDownBox.instance.open();
				this.dropDownBox.instance.close();

				this.dropDownBox.instance.option("dropDownOptions.width", 330);
				this.dropDownBox.instance.option("dropDownOptions.height", "auto");

				var DevExpress = require("devextreme/bundles/modules/core");
				var ui = DevExpress.ui = require("devextreme/bundles/modules/ui");
				ui.dxOverlay = require("devextreme/ui/popup");
				ui.dxOverlay.baseZIndex(3000000000);
		}

		//
		//
		//
		onOpened(e) {
				//console.log('onOpened');
				try {
						this.dataGrid.instance.selectRowsByIndexes([0]);
						this._gridBoxValue = this.dataGrid.instance.getSelectedRowsData()[0]["Id"];
				}
				catch(e){}
		}

		onClosed(e) {
		}
		
		get gridBoxValue(): number {
				return this._gridBoxValue;
		}

		set gridBoxValue(value: number) {
				this._gridBoxValue = value;
		}

		gridBox_displayExpr(item) {
				return item && item.OperationsCaption + " : " + item.OperationsCode;
		}

		//
		// dataGrid
		//
		onContentReady(e) {
		}

		onSelectionChanged(e) {
				this._gridBoxValue = e.selectedRowsData[0]["Id"];
		}

		onRowPrepared(e) {
		}

		onRowClick(e) {
				let component = e.component;
				let prevClickTime = component.lastClickTime;

				component.lastClickTime = new Date();

				if (prevClickTime && (component.lastClickTime - prevClickTime < 300)) {
						this.dropDownBox.instance.close();
				}
				else {
				}
				e.jQueryEvent.stopPropagation();
		}

		onCellPrepared(e) {
				if (e.rowType == 'data' && e.column.dataField === 'OperationsCode') {
						e.cellElement.css('background-color', '#FFF8DC');
				}
		}

		onCellClick(e) {
				let rowIndex = e.rowIndex;
				let colIndex = e.columnIndex;
				e.component.focus(e.component.getCellElement(rowIndex, colIndex));

				this.focusCellIndex = e.columnIndex;
		}

		onKeyDown(e) {
				let selKey = e.component.getSelectedRowKeys();
				if (selKey.length) {
						let currentKey = selKey[0];
						var index = e.component.getRowIndexByKey(currentKey);
						let countRows = e.component.totalCount();
						if (e.jQueryEvent.keyCode == 38) {

								index--;
								if (index < 0) {
										index = 0;
								}

								if (index >= 0) {
										e.component.selectRowsByIndexes([index]);
										e.jQueryEvent.stopPropagation();
								}
						}
						else if (e.jQueryEvent.keyCode == 40) {
								index++;
								if (index < countRows) {
										e.component.selectRowsByIndexes([index]);
										e.jQueryEvent.stopPropagation();
								}
						}

						if (e.jQueryEvent.keyCode == 13) {
								this.dropDownBox.instance.close();
						}
				}
		}

		getOperations(): void {
				this.dsOperations = this.magazinesService.menuOperations;
		}
}

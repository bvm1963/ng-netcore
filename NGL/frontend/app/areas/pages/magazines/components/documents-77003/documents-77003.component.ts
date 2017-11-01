import { Component, OnInit, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { EJComponents } from 'ej-angular2';

import { MagazinesService } from '../../services/magazines.service';
import { DocumentsDepartment2Service } from '../../services/documents-department2.service';
import { IDocumentsDepartment2 } from '../../index';

@Component({
		selector: 'app-documents-77003',
		templateUrl: './documents-77003.component.html',
		styleUrls: ['./documents-77003.component.css'],
		encapsulation: ViewEncapsulation.None
})
export class Documents77003Component implements OnInit, OnDestroy {
		@ViewChild('grid') grid: EJComponents<any, any>;
		@ViewChild('toolControls') toolControls: EJComponents<any, any>;
		@ViewChild('toolEdits') toolEdits: EJComponents<any, any>;
		public dsDocuments: IDocumentsDepartment2[] = [];
		public errorMessage: string;
		public selectionMode: any;
		public textWrapSettings: any;
		public editSettings: any;
		public keySettings: any;
		// toolbar
		public toolFields: any;
		public toolSeparator: boolean;
		public toolControlsData: any;
		public toolEditsData: any;
		// subscribe
		private aliveSubscribe: boolean = true;

		constructor(
				private magazinesService: MagazinesService,
				private documentsDepartment2Service: DocumentsDepartment2Service) {
				this.selectionMode = { selectionMode: ["row"] };
				this.textWrapSettings = { wrapMode: ej.Grid.WrapMode.Header };
				this.editSettings = { allowEditing: true, editMode: "normal" };
				this.keySettings = { saveRequest: "13", editRecord: "115", cancelRequest: "27" };
				// toolbar
				this.toolFields = magazinesService.toolFields;
				this.toolSeparator = magazinesService.toolSeparator;
				this.toolControlsData = magazinesService.toolControlsData;
				this.toolEditsData = magazinesService.toolEditsData;
				// custom events
				this.magazinesService.onSaveMagazines.observers.splice(0);
				this.magazinesService
						.onSaveMagazines
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(p => this.saveMagazines(p));

				this.magazinesService.onCancelEdit.observers.splice(0);
				this.magazinesService
						.onCancelEdit
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(p => this.cancelEdit(p));
		}

		ngOnInit() {
				this.getData();
		}

		ngOnDestroy() {
				this.aliveSubscribe = false;
		}

		ngAfterViewInit() {
				$("#toolControls").ejToolbar("disableItemByID", "iEmpty");
				$("#toolEdits").ejToolbar("disableItemByID", "iEmpty");
				$("#toolEdits").ejToolbar({ hide: true });

				this.magazinesService.toolControls = this.toolControls;
				this.magazinesService.grid = this.grid;
		}

		//
		// 
		//
		onToolControlsClick(args) {
				if (args.target.id === "iUpdate") {
						this.grid.widget.element.focus();

						try {
								if (this.grid.widget.getRows().length > 0 &&
										this.grid.widget.getSelectedRows().length == 0) {
										this.grid.widget.selectRows([0]);
								}
						}
						catch (e) { }

						$("#toolEdits").ejToolbar({ hide: false });
						$("#toolControls").ejToolbar({ hide: true });
				}

				if (args.target.offsetParent != null) {
						if (args.target.offsetParent.id === "iRefresh") {
								this.getData();
								this.magazinesService.setGridMagazinesFocus();
						}
				}
		}

		onToolEditsClick(args) {
				if (args.target.id === "iCancel") {
						this.magazinesService.cancelFunction();
				}

				if (this.grid.widget.model.isEdit == false) {
						if (args.target.id === "iSave") {
								this.promiseSaveData();
						}

						if (args.target.offsetParent != null) {
								if (args.target.offsetParent.id === "iRefresh") {
										this.getData();
										this.grid.widget.element.focus();
								}
						}
				}
		}

		onActionBegin(args) {
				try {
						if (args.requestType == "beginedit") {
								if (this.toolEdits.widget.model.hide == true) {
										args.cancel = true;
								}
								else {
										args.cancel = false;
								}
						}
				}
				catch (e) { }
		}

		onActionComplete(args) {
				try {
						if (args.requestType == "save") {
								let length = this.grid.widget.getRows().length;
								if (args.selectedRow < length - 1) {
										this.grid.widget.selectRows([args.selectedRow]);
								}
								else {
										this.grid.widget.selectRows([0]);
								}

								this.grid.widget.element.focus();
						}

						if (args.requestType == "cancel") {
								this.grid.widget.element.focus();
						}
				}
				catch (e) { }
		}

		//
		//
		//
		getData() {
				this.getDocuments77003(this.magazinesService.magazinesID);
		}

		getDocuments77003(id: number): void {
				this.documentsDepartment2Service
						.getDocumentsDepartment2(id)
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.dsDocuments = data,
						error => this.errorMessage = <any>error);
		}

		putDocuments77003(data: IDocumentsDepartment2[]): any {
				this.documentsDepartment2Service
						.putDocumentsDepartment2(data)
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.saveData(data),
						error => this.errorMessage = <any>error);
		}

		//
		// save
		//
		promiseSaveData() {
				Promise
						.resolve()
						.then(this.putDocuments77003(this.dsDocuments));
		}

		saveData(data: IDocumentsDepartment2[]): void {
				this.dsDocuments = data;
				this.magazinesService.saveFunction();
		}

		saveMagazines(mode: boolean) {
				try {
						$("#toolControls").ejToolbar({ hide: false });
						$("#toolEdits").ejToolbar({ hide: true });
						this.grid.widget.endEdit();
						this.magazinesService.setGridMagazinesFocus();
				}
				catch (e) { }
		}

		cancelEdit(mode: boolean) {
				try {
						if (this.magazinesService.getEditMode() == true) {
								this.getData();
								this.grid.widget.endEdit();
						}

						$("#toolControls").ejToolbar({ hide: false });
						$("#toolEdits").ejToolbar({ hide: true });

						this.magazinesService.setGridMagazinesFocus();
				}
				catch (e) { }
		}
}

import { Component, OnInit, ViewChild, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { EJComponents } from 'ej-angular2';

import { AppOperDropDownBoxComponent } from '../oper-drop-down-box/oper-drop-down-box.component';

declare var require: any

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
		styleUrls: ['./new-document.component.css'],
		encapsulation: ViewEncapsulation.None
})
export class NewDocumentComponent implements OnInit {
		@ViewChild('newDocument') newDocument: EJComponents<any, any>;
		@ViewChild("popupOperations") popupOperations: AppOperDropDownBoxComponent;
		@ViewChild('dateDocument') dateDocument: EJComponents<any, any>;
		showOnInit: boolean;
		enablemodal: boolean;
		resize: boolean;
		responsive: boolean;
		target: any;
		inputError: boolean;
		//
		// ej-datepicker
		//
		locale: string;
		initDate: Date;

		constructor() {
				this.showOnInit = false;
				this.enablemodal = true;
				this.resize = false;
				this.responsive = false;
				this.target = ".area-modal";
				//
				// ej-datepicker
				//
				this.locale = 'de-DE';
				this.initDate = new Date();
				this.initDate.setDate(this.initDate.getDate() - 1);
		}

  ngOnInit() {
		}

		ngAfterViewInit() {
		}

		showDialog() {
				this.newDocument.widget.element.ejDialog('open');
		}

		onClose(args) {
				this.inputError = false;
		}

		@Output() clickOk = new EventEmitter<EventArgs>();
		onOK(args) {
				if (this.popupOperations.dropDownBox.text == '' ||
						this.dateDocument.widget.element[0].value.toString().length < 10) {
						this.inputError = true;
						return;
				}

				let dateValue: string[] = this.dateDocument.widget.element[0].value.split('.');
				let dd: string = dateValue[0];
				let mm: string = dateValue[1];
				let year: string = dateValue[2];

				let eventArgs = new EventArgs();
				eventArgs.operationsID = this.popupOperations.dropDownBox.value;
				eventArgs.dateDocument = mm + '.' + dd + '.' + year;
				eventArgs.dateDocumentStr = this.dateDocument.widget.element[0].value;
				this.clickOk.emit(eventArgs);
				
				this.inputError = false;
				this.newDocument.widget.element.ejDialog('close');
		}

		onCancel(args) {
				this.inputError = false;
				this.newDocument.widget.element.ejDialog('close');
		}
}

export class EventArgs {
		public operationsID: number;
		public dateDocument: string;
		public dateDocumentStr: string;
		constructor() {
		}
}

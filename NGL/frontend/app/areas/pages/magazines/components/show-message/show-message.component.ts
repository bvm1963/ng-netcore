import { Component, OnInit, ViewChild, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { EJComponents } from 'ej-angular2';

@Component({
		selector: 'app-show-message',
		templateUrl: './show-message.component.html',
		styleUrls: ['./show-message.component.css'],
		encapsulation: ViewEncapsulation.None
})
export class ShowMessageComponent implements OnInit {
		@ViewChild('showMessage') showMessage: EJComponents<any, any>;
		showOnInit: boolean;
		enablemodal: boolean;
		resize: boolean;
		responsive: boolean;
		target: any;
		btnCancelVisible: boolean;
		message: string;

		constructor() {
				this.showOnInit = false;
				this.enablemodal = true;
				this.resize = false;
				this.responsive = false;
				this.target = ".area-modal";
		}

		ngOnInit() {
		}

		ngAfterViewInit() {
		}

		showDialog() {
				if (this.btnCancelVisible == false) {
						{ document.getElementById("cancel").style.display = "none"; }
				}
				else {
						{ document.getElementById("cancel").style.display = "block"; }
				}

				this.showMessage.widget.element.ejDialog('open');
		}

		onClose(args) {
		}

		@Output() clickOk = new EventEmitter<ShowMessageEventArgs>();
		onOK(args) {
				let eventArgs = new ShowMessageEventArgs();
				this.clickOk.emit(eventArgs);
				this.showMessage.widget.element.ejDialog('close');
		}

		@Output() clickCancel = new EventEmitter<ShowMessageEventArgs>();
		onCancel(args) {
				let eventArgs = new ShowMessageEventArgs();
				this.clickCancel.emit(eventArgs);
				this.showMessage.widget.element.ejDialog('close');
		}
}

export class ShowMessageEventArgs {

		constructor() {
		}
}

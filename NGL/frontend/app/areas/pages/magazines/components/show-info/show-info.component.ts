import { Component, OnInit, ViewChild, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { EJComponents } from 'ej-angular2';

@Component({
		selector: 'app-show-info',
		templateUrl: './show-info.component.html',
		styleUrls: ['./show-info.component.css'],
		encapsulation: ViewEncapsulation.None
})
export class ShowInfoComponent implements OnInit {
		@ViewChild('showInfo') showInfo: EJComponents<any, any>;
		showOnInit: boolean;
		enablemodal: boolean;
		resize: boolean;
		responsive: boolean;
		target: any;
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
				this.showInfo.widget.element.ejDialog('open');
		}

		onClose(args) {
		}

		@Output() clickOk = new EventEmitter<ShowInfoEventArgs>();
		onOK(args) {
				let eventArgs = new ShowInfoEventArgs();
				this.clickOk.emit(eventArgs);
				this.showInfo.widget.element.ejDialog('close');
		}
}

export class ShowInfoEventArgs {

		constructor() {
		}
}

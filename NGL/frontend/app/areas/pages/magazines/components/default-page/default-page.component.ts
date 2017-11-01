import { Component, OnInit } from '@angular/core';

import { MagazinesService } from '../../services/magazines.service';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.css']
})
export class DefaultPageComponent implements OnInit {
		// toolbar
		public toolFields: any;
		public toolSeparator: boolean;
		public toolControlsData: any;

		constructor(private magazinesService: MagazinesService) {
				// toolbar
				this.toolFields = magazinesService.toolFields;
				this.toolSeparator = magazinesService.toolSeparator;
				this.toolControlsData = magazinesService.toolControlsData;
		}

  ngOnInit() {
  }

		ngAfterViewInit() {
				$("#toolControls").ejToolbar("disableItemByID", "iEmpty");
				$("#toolControls").ejToolbar("disableItemByID", "iUpdate");
				$("#toolControls").ejToolbar("disableItemByID", "iRefresh");
		}
}

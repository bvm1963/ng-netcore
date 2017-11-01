import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from "../../services/main.service";
import { IMainMenu } from '../../interfaces/menu.interface';

@Component({
		selector: 'main-menu',
		templateUrl: './menu.component.html',
		styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
		errorMessage: string;
		mainMenu: IMainMenu[] = [];
		fieldsvalues: any;
		selectedItem: IMainMenu;
		itemTypeInt: number;

		constructor(
				private router: Router,
				private mainService: MainService) { }

		ngOnInit() {
				this.mainMenu = this.mainService.mainMenu;

				this.fieldsvalues = {
						dataSource: this.mainMenu,
						parentId: "ParentID",
						id: "Id",
						text: "MenuCaption"
				};
		}

		onClick(args) {
				if (args.ID != undefined) {
						this.selectedItem = this.mainMenu.filter(p => p.Id == args.ID)[0];
						this.itemTypeInt = this.selectedItem.ItemTypeInt;

						if (this.itemTypeInt == 1) {
								//console.log(this.selectedItem.MenuCaption + ":" + this.selectedItem.PageRoute);
								this.router.navigate(['/' + this.selectedItem.PageRoute]);
						}
				}
		}
}

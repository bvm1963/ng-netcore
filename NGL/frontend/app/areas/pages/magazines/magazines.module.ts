import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AgGridModule } from "ag-grid-angular/main";
import { EJAngular2Module } from 'ej-angular2';
import { DxDataGridModule } from 'devextreme-angular';
import { DxDropDownBoxModule } from 'devextreme-angular';

import 'syncfusion-ej-global-all/i18n/ej.culture.ru-RU.min.js';
import 'syncfusion-ej-global-all/l10n/ej.localetexts.ru-RU.min.js';
import 'syncfusion-ej-global-all/i18n/ej.culture.de-DE.min.js';
import 'syncfusion-ej-global-all/l10n/ej.localetexts.de-DE.min.js';

import { MagazinesRoutePageComponent } from './components/magazines-route-page/magazines-route-page.component';
import { MagazinesMasterComponent } from './components/magazines-master/magazines-master.component';
import { MagazinesChildComponent } from './components/magazines-child/magazines-child.component';
import { DefaultPageComponent } from './components/default-page/default-page.component';

import { MagazinesService } from './services/magazines.service';
import { DocumentsDepartment1Service } from './services/documents-department1.service';
import { DocumentsDepartment2Service } from './services/documents-department2.service';
import { DocumentsDepartment3Service } from './services/documents-department3.service';

import { AppOperDropDownBoxComponent } from './components/oper-drop-down-box/oper-drop-down-box.component';
import { NewDocumentComponent } from './components/new-document/new-document.component';
import { ShowMessageComponent } from './components/show-message/show-message.component';
import { ShowInfoComponent } from './components/show-info/show-info.component';
import { Documents77001Component } from './components/documents-77001/documents-77001.component';
import { Documents77002Component } from './components/documents-77002/documents-77002.component';
import { Documents77003Component } from './components/documents-77003/documents-77003.component';
import { Documents77004Component } from './components/documents-77004/documents-77004.component';

@NgModule({
		declarations: [
				MagazinesRoutePageComponent,
				MagazinesMasterComponent,
				MagazinesChildComponent,
				DefaultPageComponent,
				AppOperDropDownBoxComponent,
				NewDocumentComponent,
				ShowMessageComponent,
				ShowInfoComponent,
				Documents77001Component,
				Documents77002Component,
				Documents77003Component,
				Documents77004Component
		],
		imports: [
				BrowserModule,
				FormsModule,
				ReactiveFormsModule,
				RouterModule,
				AgGridModule.withComponents([]),
				EJAngular2Module.forRoot(),
				DxDataGridModule,
				DxDropDownBoxModule
		],
		providers: [
				MagazinesService,
				DocumentsDepartment1Service,
				DocumentsDepartment2Service,
				DocumentsDepartment3Service
		],
		exports: [
				MagazinesRoutePageComponent,
				MagazinesMasterComponent,
				DefaultPageComponent,
				AppOperDropDownBoxComponent,
				NewDocumentComponent,
				ShowMessageComponent,
				ShowInfoComponent,
				Documents77001Component,
				Documents77002Component,
				Documents77003Component,
				Documents77004Component
		]
})

export class MagazinesModule { }
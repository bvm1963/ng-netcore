import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EJAngular2Module } from 'ej-angular2';

import { MainService } from "./services/main.service";
import { MenuService } from "./services/menu.service";

import { BodyComponent } from './components/body/body.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageContentComponent } from './components/page-content/page-content.component';

@NgModule({
		declarations: [
				BodyComponent,
				MainPageComponent,
				MenuComponent,
				PageContentComponent
		],
		imports: [
				BrowserModule,
				CommonModule,
				RouterModule,
				FormsModule,
				ReactiveFormsModule,
				EJAngular2Module.forRoot()
		],
		providers: [
				MainService,
				MenuService
		],
		exports: [
				BodyComponent,
				MainPageComponent,
				MenuComponent,
				PageContentComponent
		]
})

export class MainModule { }
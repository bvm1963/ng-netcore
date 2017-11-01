import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from "./services/auth-guard.service";
import { UserService } from "./services/user.service";
import { AuthHttp } from "./services/auth-http.service";
import { AuthService } from "./services/auth.service";

@NgModule({
		declarations: [
				LoginComponent
		],
		imports: [
				BrowserModule,
				FormsModule,
				ReactiveFormsModule
		],
		providers: [
				AuthGuard,
				UserService,
				AuthHttp,
				AuthService
		],
		exports: [
				LoginComponent
		]
})

export class UserModule { }
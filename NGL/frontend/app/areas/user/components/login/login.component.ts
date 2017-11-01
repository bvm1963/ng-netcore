import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

import { MenuService } from '../../../main/services/menu.service';
import { MainService } from '../../../main/services/main.service';

import { IOperations } from '../../../main/interfaces/main.interface';
import { IMainMenu } from '../../../main/interfaces/menu.interface';

@Component({
		selector: 'app-login',
		templateUrl: './login.component.html',
		styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
		@ViewChild('username') username;
		errorMessage: string;
		title = "Login";
		loginForm = null;
		loginError = false;
		isAuthenticated = false;
		// subscribe
		private aliveSubscribe: boolean = true;

		constructor(private mainService: MainService,
				private menuService: MenuService,
				private userService: UserService,
				private authService: AuthService,
				private router: Router,
				private fb: FormBuilder) { }

		ngOnInit() {
				this.loginForm = this.fb.group({
						username: ["", Validators.required],
						password: ["", Validators.required]
				});

				this.loginForm.valueChanges
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(data => {
								this.loginError = false;
						});

				this.username.nativeElement.focus();
		}

		ngOnDestroy() {
				this.aliveSubscribe = false;
		}

		performLogin(e) {
				e.preventDefault();
				var username = this.loginForm.value.username;
				var password = this.loginForm.value.password;
				this.authService.login(username, password)
						.takeWhile(() => this.aliveSubscribe)
						.subscribe((data) => {
								// login successful
								this.loginError = false;
								this.userService.isAuthenticated = true;
								var auth = this.authService.getAuth();
								//alert("Our Token is: " + auth.access_token);
								this.promiseGetOperations();
						},
						(err) => {
								console.log(err);
								// login failure
								this.loginError = true;
								this.userService.isAuthenticated = false;
								this.authService.logout();
						});

				this.username.nativeElement.focus();
		}

		//
		//
		//
		promiseGetOperations() {
				Promise
						.resolve()
						.then(this.getOperations());
		}

		getOperations(): any {
				this.mainService
						.getOperations()
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.initOperations(data),
						error => this.errorMessage = <any>error);
		}

		initOperations(data: IOperations[]): void {
				this.mainService.operations = data;
				this.promiseGetMainMenu();
				//console.log('operations: ' + JSON.stringify(this.mainService.operations));
		}

		//
		//
		//
		promiseGetMainMenu() {
				Promise
						.resolve()
						.then(this.getMainMenu());
		}

		getMainMenu(): any {
				this.menuService
						.getMainMenu()
						.takeWhile(() => this.aliveSubscribe)
						.subscribe(
						data => this.initMainMenu(data),
						error => this.errorMessage = <any>error);
		}

		initMainMenu(data: IMainMenu[]): void {
				this.mainService.mainMenu = data;
				this.router.navigate(['/main']);
				//console.log('mainService.mainMenu: ' + JSON.stringify(this.mainService.mainMenu));
		}
}

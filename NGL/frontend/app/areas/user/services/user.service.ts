import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AuthService } from "./auth.service";

@Injectable()
export class UserService {
		isAuthenticated = false;

		constructor(private router: Router,
				private authService: AuthService) { }

		signOut(): Observable<any> {
				this.isAuthenticated = false;
				this.authService.logout();
				this.router.navigate(['/login']);
				return Observable.of({});
		}
}

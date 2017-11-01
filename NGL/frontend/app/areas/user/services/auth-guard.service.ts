import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';

import { UserService } from './user.service';
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

		constructor(private userService: UserService,
				private router: Router,
				private authService: AuthService) { }

    canActivate(): boolean {
        //console.log('AuthGuard#canActivate called ' + this.userService.isAuthenticated);

								if (!this.userService.isAuthenticated) {
            console.log('not auth');
												this.router.navigate(['/login']);
						}
						return this.authService.isLoggedIn();
    }

    canActivateChild(): boolean {
        return this.canActivate();
    }
}
import {
		NgModule,
		enableProdMode,
		ErrorHandler
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';

import { UserService } from './areas/user/services/user.service';
import { AuthGuard } from './areas/user/services/auth-guard.service';

// Add the RxJS Observable operators we need in this app.
import './rxjs-extensions';

import {
		ConfigService,
		CommonService
} from './infrastructure/index';

import { UserModule } from './areas/user/index';
import { MainModule } from './areas/main/index';
import { MagazinesModule } from './areas/pages/magazines/index';
import { AboutModule } from './areas/pages/about/index';

enableProdMode();

class CustomErrorHandler implements ErrorHandler {
		call(error, stackTrace = null, reason = null) {
				console.log(error + "\n" + stackTrace);
		}
		handleError(error: any): void {
				console.log(error);
		}
}

@NgModule({
		declarations: [
				AppComponent
		],
		imports: [
				BrowserModule,
				FormsModule,
				HttpModule,
				RouterModule.forRoot(appRoutes),
				BrowserAnimationsModule,
				UserModule,
				MainModule,
				MagazinesModule,
				AboutModule
		],
		providers: [
				{ provide: APP_BASE_HREF, useValue: '/' },
				AuthGuard,
				UserService,
				ConfigService,
				CommonService
		],
		bootstrap: [
				AppComponent]
})
export class AppModule { }

import { Routes } from '@angular/router';

import { LoginComponent } from './areas/user/components/login/login.component';
import { AuthGuard } from './areas/user/services/auth-guard.service';

import { MainPageComponent } from './areas/main/components/main-page/main-page.component';

import {
		DefaultPageComponent,
		MagazinesRoutePageComponent,
		MagazinesMasterComponent,
		Documents77001Component,
		Documents77002Component,
		Documents77003Component,
		Documents77004Component
}
		from './areas/pages/magazines/index';

import { AboutComponent } from './areas/pages/about/index';

export const appRoutes: Routes = [
		{ path: 'login', component: LoginComponent },
		{
				path: 'main', component: MainPageComponent, canActivate: [AuthGuard],
				children: [
						{
								path: '', canActivateChild: [AuthGuard],
								children: [
										{ path: '', redirectTo: 'default', pathMatch: 'full' },
										{ path: 'magazinesroute/:id', component: MagazinesRoutePageComponent },
										{
												path: 'magazines/:id', component: MagazinesMasterComponent,
												children: [
														{
																path: '', canActivateChild: [AuthGuard],
																children: [
																		{ path: '', redirectTo: 'default', pathMatch: 'full' },
																		{ path: 'default', component: DefaultPageComponent },
																		{ path: '77001', component: Documents77001Component },
																		{ path: '77002', component: Documents77002Component },
																		{ path: '77003', component: Documents77003Component },
																		{ path: '77004', component: Documents77004Component }
																]
														}
												]
										},
										{ path: 'about', component: AboutComponent }
								]
						}
				]
		},
		{ path: '', component: LoginComponent },
		{ path: '**', component: LoginComponent }
];
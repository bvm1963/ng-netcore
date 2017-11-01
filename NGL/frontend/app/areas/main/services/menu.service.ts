import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../user/services/auth-http.service';
import { ConfigService, CommonService } from '../../../infrastructure/index';
import { IMainMenu } from '../interfaces/menu.interface';

@Injectable()
export class MenuService {
		baseUrl: string = '';

		constructor(private http: AuthHttp,
		private configService: ConfigService,
		private commonService: CommonService) {

		this.baseUrl = configService.getApiURI('mainmenu');
	}

	getMainMenu(): Observable<IMainMenu[]> {
		return this.http.get(this.baseUrl, this.commonService.getRequestOptions())
			.map((response: Response) => {
				return <IMainMenu[]>this.commonService.extractArray(response);
			})
			//.do(data => console.log('All: ' + JSON.stringify(data)))
			.catch(this.commonService.handleError);
	}
}

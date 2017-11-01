import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../user/services/auth-http.service';
import { ConfigService, CommonService } from '../../../infrastructure/index';
import { IOperations } from '../interfaces/main.interface';
import { IMainMenu } from '../interfaces/menu.interface';

@Injectable()
export class MainService {
		baseUrl: string = '';

		operations: IOperations[] = [];
		mainMenu: IMainMenu[] = [];

		constructor(private http: AuthHttp,
				private configService: ConfigService,
				private commonService: CommonService) {

				this.baseUrl = configService.getApiURI('main');
		}

		getOperations(): Observable<IOperations[]> {
				return this.http.get(this.baseUrl, this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IOperations[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}
}

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../../user/services/auth-http.service';
import { ConfigService, CommonService } from '../../../../infrastructure/index';
import { IDocumentsDepartment2 } from '../index';

@Injectable()
export class DocumentsDepartment2Service {
		baseUrl: string = '';

		constructor(private http: AuthHttp,
				private configService: ConfigService,
				private commonService: CommonService) {

				this.baseUrl = configService.getApiURI('documentsdepartment2');
		}

		getDocumentsDepartment2(id: number): Observable<IDocumentsDepartment2[]> {
				return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IDocumentsDepartment2[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}

		putDocumentsDepartment2(data: IDocumentsDepartment2[]): Observable<IDocumentsDepartment2[]> {
				return this.http.put(this.baseUrl + '/' + data[0].MagazinesID, JSON.stringify(data), this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IDocumentsDepartment2[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}
}
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../../user/services/auth-http.service';
import { ConfigService, CommonService } from '../../../../infrastructure/index';
import { IDocumentsDepartment1 } from '../index';

@Injectable()
export class DocumentsDepartment1Service {
		baseUrl: string = '';

		constructor(private http: AuthHttp,
				private configService: ConfigService,
				private commonService: CommonService) {

				this.baseUrl = configService.getApiURI('documentsdepartment1');
		}

		getDocumentsDepartment1(id: number): Observable<IDocumentsDepartment1[]> {
				return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IDocumentsDepartment1[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}

		putDocumentsDepartment1(data: IDocumentsDepartment1[]): Observable<IDocumentsDepartment1[]> {
				return this.http.put(this.baseUrl + '/' + data[0].MagazinesID, JSON.stringify(data), this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IDocumentsDepartment1[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}
}
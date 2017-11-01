import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';

import { AuthHttp } from '../../../user/services/auth-http.service';
import { ConfigService, CommonService } from '../../../../infrastructure/index';
import { IDocumentsDepartment3 } from '../index';

@Injectable()
export class DocumentsDepartment3Service {
		baseUrl: string = '';

		constructor(private http: AuthHttp,
				private configService: ConfigService,
				private commonService: CommonService) {

				this.baseUrl = configService.getApiURI('documentsdepartment3');
		}

		getDocumentsDepartment3(id: number): Observable<IDocumentsDepartment3[]> {
				return this.http.get(this.baseUrl + '/' + id, this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IDocumentsDepartment3[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}

		putDocumentsDepartment3(data: IDocumentsDepartment3[]): Observable<IDocumentsDepartment3[]> {
				return this.http.put(this.baseUrl + '/' + data[0].MagazinesID, JSON.stringify(data), this.commonService.getRequestOptions())
						.map((response: Response) => {
								return <IDocumentsDepartment3[]>this.commonService.extractArray(response);
						})
						.catch(this.commonService.handleError);
		}
}
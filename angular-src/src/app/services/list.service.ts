import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { List } from './../models/list';
import { environment } from './../../environments/environment';

@Injectable()
export class ListService {

	constructor(private http: HttpClient) { }

	getList(): Observable<any> {
		const URL = `${environment.server}/bucketlist/`;

		return this.http.get(URL);
	}

	deleteList(list_id: string) {
		const URL = `${environment.server}/bucketlist/${list_id}`;

		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.delete(URL, { headers });
	}

	addList(list: List) {
		const URL = `${environment.server}/bucketlist/`;

		let headers = new HttpHeaders().set('Content-Type', 'application/json');

		return this.http.post(URL, list, { headers });
	}

}

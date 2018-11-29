import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';

const username = 'papetagendazv_zouleka';
const password = 'campus01';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${username}:${password}`)
    })
};

@Injectable()
export class CoucheDbService {

    urlEvents = 'https://papetagendazv.alwaysdata.net/data/papetagendazv_agenda/_all_docs?include_docs=true';
    baseUrl = 'https://papetagendazv.alwaysdata.net/data/papetagendazv_agenda/';

    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<any> {
        return this.http.get<any>(this.urlEvents);
    }

    deleteEvent(event: any): Observable<Response> {
        const delUrl = this.baseUrl + event._id + '?rev=' + event._rev;
        return this.http.delete<Response>(delUrl, httpOptions);
    }
}

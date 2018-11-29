import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';

@Injectable()
export class CoucheDbService {

    urlEvents = 'http://papetagendazv.alwaysdata.net/data/papetagendazv_agenda/_all_docs?include_docs=true';
    baseUrl = 'http://papetagendazv.alwaysdata.net/data/papetagendazv_agenda/';
    constructor(private http: HttpClient) { }

    getEvents(): Observable<any> {
        return this.http.get<any>(this.urlEvents);
    }

    deleteEvent(event: any): Observable<any> {
        return this.http.delete<any>(this.baseUrl + event._id);
    }
}

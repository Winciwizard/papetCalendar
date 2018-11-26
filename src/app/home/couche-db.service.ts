import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';

@Injectable()
export class CoucheDbService {

    urlEvents = 'http://papetagendazv.alwaysdata.net/data/papetagendazv_agenda/_all_docs?include_docs=true';
    constructor(private http: HttpClient) { }

    getEvents(): Observable<any> {
        return this.http.get<any>(this.urlEvents);
    }
}

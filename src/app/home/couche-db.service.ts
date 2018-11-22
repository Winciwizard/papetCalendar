import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs/internal/Observable';

@Injectable()
export class CoucheDbService {

    url = 'http://papetagendazv.alwaysdata.net/data/agendapapet_table/b27f41d036d501f72554d84f861da747';
    constructor(private http: HttpClient) { }

    getEvent(): Observable<any> {
        return this.http.get<any>(this.url);
    }
}

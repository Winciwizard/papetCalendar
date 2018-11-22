import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';


@Component({
    selector: 'app-calendar-nav',
    templateUrl: './calendar-nav.component.html',
    styleUrls: ['./calendar-nav.component.scss']
})
export class CalendarNavComponent implements OnInit {

    localeString = 'fr';
    momentDate: any;
    @Output() navDate = new EventEmitter<any>();

    constructor() {
    }

    ngOnInit() {
        moment.locale(this.localeString);
        this.momentDate = moment().set('date', 1);
        this.navDate.emit(this.momentDate);
    }

    changeViewDate(num, datePart) {
        this.momentDate.add(num, datePart);
        this.momentDate = moment(this.momentDate);
        this.navDate.emit(this.momentDate);
    }

}

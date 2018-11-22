import {Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar-month',
    templateUrl: './calendar-month.component.html',
    styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnInit {

    constructor() {
    }
    private _date;
    @Input() set date(val: any) {
        this._date = val;
        console.log(val);
        this.makeGrid(val);
    }
    gridArr: Array<any> = [];
    get date(): any {
        return this._date;
    }

    ngOnInit() {
    }

    makeGrid(date1: any) {
        this.gridArr = [];

        const firstDayDate = moment(date1).startOf('month');
        const initialEmptyCells = firstDayDate.weekday();
        const lastDayDate = moment(date1).endOf('month');
        const lastEmptyCells = 6 - lastDayDate.weekday();
        const daysInMonth = date1.daysInMonth();
        const arrayLength = initialEmptyCells + lastEmptyCells + daysInMonth;

        for (let i = 0; i < arrayLength; i++) {
            const obj: any = {};
            if (i < initialEmptyCells || i > initialEmptyCells + daysInMonth - 1) {
                obj.value = 0;
                obj.available = false;
            } else {
                obj.value = i - initialEmptyCells + 1;
            }
            this.gridArr.push(obj);
        }
    }

}

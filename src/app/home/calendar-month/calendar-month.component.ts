import {Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-calendar-month',
    templateUrl: './calendar-month.component.html',
    styleUrls: ['./calendar-month.component.scss']
})
export class CalendarMonthComponent implements OnChanges {
    @Input() monthDate: any;
    gridArr: Array<any>;
    tempArr: Array<any>;
    constructor() {
    }
    makeGrid(date1: any) {
        this.gridArr = [];
        this.tempArr = [];

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
                obj.value = moment().set({'year': date1.get('year'), 'month': date1.get('month'), 'date': (i - initialEmptyCells + 1) });
                obj.available = true;
            }
            this.tempArr.push(obj);
        }
        for (let j = 0; j < this.tempArr.length; j = j + 7) {
            const week = this.tempArr.slice(j, j + 7);
            this.gridArr.push(week);
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.makeGrid(changes.monthDate.currentValue);
    }

}

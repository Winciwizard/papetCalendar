import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-calendar-nav',
  templateUrl: './calendar-nav.component.html',
  styleUrls: ['./calendar-nav.component.scss']
})
export class CalendarNavComponent implements OnInit {

  localeString = 'fr';
  naveDate: any;
  @Output() date = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit() {
      moment.locale(this.localeString);
      this.naveDate = moment();
      this.date.emit(this.naveDate);
  }

    changeViewDate(num, datePart) {
        this.naveDate.add(num, datePart);
        // console.log(this.naveDate);
        this.date.emit(this.naveDate);
    }

}

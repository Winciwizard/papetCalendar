import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar-nav',
  templateUrl: './calendar-nav.component.html',
  styleUrls: ['./calendar-nav.component.scss']
})
export class CalendarNavComponent implements OnInit {

  localeString = 'fr';
  viewDate: any;
  constructor() { }

  ngOnInit() {
      moment.locale(this.localeString);
      this.viewDate = moment();
  }

    changeViewDate(num, datePart) {
        this.viewDate.add(num, datePart);
    }

}

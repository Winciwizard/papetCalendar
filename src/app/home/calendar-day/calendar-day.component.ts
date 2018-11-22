import { Component, OnInit } from '@angular/core';
import { CoucheDbService } from '../couche-db.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

  constructor(private couchDb: CoucheDbService) { }
  event: any;
  ngOnInit() {
      // this.getEvent();
  }
  getEvent(): void {
      this.couchDb.getEvent()
          .subscribe( event => this.event = event );
  }

}

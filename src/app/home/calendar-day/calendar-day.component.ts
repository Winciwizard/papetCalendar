import { Component, OnInit, Input } from '@angular/core';
import { CoucheDbService } from '../couche-db.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
    @Input() day: any;
    constructor(private couchDb: CoucheDbService) { }
    // event: any;
    ngOnInit() {
        console.log(this.day.value.format('Do'));
    }
    // getEvent(): void {
    //     this.couchDb.getEvent()
    //         .subscribe( event => this.event = event );
    // }

}

import { Component, OnInit, Input } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { CalendarEventPage} from '../calendar-event/calendar-event.page';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
    @Input() day: any;
    constructor(private modalController: ModalController) { }
    ngOnInit() {
    }
    async eventModal() {
        const event = await this.modalController.create({
            component: CalendarEventPage,
            componentProps: {day: this.day}
        });
        return await event.present();
    }


}

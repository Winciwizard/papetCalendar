import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';


@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.page.html',
  styleUrls: ['./calendar-event.page.scss'],
})
export class CalendarEventPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

    closeModal() {
        this.modalController.dismiss();
    }
}

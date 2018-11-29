import { Component, OnInit, Input } from '@angular/core';
import { ModalController} from '@ionic/angular';
import { CoucheDbService} from '../couche-db.service';


@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.page.html',
  styleUrls: ['./calendar-event.page.scss'],
})
export class CalendarEventPage implements OnInit {
    @Input() day: any;
  constructor(private modalController: ModalController, private couchDB: CoucheDbService) { }

  ngOnInit() {
  }

    closeModal() {
        this.modalController.dismiss();
    }
    deleteEvent() {
      this.couchDB.deleteEvent(this.day.events)
          .subscribe();
      this.closeModal();
    }
}

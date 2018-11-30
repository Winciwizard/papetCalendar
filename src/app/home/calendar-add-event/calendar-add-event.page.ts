import { Component, OnInit, Input } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {CoucheDbService} from '../couche-db.service';
import {Location} from '@angular/common';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calendar-add-event',
  templateUrl: './calendar-add-event.page.html',
  styleUrls: ['./calendar-add-event.page.scss'],
})
export class CalendarAddEventPage implements OnInit {
    @Input() day: any;
  constructor(private modalController: ModalController,
              private couchDB: CoucheDbService,
              private formBuilder: FormBuilder,
              private loc: Location) { }

  ngOnInit() {
  }
  // private currentDate = moment();

    closeModal() {
        this.modalController.dismiss();
    }
  addEvent() {
      this.couchDB.addEvent(this.day.events)
          .subscribe();
      this.closeModal();
  }

}

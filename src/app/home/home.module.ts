import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {NgModule, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CalendarNavComponent } from './calendar-nav/calendar-nav.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage, CalendarNavComponent, CalendarHeaderComponent]
})
export class HomePageModule implements OnInit {
    constructor() {}
    ngOnInit(): void {
    }
}

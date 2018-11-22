import {IonicModule} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import {NgModule, OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { CalendarNavComponent } from './calendar-nav/calendar-nav.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarMonthComponent } from './calendar-month/calendar-month.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage, CalendarNavComponent, CalendarHeaderComponent, CalendarMonthComponent, CalendarDayComponent]
})
export class HomePageModule implements OnInit {
    constructor() {}
    ngOnInit(): void {
    }
}

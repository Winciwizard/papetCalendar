import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'calendar-event', loadChildren: './home/calendar-event/calendar-event.module#CalendarEventPageModule' },
  { path: 'calendar-addEvent', loadChildren: './home/calendar-add-event/calendar-add-event.module#CalendarAddEventPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

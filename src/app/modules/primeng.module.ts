import { NgModule } from '@angular/core';
import {PickListModule} from 'primeng-lts/picklist';
import {TabViewModule} from 'primeng-lts/tabview';
import {CodeHighlighterModule} from 'primeng-lts/codehighlighter';
import {CalendarModule} from 'primeng-lts/calendar';
import {FullCalendarModule} from 'primeng-lts/fullcalendar';

const prime = [
  PickListModule,
  TabViewModule,
  CodeHighlighterModule,
  CalendarModule,
  FullCalendarModule
];

@NgModule({
  imports: [prime],
  exports: [prime]
})
export class PrimengModule { }

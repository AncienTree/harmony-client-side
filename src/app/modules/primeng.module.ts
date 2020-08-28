import { NgModule } from '@angular/core';
import {PickListModule} from 'primeng-lts/picklist';
import {TabViewModule} from 'primeng-lts/tabview';
import {CodeHighlighterModule} from 'primeng-lts/codehighlighter';
import {CalendarModule} from 'primeng-lts/calendar';

const prime = [
  PickListModule,
  TabViewModule,
  CodeHighlighterModule,
  CalendarModule
];

@NgModule({
  imports: [prime],
  exports: [prime]
})
export class PrimengModule { }

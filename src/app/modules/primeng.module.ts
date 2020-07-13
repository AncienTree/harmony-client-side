import { NgModule } from '@angular/core';
import {PickListModule} from 'primeng-lts/picklist';
import {TabViewModule} from 'primeng-lts/tabview';
import {CodeHighlighterModule} from 'primeng-lts/codehighlighter';

const prime = [
  PickListModule,
  TabViewModule,
  CodeHighlighterModule
];

@NgModule({
  imports: [prime],
  exports: [prime]
})
export class PrimengModule { }

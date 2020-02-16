import { Input, Component } from '@angular/core';

@Component({
  template: `
    <div class="schdule-cell">
      <h4>{{record}}</h4>
    </div>
  `
})
export class ScheduleCell {
  @Input() record: any;

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public prop: string = "children";
  public filterVal: string;
  public data: Object[] = [{
    name: 'Parent',
    children: [
      {
        name: 'Child 1',
        children: [
          {
          name: 'Child 3'
          }, {
          name: 'Child 4'
          }
        ]
      }, {
      name: 'Child 2'
      }
    ]
  }];
}

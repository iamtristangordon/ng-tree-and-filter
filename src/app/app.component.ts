import { Component } from '@angular/core';
import { Comment } from "./models/comment.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public prop: string = "children";
  public filterVal: string;
  public data: Comment[] = [{
    name: 'Parent',
    message: "ng5 for life...or at least until the next release.",
    children: [
      {
        name: 'Child 1',
        message: "eh, more of a vue guy myself...",
        children: [
          {
          name: 'Child 3',
          message: "Agreed."
          }, {
          name: 'Child 4',
          message: "noobs lol"
          }
        ]
      }, 
      {
        name: 'Child 2',
        message: "You're all wrong. May you turn away from your evil ways and let react guide you into the light..."
      }
    ]
  }];
}

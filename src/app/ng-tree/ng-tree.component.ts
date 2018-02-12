import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-ng-tree',
  templateUrl: './ng-tree.component.html',
  styleUrls: ['./ng-tree.component.scss'],
  animations: [
    trigger("animateComment", [
      transition(":enter", [
          style({transform: "scale(0.001)", opacity: 0}),
          animate("300ms", style({transform: "translateX(0)", opacity: 1}))
      ]),
      transition(":leave", [
          style({transform: "translateX(0)", opacity: 1}),
          animate("300ms", style({transform: "scale(0.001)", opacity: 0}))
      ])
    ])
  ]
})
export class NgTreeComponent implements OnInit {
  @Input('data') comments: Array<Object>;
  @Input('prop') prop: string;

  constructor() { }

  ngOnInit() {
  }

}

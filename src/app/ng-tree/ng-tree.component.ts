import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng-tree',
  templateUrl: './ng-tree.component.html',
  styleUrls: ['./ng-tree.component.scss']
})
export class NgTreeComponent implements OnInit {
  @Input('data') comments: Array<Object>;
  @Input('prop') prop: string;

  constructor() { }

  ngOnInit() {
  }

}

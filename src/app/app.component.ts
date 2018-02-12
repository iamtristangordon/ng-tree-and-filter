import { Component, OnInit } from '@angular/core';

import { Comment } from "./models/comment.model";
import { CommentsService } from "./services/comments.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private commentsService: CommentsService){}

  public prop: string = "children";
  public filterVal: string;
  public data: Comment[];

  ngOnInit() {
    this.commentsService.getComments().subscribe((data: Comment[]) => {
      this.data = data;
    });
  }
}

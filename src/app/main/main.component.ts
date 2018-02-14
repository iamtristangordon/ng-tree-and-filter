import { Component, OnInit } from "@angular/core";

import { Comment } from "../models/comment.model";
import { CommentsService } from "../services/comments.service";

@Component({
    selector: "main-root",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    constructor(
        private commentsService: CommentsService) { }

    public prop = "children";
    public filterVal: string;
    public data: Comment[];

    ngOnInit() {
        this.commentsService.getComments().subscribe((data: Comment[]) => {
            this.data = data;
        }, error => {
            console.error(error);
        });
    }
}

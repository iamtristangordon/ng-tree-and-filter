import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { Comment } from "../models/comment.model";
import { comments } from "../data/comments";

@Injectable()

export class CommentsService {
    public getComments(): Observable<Comment[]> {

        return Observable.of(comments);
    }
}
import { Pipe, PipeTransform } from "@angular/core";
import { Comment } from "../models/comment.model";

@Pipe({
    name: "commentFilter"
})

export class CommentFilterPipe implements PipeTransform {

    transform(data: Comment[], filterValue: string): Comment[] {
        if (!filterValue) {
            return data;
        }

        //copy original so that data isn't mutated
        let newData: Comment[] = JSON.parse(JSON.stringify(data));

        newData = newData.filter(function filter(comment: Comment) {
            console.log(comment.name);
            if (comment.name.toLowerCase().includes(filterValue.toLowerCase())) return true;

            if (comment.children) {
                return (comment.children = comment.children.filter(filter)).length;
            }
        });

        return newData;
    }
}
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "commentFilter"
})

export class CommentFilterPipe implements PipeTransform {

    transform(data: any[], filterValue: string): any[] {
        if (!filterValue) {
            return data;
        }

        //copy original so that data isn't mutated
        let newData = JSON.parse(JSON.stringify(data));

        newData = newData.filter(function filter(comment) {
            console.log(comment.name);
            if (comment.name.toLowerCase().includes(filterValue.toLowerCase())) return true;

            if (comment.children) {
                return (comment.children = comment.children.filter(filter)).length;
            }
        });

        return newData;
    }
}
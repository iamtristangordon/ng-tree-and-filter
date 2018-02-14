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

		// avoid mutating object, create a duplicate
		function duplicate(original) {
			return Object.assign({}, original);
		}

		const newData = data.map(duplicate).filter(function filter(comment: Comment) {
			if (comment.name.toLowerCase().includes(filterValue.toLowerCase())) {
				/* if we have an absolute name match,
                only show the match and its ancestors (remove children)
                 */
				if (comment.name.toLowerCase() === filterValue.toLowerCase()) delete comment.children;

				return true;
			}

			if (comment.children) {
				return (comment.children = comment.children.map(duplicate).filter(filter)).length;
			}
		});

		return newData;
	}
}

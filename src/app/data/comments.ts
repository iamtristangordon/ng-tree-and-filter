import { Comment } from "../models/comment.model";

export const comments: Comment[] = [{
    name: 'Parent',
    message: "ng5 for life...or at least until the next release.",
    children: [
        {
            name: 'Child 1',
            message: "eh, more of a vue guy myself...",
            children: [
                {
                    name: 'Child 3',
                    message: "Agreed.",
                    children: [
                        {
                            name: 'Child 5',
                            message: "Amen!"
                        }
                    ]
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
import { Comment } from "../models/comment.model";

function getRandomColor() {
    // generate pastel-ish color
    const cssHSL = "hsl(" + 360 * Math.random() + "," +
        (25 + 70 * Math.random()) + "%," +
        (85 + 10 * Math.random()) + "%)";

    return cssHSL;
}

export const comments: Comment[] = [{
    name: "Parent",
    message: "ng5 for life...or at least until the next release.",
    profilePhoto: getRandomColor(),
    children: [
        {
            name: "Child 1",
            message: "eh, more of a vue guy myself...",
            profilePhoto: getRandomColor(),
            children: [
                {
                    name: "Child 3",
                    message: "Agreed.",
                    profilePhoto: getRandomColor(),
                    children: [
                        {
                            name: "Child 5",
                            message: "Amen!",
                            profilePhoto: getRandomColor()
                        }
                    ]
                }, {
                    name: "Child 4",
                    message: "lol",
                    profilePhoto: getRandomColor()
                }
            ]
        },
        {
            name: "Child 2",
            message: "You're all wrong. May you turn away from your evil ways and let react guide you into the light...",
            profilePhoto: getRandomColor()
        }
    ]
}];

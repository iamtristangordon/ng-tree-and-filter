export interface Comment {
    name: string;
    children?: Comment[];
    comment: string;
}
import IComment from "./post.comment.interface";
import IUser from "./post.user.interface";


export default interface IPost {
    _id?: string,
    user: string | IUser,
    text: string,
    likes: string[] | IUser[],
    comments: string[] | IComment[],
    createdAt: string,
    updatedAt: string
}
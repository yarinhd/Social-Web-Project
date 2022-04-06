import IComment from "./comment.interface";
import IUser from "./comment.user.interface";



export default interface IPost {
    _id?: string,
    user: string | IUser,
    text: string,
    likes: string[] | IUser[],
    comments: string[] | IComment[],
    createdAt: string,
    updatedAt: string
}
import IPost from "./comment.post.interface";
import IUser from "./comment.user.interface";

export default interface IComment {
    _id?: string,   // PK
    postId?: string | IPost,  // FK
    user: string | IUser, //FK
    text: string,
    likes: string[] | IUser[], //FK
    parentId?: string | IComment, //FK
    createdAt: string,
    updatedAt: string
}   
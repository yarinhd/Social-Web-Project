import IComment from "./comment.interface";
import IPost from "./comment.post.interface";

export default interface ICommentFilter{
    postId?: string,
    parentId?: string
}
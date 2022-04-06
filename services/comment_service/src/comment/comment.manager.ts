import { CommentNotFoundError } from "../utils/errors/userErrorts";
import ICommentFilter from "./comment.filter.interface";
import IComment from "./comment.interface";
import CommentRepository from "./comment.repository";



export default class CommentManager {
    static async createComment(newComment: IComment): Promise<IComment> {
        const addedComment: IComment | null = await CommentRepository.createComment(newComment);
        if (!addedComment) {
            throw new CommentNotFoundError('Comment not found');
        }
        return addedComment;
    }


    static async getCommentById(commentId: string): Promise<IComment> {
        const serachresult: IComment | null = await CommentRepository.getCommentById(commentId);
        if (!serachresult) {
            throw new CommentNotFoundError('Comment not found');
        }
        return serachresult;
    }

    static async getCommentByFilter(filter: ICommentFilter){
        const commentFound: IComment[] | null = await CommentRepository.getCommentByFilter(filter)
        if(!commentFound) {
            throw new CommentNotFoundError('Comment not found');
        }
        return commentFound;
    }

    static async updateCommentById(commentId: string, commentData: Partial<IComment>): Promise<IComment> {
        const updatedComment: IComment | null = await CommentRepository.updateCommentById(commentId, commentData);
        if (!updatedComment) {
            throw new CommentNotFoundError('Comment not found');
        }
        return updatedComment;
    }


    static async deletedCommentById(commentId: string): Promise<IComment> {
        const deletedComment: IComment | null = await CommentRepository.deletedCommentById(commentId);
        if (!deletedComment) {
            throw new CommentNotFoundError('Comment not found');
        }
        return deletedComment;
    }
}
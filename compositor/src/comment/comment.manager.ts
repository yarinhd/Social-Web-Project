import { UserUnauthorized } from "../utils/errors/userError";
import Validation from "../utils/validations";
import ICommentFilter from "./comment.filter.interface";
import IComment from "./comment.interface";
import CommentService from "./comment.service";



export default class CommentManager {
    static async getCommentByFilter(filter: ICommentFilter) {
        // added to delete the undefined value that raise error at query
        filter = JSON.parse(JSON.stringify(filter));
        const subComments: IComment = await CommentService.getCommentByFilter(filter);
        return subComments
        

    }
    static async likeComment(reqUserId: string, commentId: string) {
        await Validation.isUserExist(reqUserId);        
        const commentPopulated = await this.getCommentById(commentId);
        let updatedLikes: string[] = [...(commentPopulated.likes as string[])]
        if ((commentPopulated.likes as string[]).includes(reqUserId)) {
            updatedLikes = updatedLikes.filter(userId => userId !== reqUserId)
            await CommentService.updateCommentById(commentId, {"likes": updatedLikes})
            return updatedLikes 
        }
        updatedLikes.push(reqUserId);
        await CommentService.updateCommentById(commentId, {"likes": updatedLikes})
        return updatedLikes;

    }


    static async deletedCommentById(reqUserId: string, commentId: string) {
        const commentUserId = (await this.getCommentById(commentId)).user;
        if (reqUserId !== commentUserId) {
            throw new UserUnauthorized('User not Authorized!');
        }
        const deletedComment = CommentService.deletedCommentById(commentId);
        return deletedComment
    }


    static async updateCommentById(reqUserId: string, commentId: string, commentData: Partial<IComment>) {
        const commentUserId = (await this.getCommentById(commentId)).user;
        if (reqUserId !== commentUserId) {
            throw new UserUnauthorized('User not Authorized!');
        }
        const updatedComment = CommentService.updateCommentById(commentId, commentData);
        return updatedComment
    }


    static createComment(newComment: IComment) {
        const addedComment = CommentService.createComment(newComment);
        return addedComment;

    }

    // Notice: i didnt treat error occasion - should i add error here if not exist?
    // or i relay on the comment service validation (checking if exist)?
    static getCommentById(commentId: string) {
        const serachresult: Promise<IComment> = CommentService.getCommentById(commentId);
        return serachresult
    }

}
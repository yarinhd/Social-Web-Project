import { Request, Response } from "express";
import ICommentFilter from "./comment.filter.interface";
import IComment from "./comment.interface";
import CommentManager from "./comment.manager";

export default class CommentCotroller {
    static async getCommentByFilter(req: Request, res: Response) {
        // ask Almog how i define the const type? 
        const { postId, parentId } = req.query as ICommentFilter;
        const filter: ICommentFilter = { postId, parentId };
        const subComments = await CommentManager.getCommentByFilter(filter)
        res.json(subComments);

    
    }
    static async likeComment(req: Request, res: Response) {
        const reqUserId = req.user._id as string;
        const commentId = req.params.commentId as string;
        // console.log(`controller --> V : ${reqUserId}, ${commentId}`,);
        const updatedCommentLikes = await CommentManager.likeComment(reqUserId, commentId)
        res.json(updatedCommentLikes);

    }
    static async deleteCommentById(req: Request, res: Response) {
        const reqUserId = req.user.id as string;
        const commentId = req.params.commentId as string;
        const deletedComment = await CommentManager.deletedCommentById(reqUserId, commentId);
        res.json(deletedComment);
    }



    static async updateCommentById(req: Request, res: Response) {
        const reqUserId = req.user.id as string;
        const commentId = req.params.commentId as string;
        const commentData = req.body as Partial<IComment>;
        const updatedComment = await CommentManager.updateCommentById(reqUserId, commentId, commentData);
        res.json(updatedComment);

    }
    static async createComment(req: Request, res: Response) {
        const newComment = req.body as IComment;
        newComment.user = req.user._id;
        const addedComment = await CommentManager.createComment(newComment)
        res.json(addedComment);
    }
    static async getCommentById(req: Request, res: Response) {
        const commentId = req.params.commentId as string;
        const searchResult = await CommentManager.getCommentById(commentId);
        res.json(searchResult);
    }

}
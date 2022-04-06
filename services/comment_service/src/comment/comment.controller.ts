import { Request, Response } from 'express';
import ICommentFilter from './comment.filter.interface';
import IComment from './comment.interface';
import CommentManager from './comment.manager';


export default class CommentController {
    // static likeComment(req: Request, res: Response){
    //     // TBW - like comment
    // }
    static async createComment(req: Request, res: Response) {
        const newComment = req.body as IComment;
        const addedComment: IComment = await CommentManager.createComment(newComment)
        res.status(200).json(addedComment);
    }


    static async getCommentById(req: Request, res: Response) {
        const commentId = req.params.commentId as string;
        const searchResult: IComment = await CommentManager.getCommentById(commentId);
        res.status(200).json(searchResult);
    }

    static async getCommentByFilter(req: Request, res: Response) {
        const { postId, parentId } = req.query as ICommentFilter;        
        if (((postId) && (parentId)) || ((!postId) && (!parentId)) ) {          
            throw new Error
            // add specific error
        }
        const filter: ICommentFilter = { postId, parentId }

        const subComments = await CommentManager.getCommentByFilter(filter)
        res.json(subComments);


    }


    static async updateCommentById(req: Request, res: Response) {
        const commentId = req.params.commentId as string;
        const commentData = req.body as Partial<IComment>;
        const updatedComment: IComment = await CommentManager.updateCommentById(commentId, commentData);
        res.status(200).json(updatedComment);
    }


    static async deleteCommentById(req: Request, res: Response) {
        const commentId = req.params.commentId as string;
        const deletedComment = await CommentManager.deletedCommentById(commentId);
        res.status(200).json(deletedComment);
        // TODO: i guess i want to delete whole comments of this user
        // ASK ALMOG
    }


}
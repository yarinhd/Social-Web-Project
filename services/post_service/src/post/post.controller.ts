import { Request, Response } from 'express';
import IPost from './post.interface';
import postManager from './post.manager';

export default class postController {
    static async createPost(req: Request, res: Response) {
        const newPost = req.body as IPost;
        const addedPost = await postManager.createPost(newPost)
        res.status(200).json(addedPost);
        }


    static async getPostById(req: Request, res: Response) {
        const postId = req.params.postId as String;
        const searchResult = await postManager.getPostById(postId);
        res.status(200).json(searchResult);
    }


    static async updatePostById(req:Request, res: Response) {
        const postId = req.params.postId;
        const postData = req.body as Partial<IPost>;
        const updatedPost = await postManager.updatePostById(postId, postData);
        res.status(200).json(updatedPost);
    }
    
    
    static async deletePostById(req: Request, res: Response) {
        const postId = req.params.postId;
        const deletedPost = await postManager.deletedPostById(postId);
        res.status(200).json(deletedPost);
        // TODO: i guess i want to delete whole comments of this user
        // ASK ALMOG
    }
}
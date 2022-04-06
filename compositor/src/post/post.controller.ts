import {Request, Response} from "express"
import IPost from "./post.interface";
import PostManager from "./post.manager";

export default class PostController{
    static async likePost(req: Request, res: Response){
        const postId = req.params.postId as string;
        const reqUserId = req.user._id as string;       
        const updatedCommentLikes = await PostManager.likeComment(reqUserId, postId)
        res.json(updatedCommentLikes);

        }
    static async deletePostById(req: Request, res: Response){
        const reqUserId = req.user.id as string;
        const postId = req.params.postId;
        const deletedPost = await PostManager.deletedPostById(reqUserId, postId);
        res.json(deletedPost);

    }
    static async updatePostById(req: Request, res: Response){
        const reqUserId = req.user.id as string;
        const postId = req.params.postId as string;
        const postData = req.body as Partial<IPost>;
        const updatedPost = await PostManager.updatePostById(reqUserId, postId, postData);
        res.json(updatedPost);
    }
    static async createPost(req: Request, res: Response){
        const newPost = (req.body as IPost);
        newPost.user = req.user._id;
        const addedPost = await PostManager.createPost(newPost)
        res.json(addedPost);
    }
    static async getPostById(req: Request, res: Response){
        const postId = req.params.postId as string;        
        const foundPost = await PostManager.getPostById(postId);
        res.json(foundPost);
    }
}



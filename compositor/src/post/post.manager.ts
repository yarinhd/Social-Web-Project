import { UserUnauthorized } from "../utils/errors/userError";
import Validation from "../utils/validations";
import IPost from "./post.interface";
import postInterface from "./post.interface";
import PostService from "./post.service";


export default class PostManger{
    static async likeComment(reqUserId: string, postId: string) {
        await Validation.isPostExist(postId);
        const postPopulated = await this.getPostById(postId);
        let updatedLikes: string[] = [...(postPopulated.likes as string[])]
        if ((postPopulated.likes as string[]).includes(reqUserId)){
            updatedLikes = updatedLikes.filter(userId => userId !== reqUserId);
            await PostService.updatePostById(postId, {"likes": updatedLikes});
            return updatedLikes;
        }
        updatedLikes.push(reqUserId);
        await PostService.updatePostById(postId, {"likes": updatedLikes});
        return updatedLikes;

    }
    static async deletedPostById(reqUserId:string, postId: string) {
        const postUserId = (await this.getPostById(postId)).user;
        if (reqUserId !== postUserId) {
            throw new UserUnauthorized('User not Authorized!');
        }
        const deletedPost: Promise<IPost> =  PostService.deletePostById(postId);
        return deletedPost;

    }
    static async updatePostById(reqUserId: string, postId: string, postData: Partial<IPost>) {
        const postUserId = (await this.getPostById(postId)).user;
        if (reqUserId !== postUserId) {
            throw new UserUnauthorized('User not Authorized!');
        }
        const updatedPost: Promise<IPost> =  PostService.updatePostById(postId, postData);
        return updatedPost
    }
    static  createPost(newPost: IPost) {
        const addedPost: Promise<IPost> =  PostService.createPost(newPost);
        return addedPost;
    }
    static getPostById(postId: string) {
        const foundPost: Promise<IPost> = PostService.getPostById(postId);
        return foundPost;
    }

}
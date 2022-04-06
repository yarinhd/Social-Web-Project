import { PostNotFoundError } from "../utils/errors/userError";
import IPost from "./post.interface";
import postRepository from "./post.repository";


export default class postManager {
    static async createPost(newPost: IPost) {
        const addedPost = await postRepository.createPost(newPost);
        if (!addedPost) {
            throw new PostNotFoundError('Post not found');
        }
        return addedPost;
    }


    static async getPostById(postId: String) {
        const serachresult = await postRepository.getPostById(postId);
        if (!serachresult) {
            throw new PostNotFoundError('Post not found');
        }
        return serachresult;
    }


    static async updatePostById(postId: string, postData: Partial<IPost>) {
        const updatedPost = await postRepository.updatePostById(postId, postData);
        if (!updatedPost){
            throw new PostNotFoundError('Post not found');
        }
        return updatedPost;
    }


    static async deletedPostById(postId: string) {
        const deletedPost = await postRepository.deletedPostById(postId);
        if (!deletedPost){
            throw new PostNotFoundError('Post not found');
        }
        return deletedPost;
    }
}
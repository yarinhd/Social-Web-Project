import IPost from "./post.interface";
import postModel from "./post.model";



export default class postRepository {
    static createPost(newPost: IPost): Promise<IPost | null> {
        const addedPost: Promise<IPost | null> = postModel.create(newPost);
        return addedPost;
    }


    static getPostById(postId: String): Promise<IPost | null> {
        const searchResult: Promise<IPost | null> = postModel.findById(postId).exec();
        return searchResult
    }


    static updatePostById(postId: string, postData: Partial<IPost>): Promise<IPost | null>  {
        const updatedPost: Promise<IPost | null> = postModel.findByIdAndUpdate(postId, postData, { new: true }).exec();
        return updatedPost;
    }


    static deletedPostById(postId: string): Promise<IPost | null> {
        const deletedPost: Promise<IPost | null> = postModel.findByIdAndDelete(postId).exec();
        return deletedPost;
    }
}
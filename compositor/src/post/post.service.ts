import { config } from "../config";
import { HttpClient } from "../utils/http.client";
import IPost from "./post.interface";
import postInterface from "./post.interface";


export default class PostService {
    static api: string = `${config.endpoints.post.hostname}:${config.endpoints.post.port}`;
    
    static deletePostById(postId: string) {
        return HttpClient.deleteById(`${this.api}/api/post`, postId);
    }

    
    static updatePostById(postId: string, postData: Partial<IPost>) {
        return HttpClient.putById(`${this.api}/api/post`,postId, postData);
    }
    
    static createPost(newPost: IPost) {
    return HttpClient.post(`${this.api}/api/post`, newPost)
    }

    static getPostById(postId: string) {
        return HttpClient.getById(`${this.api}/api/post`, postId);
    }


}


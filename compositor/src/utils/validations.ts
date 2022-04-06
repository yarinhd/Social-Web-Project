import { config } from "../config";
import { HttpClient } from "./http.client";

export default class Validation{
    static api: string = `${config.endpoints.comment.hostname}:${config.endpoints.comment.port}`;

    static isCommentExist(commentId: string) {
        return HttpClient.head(`${this.api}/api/user`, commentId)
    }

    static isUserExist(userId: string){
        return HttpClient.head(`${config.endpoints.user.hostname}:${config.endpoints.user.port}/api/user`, userId)
    }

    static isPostExist(postId: string){
        return HttpClient.head(`${config.endpoints.post.hostname}:${config.endpoints.post.port}/api/post`, postId)
    }
}
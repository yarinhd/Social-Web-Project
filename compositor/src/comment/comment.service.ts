import { config } from "../config";
import { HttpClient } from "../utils/http.client";
import ICommentFilter from "./comment.filter.interface";
import commentInterface from "./comment.interface";



export default class CommentService {
    static api: string = `${config.endpoints.comment.hostname}:${config.endpoints.comment.port}`;
    
    static deletedCommentById(commentId: string) {
        return HttpClient.deleteById(`${this.api}/api/comment`,commentId)
    }
    
    static updateCommentById(commentId: string, commentData: Partial<commentInterface>) {
        return HttpClient.putById(`${this.api}/api/comment`, commentId, commentData)
    }
    
    static createComment(newComment: commentInterface) {
        return HttpClient.post(`${this.api}/api/comment/create`, newComment)
        }
    
    static getCommentById(commentId: string) {
        return HttpClient.getById(`${this.api}/api/comment`, commentId)
    }
    
    static getCommentByFilter(filter: ICommentFilter) {
        return HttpClient.getByFilter(`${this.api}/api/comment`, filter)
    }


    
}

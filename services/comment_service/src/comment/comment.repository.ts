import ICommentFilter from "./comment.filter.interface";
import IComment from "./comment.interface";
import commentModel from "./comment.model";



export default class CommentRepository {
    static createComment(newComment: IComment): Promise<IComment | null> {
        const addedComment: Promise<IComment | null> = commentModel.create(newComment);
        return addedComment;
    }


    static getCommentById(commentId: String): Promise<IComment | null> {
        const searchResult: Promise<IComment | null> = commentModel.findById(commentId).exec();
        return searchResult
    }

// TODO: check all methods of the crud by ID in the service and compositor
// TODO: implement the filter interface and method. name the variable as the name of the key name 
// ASK ALMOG IF OK 
    static getCommentByFilter(filter: ICommentFilter): Promise<IComment[] | null> {
        const searchResult: Promise<IComment[] | null> = commentModel.find(filter).exec();
        return searchResult
    }

    static updateCommentById(commentId: string, commentData: Partial<IComment>): Promise<IComment | null> {
        const updatedComment: Promise<IComment | null> = commentModel.findByIdAndUpdate(commentId, commentData, { new: true }).exec();
        return updatedComment;
    }


    static deletedCommentById(commentId: string): Promise<IComment | null> {
        const deletedComment: Promise<IComment | null> = commentModel.findByIdAndDelete(commentId).exec();
        return deletedComment;
    }
}
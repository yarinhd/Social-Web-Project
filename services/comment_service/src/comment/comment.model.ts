import mongoose from "mongoose";
import IComment from "./comment.interface";


const CommentSchema = new mongoose.Schema({
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "User",
        default: []
    },
    parentId: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
    }
},
    {
        timestamps: true
    });

const commentModel = mongoose.model<IComment & mongoose.Document>('Comment', CommentSchema);
export default commentModel;
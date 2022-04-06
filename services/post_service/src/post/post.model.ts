import mongoose from "mongoose";
import IPost from "./post.interface";


const PostSchema = new mongoose.Schema({
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
    comments: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Comment",
        default: []
    },
    Date: {
        type: Date,
        default: new Date
    }
},
{
    timestamps: true
});

const postModel = mongoose.model<IPost & mongoose.Document>('Post', PostSchema);
export default postModel;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_manager_1 = __importDefault(require("./comment.manager"));
class commentCotroller {
    static async likeComment(req, res) {
        const reqUserId = req.user.id;
        const commentId = req.params.id;
        const updatedCommentLikes = await comment_manager_1.default.likeComment(reqUserId, commentId);
        res.json(updatedCommentLikes);
    }
    static async deleteComment(req, res) {
        const reqUserId = req.user.id;
        const commentId = req.params.id;
        const deletedComment = await comment_manager_1.default.deletedComment(reqUserId, commentId);
        res.json(deletedComment);
    }
    static async updateComment(req, res) {
        const reqUserId = req.user.id;
        const commentId = req.params.id;
        const commentData = req.body;
        const updatedComment = await comment_manager_1.default.updateComment(reqUserId, commentId, commentData);
        res.json(updatedComment);
    }
    static async createComment(req, res) {
        const newComment = req.body;
        newComment.user = req.user._id;
        const addedComment = await comment_manager_1.default.createComment(newComment);
        res.json(addedComment);
    }
    static async getComment(req, res) {
        const commentId = req.params.id;
        const searchResult = await comment_manager_1.default.getComment(commentId);
        res.json(searchResult);
    }
}
exports.default = commentCotroller;

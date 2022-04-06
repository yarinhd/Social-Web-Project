"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userError_1 = require("../utils/errors/userError");
const comment_service_1 = __importDefault(require("./comment.service"));
class commentManager {
    static async likeComment(reqUserId, commentId) {
        await comment_service_1.default.isUserExist(reqUserId);
        const commentPopulated = await this.getComment(commentId);
        let updatedLikes = [...commentPopulated.likes];
        if (commentPopulated.likes.includes(reqUserId)) {
            updatedLikes = updatedLikes.filter(userId => userId !== reqUserId);
            await comment_service_1.default.updateComment(commentId, { "likes": updatedLikes });
            return updatedLikes;
        }
        updatedLikes.push(reqUserId);
        await comment_service_1.default.updateComment(commentId, { "likes": updatedLikes });
        return updatedLikes;
    }
    static async deletedComment(reqUserId, commentId) {
        const commentUserId = (await this.getComment(commentId)).user;
        if (reqUserId !== commentUserId) {
            throw new userError_1.UserUnauthorized('User not Authorized!');
        }
        const deletedComment = comment_service_1.default.deletedComment(commentId);
        return deletedComment;
    }
    static async updateComment(reqUserId, commentId, commentData) {
        const commentUserId = (await this.getComment(commentId)).user;
        if (reqUserId !== commentUserId) {
            throw new userError_1.UserUnauthorized('User not Authorized!');
        }
        const updatedComment = comment_service_1.default.updateComment(commentId, commentData);
        return updatedComment;
    }
    static createComment(newComment) {
        const addedComment = comment_service_1.default.createComment(newComment);
        return addedComment;
    }
    // Notice: i didnt treat error occasion - should i add error here if not exist?
    // or i relay on the comment service validation (checking if exist)?
    static getComment(commentId) {
        const serachresult = comment_service_1.default.getComment(commentId);
        return serachresult;
    }
}
exports.default = commentManager;

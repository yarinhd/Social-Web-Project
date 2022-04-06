"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userError_1 = require("../utils/errors/userError");
const post_service_1 = __importDefault(require("./post.service"));
class postManger {
    static async deletedPost(reqUserId, postId) {
        const postUserId = (await this.getPost(postId)).user;
        if (reqUserId !== postUserId) {
            throw new userError_1.UserUnauthorized('User not Authorized!');
        }
        const deletedPost = post_service_1.default.deletePost(postId);
        return deletedPost;
    }
    static async updatePost(reqUserId, postId, postData) {
        const postUserId = (await this.getPost(postId)).user;
        if (reqUserId !== postUserId) {
            throw new userError_1.UserUnauthorized('User not Authorized!');
        }
        const updatedPost = post_service_1.default.updatePost(postId, postData);
        return updatedPost;
    }
    static createPost(newPost) {
        const addedPost = post_service_1.default.createPost(newPost);
        return addedPost;
    }
    static getPost(postId) {
        const foundPost = post_service_1.default.getPost(postId);
        return foundPost;
    }
}
exports.default = postManger;

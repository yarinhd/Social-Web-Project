"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const post_manager_1 = __importDefault(require("./post.manager"));
class postController {
    static async deletePost(req, res) {
        const reqUserId = req.user.id;
        const postId = req.params.id;
        const deletedPost = await post_manager_1.default.deletedPost(reqUserId, postId);
        res.json(deletedPost);
    }
    static async updatePost(req, res) {
        const reqUserId = req.user.id;
        const postId = req.params.id;
        const postData = req.body;
        const updatedPost = await post_manager_1.default.updatePost(reqUserId, postId, postData);
        res.json(updatedPost);
    }
    static async createPost(req, res) {
        const newPost = req.body;
        newPost.user = req.user._id;
        const addedPost = await post_manager_1.default.createPost(newPost);
        res.json(addedPost);
    }
    static async getPost(req, res) {
        const postId = req.params.id;
        const foundPost = await post_manager_1.default.getPost(postId);
        res.json(foundPost);
    }
}
exports.default = postController;

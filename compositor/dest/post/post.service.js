"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const http_client_1 = require("../utils/http.client");
class postService {
    static deletePost(postId) {
        return http_client_1.HttpClient.deleteById(`${this.api}/api/post`, postId);
    }
    static updatePost(postId, postData) {
        return http_client_1.HttpClient.putById(`${this.api}/api/post`, postId, postData);
    }
    static createPost(newPost) {
        return http_client_1.HttpClient.post(`${this.api}/api/post`, newPost);
    }
    static getPost(postId) {
        return http_client_1.HttpClient.getById(`${this.api}/api/post`, postId);
    }
}
exports.default = postService;
postService.api = `${config_1.config.endpoints.post.hostname}:${config_1.config.endpoints.post.port}`;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const http_client_1 = require("../utils/http.client");
class commentService {
    static deletedComment(commentId) {
        return http_client_1.HttpClient.deleteById(`${this.api}/api/comment`, commentId);
    }
    static updateComment(commentId, commentData) {
        return http_client_1.HttpClient.putById(`${this.api}/api/comment`, commentId, commentData);
    }
    static createComment(newComment) {
        return http_client_1.HttpClient.post(`${this.api}/api/comment/create`, newComment);
    }
    static getComment(commentId) {
        return http_client_1.HttpClient.getById(`${this.api}/api/comment`, commentId);
    }
    static isUserExist(userId) {
        return http_client_1.HttpClient.head(`${config_1.config.endpoints.user.hostname}:${config_1.config.endpoints.user.port}/api/user`, userId);
    }
}
exports.default = commentService;
commentService.api = `${config_1.config.endpoints.comment.hostname}:${config_1.config.endpoints.comment.port}`;

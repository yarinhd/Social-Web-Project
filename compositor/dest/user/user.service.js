"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const http_client_1 = require("../utils/http.client");
class userService {
    static deleteUser(userId) {
        return http_client_1.HttpClient.deleteById(`${this.api}/api/user`, userId);
    }
    static updateUser(userId, userData) {
        return http_client_1.HttpClient.putById(`${this.api}/api/user`, userId, userData);
    }
    static getUser(userId) {
        return http_client_1.HttpClient.getById(`${this.api}/api/user`, userId);
    }
    static createUser(newUser) {
        return http_client_1.HttpClient.post(`${this.api}/api/user/`, newUser);
    }
}
exports.default = userService;
userService.api = `${config_1.config.endpoints.user.hostname}:${config_1.config.endpoints.user.port}`;

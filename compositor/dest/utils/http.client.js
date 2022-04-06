"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
const querystring_1 = require("querystring");
// Note: i deleted the headers of authentication 
class HttpClient {
    static async get(url, query, authToken) {
        return (await axios_1.default.get(`${url}?${(0, querystring_1.stringify)(query)}`)).data;
    }
    static async getById(url, id, authToken) {
        return (await axios_1.default.get(`${url}/${id}`)).data;
    }
    static async post(url, body, authToken) {
        return (await axios_1.default.post(`${url}/`, body)).data;
    }
    static async delete(url) {
        return (await axios_1.default.delete(url)).data;
    }
    static async deleteById(url, id, authToken) {
        return (await axios_1.default.delete(`${url}/${id}`)).data;
    }
    static async put(url, body, authToken) {
        return (await axios_1.default.put(url, body)).data;
    }
    static async putById(url, id, body, authToken) {
        return (await axios_1.default.put(`${url}/${id}`, body)).data;
    }
    static async head(url, id, authToken) {
        return (await axios_1.default.head(`${url}/${id}`)).data;
    }
}
exports.HttpClient = HttpClient;

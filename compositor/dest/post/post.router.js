"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const userAuth_1 = require("../utils/userAuth");
const wrapper_1 = __importDefault(require("../wrapper"));
const post_controller_1 = __importDefault(require("./post.controller"));
exports.postRouter = (0, express_1.Router)();
//Can be used for:
//  - get Post details
exports.postRouter.get('/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(post_controller_1.default.getPost));
//Can be used for:
//  - create new Post 
exports.postRouter.post('/', userAuth_1.userAuth, wrapper_1.default.wrapAsync(post_controller_1.default.createPost));
// //Can be used for:
//  - update Post properties
exports.postRouter.put('/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(post_controller_1.default.updatePost));
// //Can be used for:
//  - delete Post
exports.postRouter.delete('/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(post_controller_1.default.deletePost));

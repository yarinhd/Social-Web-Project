"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentRouter = void 0;
const express_1 = require("express");
const userAuth_1 = require("../utils/userAuth");
const wrapper_1 = __importDefault(require("../wrapper"));
const comment_controller_1 = __importDefault(require("./comment.controller"));
const comment_controller_2 = __importDefault(require("./comment.controller"));
exports.commentRouter = (0, express_1.Router)();
// userAuth - checking if the user is connected to the system.
// after that for each action at the api - there is internal check for matching userId
// between the post and the userId which sent the request
//Get Comment
exports.commentRouter.get('/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(comment_controller_2.default.getComment));
//Create Comment 
exports.commentRouter.post('/create', userAuth_1.userAuth, wrapper_1.default.wrapAsync(comment_controller_2.default.createComment));
//Update Comment
exports.commentRouter.put('/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(comment_controller_2.default.updateComment));
//Delete Comment
exports.commentRouter.delete('/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(comment_controller_2.default.deleteComment));
//Like Comment
exports.commentRouter.patch('/like/:id', userAuth_1.userAuth, wrapper_1.default.wrapAsync(comment_controller_1.default.likeComment));

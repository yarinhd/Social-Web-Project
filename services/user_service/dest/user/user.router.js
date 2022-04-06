"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const wrapper_1 = __importDefault(require("../wrapper"));
const user_controller_1 = __importDefault(require("./user.controller"));
exports.userRouter = (0, express_1.Router)();
// get user 
exports.userRouter.get('/:id', wrapper_1.default.wrapAsync(user_controller_1.default.getUser));
// create user
exports.userRouter.post('/', wrapper_1.default.wrapAsync(user_controller_1.default.createUser));
// update user
exports.userRouter.put('/:id', wrapper_1.default.wrapAsync(user_controller_1.default.updateUser));
// delete user
exports.userRouter.delete('/:id', wrapper_1.default.wrapAsync(user_controller_1.default.deleteUser));

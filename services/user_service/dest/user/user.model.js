"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    gender: String,
});
UserSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});
const userModel = mongoose_1.default.model('User', UserSchema);
exports.default = userModel;

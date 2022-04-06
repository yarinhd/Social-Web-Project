"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("./user.model"));
class userRepository {
    static createUser(newUser) {
        const addedUser = user_model_1.default.create(newUser);
        return addedUser;
    }
    static getUser(userId) {
        const searchResult = user_model_1.default.findById(userId).exec();
        return searchResult;
    }
    static updateUser(userId, userData) {
        const updatedUser = user_model_1.default.findByIdAndUpdate(userId, userData, { new: true }).exec();
        return updatedUser;
    }
    static deletedUser(userId) {
        const deletedUser = user_model_1.default.findByIdAndDelete(userId).exec();
        return deletedUser;
    }
}
exports.default = userRepository;

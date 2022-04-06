"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userError_1 = require("../utils/errors/userError");
const user_repository_1 = __importDefault(require("./user.repository"));
class userManager {
    static async createUser(newUser) {
        const addedUser = await user_repository_1.default.createUser(newUser);
        if (!addedUser) {
            throw new userError_1.UserNotFoundError('User not found');
        }
        return addedUser;
    }
    static async getUser(userId) {
        const serachresult = await user_repository_1.default.getUser(userId);
        if (!serachresult) {
            throw new userError_1.UserNotFoundError('User not found');
        }
        return serachresult;
    }
    static async updateUser(userId, userData) {
        const updatedUser = await user_repository_1.default.updateUser(userId, userData);
        if (!updatedUser) {
            throw new userError_1.UserNotFoundError('User not found');
        }
        return updatedUser;
    }
    static async deletedUser(userId) {
        const deletedUser = await user_repository_1.default.deletedUser(userId);
        if (!deletedUser) {
            throw new userError_1.UserNotFoundError('User not found');
        }
        return deletedUser;
    }
}
exports.default = userManager;

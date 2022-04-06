"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("./user.service"));
class userManager {
    static deletedUser(userId) {
        const deletedUser = user_service_1.default.deleteUser(userId);
        return deletedUser;
    }
    static updateUser(userId, userData) {
        const updatedUser = user_service_1.default.updateUser(userId, userData);
        return updatedUser;
    }
    static getUser(userId) {
        const foundUser = user_service_1.default.getUser(userId);
        return foundUser;
    }
    static createUser(userData) {
        const addedUser = user_service_1.default.createUser(userData);
        return addedUser;
    }
}
exports.default = userManager;

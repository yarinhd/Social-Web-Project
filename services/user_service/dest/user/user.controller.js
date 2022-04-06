"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_manager_1 = __importDefault(require("./user.manager"));
class userController {
    static async createUser(req, res) {
        const newUser = req.body;
        const addedUser = await user_manager_1.default.createUser(newUser);
        res.status(200).json(newUser);
    }
    static async getUser(req, res) {
        const userId = req.params.userId;
        const searchResult = await user_manager_1.default.getUser(userId);
        res.status(200).json(searchResult);
    }
    static async updateUser(req, res) {
        const userId = req.params.userId;
        const userData = req.body;
        const updatedUser = await user_manager_1.default.updateUser(userId, userData);
        res.status(200).json(updatedUser);
    }
    static async deleteUser(req, res) {
        const userId = req.params.userId;
        const deletedUser = await user_manager_1.default.deletedUser(userId);
        res.status(200).json(deletedUser);
        // TODO: i guess i want to delete whole comments of this user
        // ASK ALMOG
    }
}
exports.default = userController;

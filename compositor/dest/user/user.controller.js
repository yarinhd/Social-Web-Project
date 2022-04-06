"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_manager_1 = __importDefault(require("./user.manager"));
class userController {
    static async getUser(req, res) {
        const userId = req.params.id;
        console.log(userId);
        const foundUser = await user_manager_1.default.getUser(userId);
        res.json(foundUser);
    }
    static async createUser(req, res) {
        const userData = req.body;
        const addedUser = await user_manager_1.default.createUser(userData);
        res.json(addedUser);
    }
    static async updateUser(req, res) {
        const userId = req.params.id;
        const userData = req.body;
        const updatedUser = await user_manager_1.default.updateUser(userId, userData);
        res.json(updatedUser);
    }
    static async deleteUser(req, res) {
        const userId = req.params.id;
        const deletedUser = await user_manager_1.default.deletedUser(userId);
        res.json(deletedUser);
    }
}
exports.default = userController;

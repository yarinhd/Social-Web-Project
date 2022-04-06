import { Request, Response } from 'express';
import IUser from './user.interface';
import userManager from './user.manager';

export default class userController {
    static async createUser(req: Request, res: Response) {
        const newUser = req.body as IUser;
        const addedUser = await userManager.createUser(newUser)
        res.status(200).json(addedUser);
    }
    

    static async getUserById(req: Request, res: Response) {
        const userId = req.params.userId as String;        
        const searchResult = await userManager.getUserById(userId);
        res.status(200).json(searchResult);
    }


    static async updateUserById(req:Request, res: Response) {
        const userId = req.params.userId as string;
        const userData = req.body as Partial<IUser>;
        const updatedUser = await userManager.updateUserById(userId, userData);
        res.status(200).json(updatedUser);
    }


    static async deleteUserById(req: Request, res: Response) {
        const userId = req.params.userId as string;
        const deletedUser = await userManager.deletedUserById(userId);
        res.status(200).json(deletedUser);
        // TODO: i guess i want to delete whole comments of this user
        // ASK ALMOG
    }


}
import userService from "./user.service";
import {Request, Response} from "express"
import IUser from "./user.interface";
import userManager from "./user.manager";

export default class userController{
    static async getUserById(req: Request, res: Response){
        const userId = req.params.userId as string
        console.log(userId);
        
        const foundUser: IUser = await userManager.getUserById(userId)
        res.json(foundUser);
        
    }
    
    
    static async createUser(req: Request, res: Response){
        const userData = req.body as IUser
        const addedUser: IUser= await userManager.createUserById(userData)
        res.json(addedUser);
    }
    
    
    static async updateUserById(req: Request, res: Response) {
        const userId = req.params.userId as string;
        const userData = req.body as Partial<IUser>;
        const updatedUser: IUser = await userManager.updateUserById(userId, userData);
        res.json(updatedUser);
    }    
    
    
    static async deleteUserById(req: Request, res: Response){
        const userId = req.params.userId as string;
        const deletedUser: IUser= await userManager.deletedUserById(userId);
        res.json(deletedUser);
    }
}
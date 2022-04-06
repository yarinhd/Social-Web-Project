import IUser from "./user.interface";
import userInterface from "./user.interface";
import userService from "./user.service";



export default class userManager {
    static deletedUserById(userId: string) {
        const deletedUser: Promise<IUser> = userService.deleteUserById(userId)
        return deletedUser;
    }


    static updateUserById(userId: string, userData: Partial<IUser>) {
        const updatedUser: Promise<IUser> = userService.updateUserById(userId, userData);
        return updatedUser;
    }


    static getUserById(userId: string) {
        const foundUser: Promise<IUser> = userService.getUserById(userId);
        return foundUser;
    }


    static createUserById(userData: IUser) {
        const addedUser: Promise<IUser> = userService.createUser(userData);
        return addedUser;
    }
}
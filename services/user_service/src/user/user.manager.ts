import { UserNotFoundError } from "../utils/errors/userError";
import IUser from "./user.interface";
import userRepository from "./user.repository";


export default class userManager {
    static async createUser(newUser: IUser) {
        const addedUser = await userRepository.createUser(newUser);
        if (!addedUser) {
            throw new UserNotFoundError('User not found');
        }
        return addedUser;
    }


    static async getUserById(userId: String) {
        const serachresult = await userRepository.getUserById(userId);
        if (!serachresult) {
            console.log('wrong userrrr');
            
            throw new UserNotFoundError('User not found');
        }
        return serachresult;
    }


    static async updateUserById(userId: string, userData: Partial<IUser>) {      
        const updatedUser = await userRepository.updateUserById(userId, userData);
        if (!updatedUser){
            throw new UserNotFoundError('User not found');
        }
        return updatedUser;
    }
    

    static async deletedUserById(userId: string) {
        const deletedUser = await userRepository.deletedUserById(userId);
        if (!deletedUser){
            throw new UserNotFoundError('User not found');
        }
        return deletedUser;
    }
}
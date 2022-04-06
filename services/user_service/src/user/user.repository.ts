import IUser from "./user.interface";
import userModel from "./user.model";



export default class userRepository {
    static createUser(newUser: IUser): Promise<IUser | null> {
        const addedUser: Promise<IUser | null> = userModel.create(newUser);
        return addedUser;
    }


    static getUserById(userId: String): Promise<IUser | null> {
        const searchResult: Promise<IUser | null> = userModel.findById(userId).exec();
        return searchResult
    }
    
    
    static updateUserById(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
        const updatedUser: Promise<IUser | null> = userModel.findByIdAndUpdate(userId, userData, { new: true }).exec();
        return updatedUser;
    }


    static deletedUserById(userId: string): Promise<IUser | null> {
        const deletedUser: Promise<IUser | null> = userModel.findByIdAndDelete(userId).exec();
        return deletedUser;
    }
}
import { config } from "../config";
import { HttpClient } from "../utils/http.client";
import { stringify } from 'querystring';
import IUser from "./user.interface";


export default class userService {
    static api: string = `${config.endpoints.user.hostname}:${config.endpoints.user.port}`

    static deleteUserById(userId: string) {
        return HttpClient.deleteById(`${this.api}/api/user`, userId)
    }

    static updateUserById(userId: string, userData: Partial<IUser>) {
        return HttpClient.putById(`${this.api}/api/user`, userId, userData)
    }
    
    static getUserById(userId: string){        
        return HttpClient.getById(`${this.api}/api/user`, userId);
    }

    static createUser(newUser: IUser): Promise<IUser>{        
        return HttpClient.post(`${this.api}/api/user/`, newUser);
    }



    
}
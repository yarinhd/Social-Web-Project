import { Router } from "express";
import Wrapper from "../wrapper";
import userController from "./user.controller";
import { Request, Response, NextFunction } from "express";
export const userRouter: Router = Router();




//Can be used for:
//  - get user details
userRouter.get('/:userId', Wrapper.wrapAsync(userController.getUserById));

//Can be used for:
//  - create new user 
userRouter.post('/', Wrapper.wrapAsync(userController.createUser));

//Can be used for:
//  - update user properties
userRouter.put('/:userId', Wrapper.wrapAsync(userController.updateUserById));

//Can be used for:
//  - delete user
userRouter.delete('/:userId', Wrapper.wrapAsync(userController.deleteUserById)); 


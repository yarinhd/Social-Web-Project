import { Router } from 'express';
import Wrapper from '../wrapper';
import userController from './user.controller';
export const userRouter = Router();

// get user 
userRouter.get('/:userId', Wrapper.wrapAsync(userController.getUserById));

// create user
userRouter.post('/', Wrapper.wrapAsync(userController.createUser));


// update user
userRouter.put('/:userId', Wrapper.wrapAsync(userController.updateUserById));


// delete user
userRouter.delete('/:userId', Wrapper.wrapAsync(userController.deleteUserById));

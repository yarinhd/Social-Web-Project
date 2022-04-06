import { Router } from "express";
import { userRouter } from "./user/user.router";

export const appRouter: Router = Router();

appRouter.use('/api/user', userRouter);

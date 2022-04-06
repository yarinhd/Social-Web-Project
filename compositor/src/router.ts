import { Router } from "express";
import { commentRouter } from "./comment/comment.router";
import { config } from "./config";
import { postRouter } from "./post/post.router";
import { userRouter } from "./user/user.router";

export const appRouter: Router = Router();


appRouter.use(config.endpoints.user.api, userRouter);
appRouter.use(config.endpoints.post.api, postRouter);
appRouter.use(config.endpoints.comment.api, commentRouter);
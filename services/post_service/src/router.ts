import { Router } from "express";
import { postRouter } from "./post/post.router";


export const appRouter = Router();

appRouter.use('/api/post', postRouter)
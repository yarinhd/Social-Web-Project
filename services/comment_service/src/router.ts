import { commentRouter } from './comment/comment.router';
import {Router} from 'express';

export const appRouter = Router();
appRouter.use(`/api/comment`, commentRouter);
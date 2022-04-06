import { Router } from 'express';
import Wrapper from '../wrapper';
import CommentController from './comment.controller';
export const commentRouter = Router();

// get comment filter
commentRouter.get('/', Wrapper.wrapAsync(CommentController.getCommentByFilter));

// get Comment 
commentRouter.get('/:commentId', Wrapper.wrapAsync(CommentController.getCommentById));

// create Comment
commentRouter.post('/create', Wrapper.wrapAsync(CommentController.createComment));

// update Comment
commentRouter.put('/:commentId', Wrapper.wrapAsync(CommentController.updateCommentById));

// delete Comment
commentRouter.delete('/:commentId', Wrapper.wrapAsync(CommentController.deleteCommentById));





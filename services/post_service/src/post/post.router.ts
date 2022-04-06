import { Router } from 'express';
import Wrapper from '../wrapper';
import postController from './post.controller';
export const postRouter = Router();

// get Post 
postRouter.get('/:postId', Wrapper.wrapAsync(postController.getPostById));

// create Post
postRouter.post('/', Wrapper.wrapAsync(postController.createPost));


// update Post
postRouter.put('/:postId', Wrapper.wrapAsync(postController.updatePostById));


// delete Post
postRouter.delete('/:postId', Wrapper.wrapAsync(postController.deletePostById));

import { Router } from "express";
import { userAuth } from "../utils/userAuth";
import Wrapper from "../wrapper";
import PostController from "./post.controller";
export const postRouter: Router = Router();




//Can be used for:
//  - get Post details
postRouter.get('/:postId',userAuth, Wrapper.wrapAsync(PostController.getPostById));

//Can be used for:
//  - create new Post 
postRouter.post('/', userAuth, Wrapper.wrapAsync(PostController.createPost));

// //Can be used for:
//  - update Post properties
postRouter.put('/:postId', userAuth, Wrapper.wrapAsync(PostController.updatePostById));

// //Can be used for:
//  - delete Post
postRouter.delete('/:postId', userAuth, Wrapper.wrapAsync(PostController.deletePostById));

//Like post
postRouter.patch('/like/:postId',userAuth , Wrapper.wrapAsync(PostController.likePost));
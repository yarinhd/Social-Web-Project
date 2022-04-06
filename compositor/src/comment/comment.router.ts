import { Router } from "express";
import { userAuth } from "../utils/userAuth";
import Wrapper from "../wrapper";
import CommentCotroller from "./comment.controller";
import commentController from "./comment.controller";

export const commentRouter: Router = Router();

// userAuth - checking if the user is connected to the system.
// after that for each action at the api - there is internal check for matching userId
// between the post and the userId which sent the request

// Get subcomments of post or comment
// TODO:  versatility for root comment of post and comment children of comment
commentRouter.get(`/`, userAuth , Wrapper.wrapAsync(commentController.getCommentByFilter))

//Get Comment
commentRouter.get('/:commentId',userAuth , Wrapper.wrapAsync(commentController.getCommentById));

//Create Comment on post/comment (dependes on commentParent field) 
commentRouter.post('/create',userAuth , Wrapper.wrapAsync(commentController.createComment));

//Update Comment
commentRouter.put('/:commentId',userAuth , Wrapper.wrapAsync(commentController.updateCommentById));

//Delete Comment
commentRouter.delete('/:commentId',userAuth , Wrapper.wrapAsync(commentController.deleteCommentById)); 

//Like Comment
commentRouter.patch('/like/:commentId',userAuth , Wrapper.wrapAsync(CommentCotroller.likeComment));

// Next Task:
// add like to post!
// add photo upload!
// add authentication







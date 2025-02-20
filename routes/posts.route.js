import express from 'express'
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/posts.controller.js';

const router = express.Router();

// get all post
// since we are defining router in middleware in server.js if we also define here it will become redundant
router.get("/", getPosts)

// get single post 
router.get("/:id", getPost)

// creating a post request to posts
router.post("/", createPost)

// updating post 
router.put("/:id", updatePost)

// deleting post 
router.delete("/:id", deletePost)


export default router
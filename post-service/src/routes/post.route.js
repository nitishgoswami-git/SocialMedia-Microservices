import express from "express";
import {
  createPost,
  getAllPosts,
  getPost,
  deletePost,
} from "../controllers/post.controller.js";
import { authenticateRequest } from "../middlewares/auth.middleware.js";

const router = express();

//middleware -> this will tell if the user is an auth user or not
router.use(authenticateRequest);

router.post("/create-post", createPost);
router.get("/all-posts", getAllPosts);
router.get("/:id", getPost);
router.delete("/:id", deletePost);

export default router;
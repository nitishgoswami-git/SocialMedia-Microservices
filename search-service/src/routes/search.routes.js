import express from "express" 
import { searchPostController } from "../controllers/search.controller.js";
import { authenticateRequest } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authenticateRequest);

router.get("/posts", searchPostController);

export default router;
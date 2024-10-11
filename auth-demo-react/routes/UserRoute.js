import { UserController } from "../controllers/UserController.js";
import express from "express";

const router = express.Router()

router.post('/api/register',UserController.register)
router.post('/api/login',UserController.login)

export default router
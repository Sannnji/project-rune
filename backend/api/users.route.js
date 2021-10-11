import express from "express";

import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/signup").post(UsersController.apiCreateUser);
router.route("/login").post(UsersController.apiLoginUser)

export default router;

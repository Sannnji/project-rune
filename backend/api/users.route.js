import express from "express";

import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/signup").post(UsersController.apiCreateUser);

export default router;

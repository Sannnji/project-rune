import express from "express";

import { verifyUser } from "../authenticate.js";
import UsersController from "./users.controller.js";

const router = express.Router();

router.route("/signup").post(UsersController.apiCreateUser);
router.route("/login").post(UsersController.apiLoginUser);
router
  .route("/:user/inventory")
  .get(verifyUser, UsersController.apiGetUserInventory);
router
  .route("/:user/inventory/save")
  .put(verifyUser, UsersController.apiSaveUserInventory);

export default router;

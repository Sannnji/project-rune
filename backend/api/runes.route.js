import express from "express";

import RunesController from "./runes.controller.js";

const router = express.Router();

router.route("/").get(RunesController.apiGetRunes);

export default router;

import express from "express";

import RunewordsController from "./runewords.controller.js";

const router = express.Router();

router.route("/").get(RunewordsController.apiGetRunewords);

export default router;

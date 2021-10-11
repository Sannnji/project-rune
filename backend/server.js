import express from "express";
import cors from "cors";

import users from "./api/users.route.js";
import runes from "./api/runes.route.js";
import runewords from "./api/runewords.route.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", users);
app.use("/runes", runes);
app.use("/runewords", runewords);

export default app;

import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

import UsersDAO from "./dao/usersDAO.js";
import RunesDAO from "./dao/runesDAO.js";
import RunewordsDAO from "./dao/runewordsDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.DB_URI, {
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await UsersDAO.injectDB(client);
    await RunesDAO.injectDB(client);
    await RunewordsDAO.injectDB(client);

    app.listen(process.env.PORT || 9000, () => {
      console.log(`server is running`);
    });
  });

import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

import UsersDAO from "./dao/usersDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

MongoClient.connect(process.env.RUNE_DB_URI, {
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    // right after we connect to our database and right before to start the server at line 22
    app.listen(process.env.PORT || 9000, () => {
      console.log(`server is running`);
    });
    await UsersDAO.injectDB(client);
  });

// need to add network access for mongoatlas db

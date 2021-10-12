import UsersDAO from "../dao/usersDAO.js";

export default class UsersController {
  static async apiCreateUser(req, res, next) {
    try {
      const username = req.body.username;
      const password = req.body.password;

      const response = await UsersDAO.createUser(username, password);
      res.json({ status: "success" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async apiLoginUser(req, res, next) {
    try {
      const username = req.body.username;
      const password = req.body.password;
      const response = await UsersDAO.loginUser(username, password);

      res.json(response);
    } catch (err) {
      console.log(`api, ${err}`);
      res.status(500).json({ error: err });
    }
  }

  static async apiGetUserInventory(req, res, next) {
    try {
      const response = await UsersDAO.getUserInv(req.params.user);

      res.json(response);
    } catch (err) {
      console.log(err);
    }
  }
}

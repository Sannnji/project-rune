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
}

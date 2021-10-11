import RunewordsDAO from "../dao/runewordsDAO.js";

export default class RunewordsController {
  static async apiGetRunewords(req, res, next) {
    try {
      const response = await RunewordsDAO.getRunewords();
      res.json(response);
    } catch (err) {
      console.log(`api, ${err}`);
      res.status(500).json({ error: err });
    }
  }
}

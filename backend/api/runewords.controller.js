import RunewordsDAO from "../dao/runewordsDAO.js";

export default class RunewordsController {
  static async apiGetRunewords(req, res, next) {
    try {
      const response = await RunewordsDAO.getRunewords();
      const runes = {
        chest_armor: response[0].chest_armor,
        head_armor: response[1].head_armor,
        shield: response[2].shield,
        weapon: response[3].weapon,
      };

      res.json(runes);
    } catch (err) {
      console.log(`api, ${err}`);
      res.status(500).json({ error: err });
    }
  }
}

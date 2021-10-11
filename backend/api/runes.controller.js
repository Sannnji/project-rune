import RunesDAO from "../dao/runesDAO.js";

export default class RunesController {
  static async apiGetRunes(req, res, next) {
    try {
      const response = await RunesDAO.getRunes();

      const runes = {
        low_rune: response[0].low_rune,
        low_mid_rune: response[1].low_mid_rune,
        mid_rune: response[2].mid_rune,
        high_rune: response[3].high_rune,
      };

      res.json(runes);
    } catch (err) {
      console.log(`api, ${err}`);
      res.status(500).json({ error: err });
    }
  }
}

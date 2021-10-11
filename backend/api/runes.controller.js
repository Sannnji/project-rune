import RunesDAO from "../dao/runesDAO.js";

export default class RunesController {
  static async apiGetRunes(req, res, next) {
    try {
      const response = await RunesDAO.getRunes();
      res.json(response);
    } catch (err) {
      console.log(`api, ${err}`);
      res.status(500).json({ error: err });
    }
  }
}

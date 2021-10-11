let runes;

export default class RunesDAO {
  static async injectDB(conn) {
    if (runes) {
      return;
    }
    try {
      runes = await conn.db(process.env.DB_NS).collection("runes");
    } catch (err) {
      `Unable to establish a connection handle in runesDAO ${err}`;
    }
  }

  static async getRunes() {
    try {
      return await runes.find().toArray();
    } catch (err) {
      console.error(`Unable to find runes: ${err}`);
      return { error: err };
    }
  }
}

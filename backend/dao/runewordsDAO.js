let runewords;

export default class RunewordsDAO {
  static async injectDB(conn) {
    if (runewords) {
      retern;
    }
    try {
      runewords = await conn.db(process.env.DB_NS).collection("runewords");
    } catch (err) {
      `Unable to establish a connection handle in runewordsDAO ${err}`;
    }
  }

  static async getRunewords() {
    try {
      return await runewords.find().toArray();
    } catch (err) {
      console.error(`unable to find runewords err:${err}`);
      return { error: err };
    }
  }
}

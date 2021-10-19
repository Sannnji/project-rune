import jwt from "jsonwebtoken";
let users;

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.DB_NS).collection("users");
    } catch (err) {
      `Unable to establish a connection handle in usersDAO ${err}`;
    }
  }

  static async createUser(username, password) {
    try {
      const user = await users.findOne({ username: username });
      if (user) {
        throw "Username already taken";
      } else {
        const newUser = {
          username: username,
          password: password,
          inventory: {
            runes: {
              El: { quantity: 0 },
              Eld: { quantity: 0 },
              Tir: { quantity: 0 },
              Nef: { quantity: 0 },
              Eth: { quantity: 0 },
              Ith: { quantity: 0 },
              Tal: { quantity: 0 },
              Ral: { quantity: 0 },
              Ort: { quantity: 0 },
              Thul: { quantity: 0 },
              Amn: { quantity: 0 },
              Sol: { quantity: 0 },
              Shael: { quantity: 0 },
              Dol: { quantity: 0 },
              Hel: { quantity: 0 },
              Io: { quantity: 0 },
              Lum: { quantity: 0 },
              Ko: { quantity: 0 },
              Fal: { quantity: 0 },
              Lem: { quantity: 0 },
              Pul: { quantity: 0 },
              Um: { quantity: 0 },
              Mal: { quantity: 0 },
              Ist: { quantity: 0 },
              Gul: { quantity: 0 },
              Vex: { quantity: 0 },
              Ohm: { quantity: 0 },
              Lo: { quantity: 0 },
              Sur: { quantity: 0 },
              Ber: { quantity: 0 },
              Jah: { quantity: 0 },
              Cham: { quantity: 0 },
              Zod: { quantity: 0 },
            },
            // gems: {
            //   Topaz: {
            //     chipped_topaz: { quantity: 0 },
            //     flawed_topaz: { quantity: 0 },
            //     topaz: { quantity: 0 },
            //     flawless_topaz: { quantity: 0 },
            //     perfect_topaz: { quantity: 0 },
            //   },
            // },
          },
        };
        return await users.insertOne(newUser).then((user, err) => {
          if (err) throw err;
          return { status: "success" };
        });
      }
    } catch (err) {
      console.error(`Unable to create user: ${err}`);
      return { error: err };
    }
  }

  static async loginUser(username, password) {
    try {
      const user = await users.findOne({ username: username });
      if (user) {
        if (user.password === password) {
          const token = jwt.sign(user, process.env.SECRET, {
            expiresIn: 60 * 60 * 5,
          });
          const inventory = user.inventory;

          return { username, token, inventory };
        } else throw "Invalid credentials";
      } else {
        throw "Invalid credentials";
      }
    } catch (err) {
      console.error(`Unable to login ${err}`);
      return { error: err };
    }
  }

  static async getUserInv(userParam) {
    try {
      const user = await users.findOne({ username: userParam });

      return user.inventory;
    } catch (err) {
      console.log(err);
    }
  }

  static async saveUserInv(username, inv) {
    try {
      const user = await users.findOneAndUpdate(
        { username: username },
        { $set: { inventory: { runes: inv } } }
      );

      return user;
    } catch (err) {
      console.log(err);
    }
  }
}

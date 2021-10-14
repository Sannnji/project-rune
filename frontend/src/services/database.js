import http from "../http-common";

class DatabaseService {
  signup(data) {
    return http.post(`/user/signup`, data);
  }

  login(data) {
    return http.post(`/user/login`, data);
  }

  getRunes() {
    return http.get("/runes");
  }

  getRunewords() {
    return http.get("/runewords");
  }

  saveInv(user, token, inv) {
    return http.put(`/user/${user}/inventory/save`, inv, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new DatabaseService();

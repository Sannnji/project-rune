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
}

export default new DatabaseService();

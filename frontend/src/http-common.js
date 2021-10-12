import axios from "axios";

export default axios.create({
  baseURL: "https://rune-data.herokuapp.com/",
  headers: {
    "Content-type": "application/json",
  },
});

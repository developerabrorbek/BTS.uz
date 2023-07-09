import axios from "axios";

export default axios.create({
  baseURL: "https://rjavadev.jprq.live/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

import axios from "axios";
import { CLIENT_ID } from "../constants";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `${CLIENT_ID}`
  }
});

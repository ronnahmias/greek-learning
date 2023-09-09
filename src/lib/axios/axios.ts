import axios from "axios";

export const apiServer = axios.create({
  baseURL: process.env.NEXT_API_URL,
});

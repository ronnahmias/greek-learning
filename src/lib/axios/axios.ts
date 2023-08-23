import axios from "axios";

export const apiServer = axios.create({
  baseURL: process.env.NEXT_FRONTEND_URL,
});

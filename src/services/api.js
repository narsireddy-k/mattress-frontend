import axios from "axios";

const api = axios.create({
  baseURL: "https://mattress-backend-1-l8ps.onrender.com/api",
});

export default api;

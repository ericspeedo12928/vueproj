import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://bce.dida.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getBCEDIDA() {
    return apiClient.get("/dida/bce");
  },
};

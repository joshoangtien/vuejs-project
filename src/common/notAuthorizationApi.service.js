import axios from "axios";
import { API_BASE_URL } from "@/common/constants";

export const NotAuthorizationApiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
  },
});

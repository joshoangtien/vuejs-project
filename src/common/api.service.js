// services
import axios from "axios";
import { getToken } from "@/common/jwt.service";
import { API_BASE_URL } from "@/common/constants";

const ApiService = () => {
  const defaultOptions = {
    baseURL: API_BASE_URL,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
    },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = getToken();
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    // detect IE11 or IE10
    if (
      navigator.userAgent.match(/Trident.*rv:11\./) ||
      navigator.userAgent.match(/MSIE/i)
    )
      config.headers.common["Cache-Control"] = "no-cache";

    return config;
  });

  return instance;
};

export default ApiService();

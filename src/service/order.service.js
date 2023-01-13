import ApiService from "@/common/api.service";
import { API_LIST_ORDER } from "@/common/constants/api.constants.js";

export const getListOrder = function (page) {
  return ApiService.get(`${API_LIST_ORDER}?page=${page}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

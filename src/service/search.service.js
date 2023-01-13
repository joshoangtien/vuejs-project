import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service.js";
import { API_SEARCH_PRODUCT } from "../common/constants/api.constants";

export const getSearchProducts = function (keyword) {
  return NotAuthorizationApiService.get(API_SEARCH_PRODUCT + keyword)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

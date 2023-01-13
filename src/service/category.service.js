import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service.js";
import { API_LIST_CATEGORY } from "../common/constants/api.constants";

export const getListCate = function () {
  return NotAuthorizationApiService.get(API_LIST_CATEGORY)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

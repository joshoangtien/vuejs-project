import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service.js";
import { API_ADD_CONTACT } from "@/common/constants/api.constants.js";

export const postContact = function (data) {
  return NotAuthorizationApiService.post(API_ADD_CONTACT, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

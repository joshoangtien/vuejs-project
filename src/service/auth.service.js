import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service.js";
import ApiService from "@/common/api.service";
import {
  API_LOGIN,
  API_REGISTER,
  API_UPDATE_PROFILE,
  API_CHANGE_PASSWORD,
} from "@/common/constants/api.constants.js";

export const login = function (data) {
  return NotAuthorizationApiService.post(API_LOGIN, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const register = function (data) {
  return NotAuthorizationApiService.post(API_REGISTER, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const update_profile = function (data) {
  return ApiService.put(API_UPDATE_PROFILE, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const change_password = function (data) {
  return ApiService.post(API_CHANGE_PASSWORD, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

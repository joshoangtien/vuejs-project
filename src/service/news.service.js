import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service.js";
import {
  API_GET_FIVE_NEWS,
  API_GET_ALL_NEWS,
  API_GET_NEWS_SEARCH,
  API_GET_NEW_DETAIL,
} from "@/common/constants/api.constants.js";

export const getFiveNews = function () {
  return NotAuthorizationApiService.get(API_GET_FIVE_NEWS)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getAllNews = function (page) {
  return NotAuthorizationApiService.get(`${API_GET_ALL_NEWS}?page=${page}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getNewsSearch = function (page, keyword) {
  return NotAuthorizationApiService.get(
    `${API_GET_NEWS_SEARCH}?page=${page}&keyword=${keyword}`
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const getNewDetail = function (id) {
  return NotAuthorizationApiService.get(API_GET_NEW_DETAIL + id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

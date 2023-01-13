import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service.js";
import {
  API_SIDEBAR_NEWS,
  API_SIDEBAR_PRODUCT,
  API_GET_PRODUCT_DETAIL,
  API_GET_PRODUCT_BY_CATE,
  API_GET_ALL_PRODUCTS,
} from "../common/constants/api.constants";

export const getProducts = function (API) {
  return NotAuthorizationApiService.get(API)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getProductsFilter = function (API, page, price) {
  return NotAuthorizationApiService.get(`${API}?page=${page}&keyword=${price}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getSidebarNews = function (data) {
  return NotAuthorizationApiService.get(API_SIDEBAR_NEWS, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getSidebarProduct = function (data) {
  return NotAuthorizationApiService.get(API_SIDEBAR_PRODUCT, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const getProductDetail = function (id) {
  return NotAuthorizationApiService.get(API_GET_PRODUCT_DETAIL + id)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error.response;
    });
};

export const getProductRelated = function (keyword) {
  return NotAuthorizationApiService.get(
    `${API_GET_PRODUCT_BY_CATE}?keyword=${keyword}`
  )
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error.response;
    });
};

export const getAllProducts = function (page) {
  return NotAuthorizationApiService.get(`${API_GET_ALL_PRODUCTS}?page=${page}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw error.response;
    });
};

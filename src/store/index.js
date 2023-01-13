import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const checkAuth = () => {
  const token = window.localStorage.getItem("JWT_TOKEN");
  const user = window.localStorage.getItem("user");
  if (token !== null && user !== null) return true;
  return false;
};

const getUser = () => {
  return JSON.parse(window.localStorage.getItem("user"));
};

export default new Vuex.Store({
  state: {
    auth: {
      isAuthenticated: checkAuth(),
      user: getUser(),
    },
    products: [
      {
        id: 1,
        name: "Nike",
        price: "1.000.000",
        image: "product.png",
      },
      {
        id: 2,
        name: "Dior",
        price: "2.000.000",
        image: "product.png",
      },
      {
        id: 3,
        name: "Balenciaga",
        price: "3.000.000",
        image: "product.png",
      },
      {
        id: 4,
        name: "Adidas",
        price: "4.000.000",
        image: "product.png",
      },
      {
        id: 5,
        name: "Nike",
        price: "1.000.000",
        image: "product.png",
      },
      {
        id: 6,
        name: "Dior",
        price: "2.000.000",
        image: "product.png",
      },
      {
        id: 7,
        name: "Balenciaga",
        price: "3.000.000",
        image: "product.png",
      },
      {
        id: 8,
        name: "Adidas",
        price: "4.000.000",
        image: "product.png",
      },
    ],
    recommendProducts: [
      {
        id: 1,
        name: "Nike",
        price: "1.000.000",
        image: "@assets/images/product.png",
      },
      {
        id: 2,
        name: "Dior",
        price: "2.000.000",
        image: "product.png",
      },
      {
        id: 3,
        name: "Balenciaga",
        price: "3.000.000",
        image: "product.png",
      },
      {
        id: 4,
        name: "Adidas",
        price: "4.000.000",
        image: "product.png",
      },
    ],
    newProducts: [
      {
        id: 1,
        name: "Nike",
        price: "1.000.000",
        image: "product.png",
      },
      {
        id: 2,
        name: "Dior",
        price: "2.000.000",
        image: "product.png",
      },
      {
        id: 3,
        name: "Balenciaga",
        price: "3.000.000",
        image: "product.png",
      },
      {
        id: 4,
        name: "Adidas",
        price: "4.000.000",
        image: "product.png",
      },
    ],
    hotProducts: [
      {
        id: 1,
        name: "Nike",
        price: "1.000.000",
        image: "product.png",
      },
      {
        id: 2,
        name: "Dior",
        price: "2.000.000",
        image: "product.png",
      },
      {
        id: 3,
        name: "Balenciaga",
        price: "3.000.000",
        image: "product.png",
      },
      {
        id: 4,
        name: "Adidas",
        price: "4.000.000",
        image: "product.png",
      },
      {
        id: 5,
        name: "Nike",
        price: "1.000.000",
        image: "product.png",
      },
      {
        id: 6,
        name: "Dior",
        price: "2.000.000",
        image: "product.png",
      },
      {
        id: 7,
        name: "Balenciaga",
        price: "3.000.000",
        image: "product.png",
      },
      {
        id: 8,
        name: "Adidas",
        price: "4.000.000",
        image: "product.png",
      },
    ],
    saleProducts: [
      {
        id: 1,
        name: "Nike",
        price: 1000000,
        sale: 500000,
        image: "product.png",
      },
      {
        id: 2,
        name: "Dior",
        price: 4000000,
        sale: 2000000,
        image: "product.png",
      },
      {
        id: 3,
        name: "Balenciaga",
        price: 3000000,
        sale: 1500000,
        image: "product.png",
      },
      {
        id: 4,
        name: "Gucci",
        price: 2000000,
        sale: 1500000,
        image: "product.png",
      },
    ],
  },
  mutations: {
    login(state) {
      // state.auth.isAuthenticated = true;
      state.auth.user = getUser();
    },
    logout() {
      // state.auth.isAuthenticated = false;
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("JWT_TOKEN");
    },
    listProducts(state, list) {
      state.products = list;
    },
  },
  actions: {},
  modules: {},
});

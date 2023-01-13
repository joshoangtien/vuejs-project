<template>
  <div class="main__content">
    <div class="breadcrumb">
      <span class="breadcrumb--link__previous">Trang chủ / </span>
      <span class="breadcrumb--link__current">{{ pageTitle }}</span>
    </div>
    <div class="main__content--page">
      <aside class="sidebar">
        <div class="sidebar__filter">
          <span class="sidebar__filter--title">Lọc theo giá</span>
          <div class="range-slider">
            <input
              class="range-min"
              type="range"
              min="0"
              max="30000000"
              step="100000"
              v-model.number="minPrice"
              @change="setRangeSlider"
            />
            <input
              class="range-max"
              type="range"
              min="0"
              max="30000000"
              step="100000"
              v-model.number="maxPrice"
              @change="setRangeSlider"
            />
          </div>
          <div class="range__option">
            <button @click="filterPrice">LỌC</button>
            <div class="range-value">
              <p>Giá: &nbsp;</p>
              <p>
                <span> {{ minPrice | formatPrice }} đ</span> -
                <span> {{ maxPrice | formatPrice }} đ</span>
              </p>
            </div>
          </div>
        </div>
        <div class="sidebar__products">
          <span class="sidebar__products--title">Sản phẩm</span>
          <SidebarProductsList :products="sidebarProducts" />
        </div>
        <div class="sidebar__posts">
          <span class="sidebar__posts--title">Bài viết mới nhất</span>
          <SidebarPostsList :posts="sidebarPosts" />
        </div>
      </aside>
      <div class="products__list">
        <ProductsList :products="listItem" />
      </div>
    </div>
    <BasePagination :page="page" @update:page="page = $event" :total="total" />
  </div>
</template>

<script>
import ProductsList from "@/components/client/ProductsList.vue";
import SidebarProductsList from "@/components/client/pages/sidebarProducts/SidebarProductsList.vue";
import SidebarPostsList from "@/components/client/pages/sidebarPosts/SidebarPostsList.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import {
  getProductsFilter,
  getSidebarNews,
  getSidebarProduct,
} from "@/service/product.service.js";

import {
  API_NEW_PRODUCT,
  API_HOT_PRODUCT,
  API_SALE_PRODUCT,
} from "@/common/constants/api.constants";

export default {
  name: "Products",
  components: {
    ProductsList,
    SidebarProductsList,
    SidebarPostsList,
    BasePagination,
  },

  data() {
    return {
      pageTitle: String,
      products: [],
      listItem: [],
      sidebarProducts: [],
      sidebarPosts: [],
      page: 1,
      total: 0,
      minPrice: 0,
      maxPrice: 30000000,
    };
  },

  watch: {
    page(value) {
      this.getList(value);
    },
  },

  created() {
    this.getList();
    this.minPrice = 0;
    this.maxPrice = 30000000;

    getSidebarProduct()
      .then((response) => {
        this.sidebarProducts = response.data.data.data;
      })
      .catch((error) => {
        throw new Error(error);
      });

    getSidebarNews()
      .then((response) => {
        this.sidebarPosts = response.data.data.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },

  methods: {
    /* paginate */
    updatePage(pageNumber) {
      this.page = pageNumber;
    },
    /* end of paginate */

    getList(page = 1, price = this.maxPrice) {
      let params = this.$route.path;
      let apiUrl;
      if (params == "/new-products") {
        apiUrl = API_NEW_PRODUCT;
        this.pageTitle = "Sản phẩm mới";
      } else if (params == "/hot-products") {
        apiUrl = API_HOT_PRODUCT;
        this.pageTitle = "Sản phẩm hot";
      } else if (params == "/sale-products") {
        apiUrl = API_SALE_PRODUCT;
        this.pageTitle = "Sản phẩm khuyến mãi";
      }

      getProductsFilter(apiUrl, page, price)
        .then((response) => {
          console.log(response);
          this.products = response.data.data.data;
          this.listItem = this.products;
          this.total = response.data.data.last_page;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },

    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
    },
    filterPrice() {
      this.getList(this.page, this.maxPrice);
    },
  },
};
</script>

<style lang="scss" scoped>
.main__content {
  width: 95%;
  margin: 0 auto;

  .breadcrumb {
    padding: 40px 0 20px 0;
    letter-spacing: -0.5px;
    color: #111111;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 300;
    font-weight: bold;

    .breadcrumb--link__previous {
      opacity: 0.45;
    }
  }

  .main__content--page {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 24% 74%;
    gap: 2%;

    .sidebar {
      padding: 0 15px;
      .sidebar__filter {
        .sidebar__filter--title {
          color: #111111;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 300;
          font-weight: bold;
          opacity: 0.8;
        }
      }

      .range-slider {
        margin: auto 16px;
        text-align: center;
        position: relative;
        top: 30px;
        left: 0;

        input {
          width: 110%;
          height: 5px;
          position: absolute;
          left: -15px;
          bottom: 0;
          -webkit-appearance: none;
          background-color: red;
          border-radius: 5px;
          background-color: #a0a0a0;
        }

        input::-webkit-slider-thumb {
          z-index: 2;
          position: relative;
          -webkit-appearance: none;
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background: #707070;
        }
      }

      .range__option {
        margin-top: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .range-value {
          display: flex;
          margin-right: 10px;
        }

        button {
          background-color: #202020;
          opacity: 0.6;
          border-radius: 50px;
          border: 0;
          color: white;
          padding: 5px 10px;
          font-weight: bold;
          cursor: pointer;
        }

        button:hover {
          background-color: #000000;
        }

        p {
          font-size: 14px;
          span {
            color: #111111;
            font-weight: 300;
            font-weight: bold;
            opacity: 0.8;
          }
        }
      }

      .sidebar__products {
        margin-top: 45px;

        .sidebar__products--title {
          color: #111111;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 300;
          font-weight: bold;
          opacity: 0.8;
        }
      }

      .sidebar__posts {
        margin-top: 45px;

        .sidebar__posts--title {
          color: #111111;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 300;
          font-weight: bold;
          opacity: 0.8;
        }
      }
    }
  }
  .pagtion {
    text-align: center;
    margin: 40px 0 50px 0;

    button {
      cursor: pointer;
      padding: 15px 20px;
      background-color: transparent;
      border: 1px solid #707070;
      font-weight: bold;
      font-size: 20px;
    }
    button:hover {
      background-color: #1250a2;
      color: white;
    }
    button:nth-child(2) {
      background-color: #1250a2;
      color: white;
    }
  }
}
.list__products {
  justify-content: flex-start;
  gap: 35px;
}

@media (min-width: 1366px) {
  .list__products {
    justify-content: flex-start;
    gap: 25px;
  }
}
</style>

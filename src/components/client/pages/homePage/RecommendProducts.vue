<template>
  <div class="recommend__products container">
    <div class="products__intro">
      <h5>Khám phá các sản phẩm tuyệt vời</h5>
      <h3>Đề xuất cho bạn</h3>
    </div>
    <div class="products__list">
      <ProductsList :products="recommendProducts" />
    </div>
    <div class="btn_more">
      <router-link to="/sale-products">
        <button>Xem thêm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/client/ProductsList.vue";
// import { mapState } from "vuex";

export default {
  name: "RecommendProducts",
  components: {
    ProductsList,
  },
  props: {
    recommendProducts: Array,
  },
};
</script>

<style lang="scss" scoped>
.recommend__products {
  margin-top: 80px;

  .products__intro {
    text-align: center;
    // font-family: "Poppins";
    text-transform: uppercase;
    h5 {
      font-size: 14px;
      // letter-spacing: -0.31px;
      color: #302f2f;
      font-weight: 300;
    }
    h3 {
      margin-top: 5px;
      font-size: 25px;
      letter-spacing: -1.2px;
      color: #111111;
      font-weight: 700;
    }
  }
  .products__list {
    margin-top: 36px;
  }

  .btn_more {
    text-align: center;
    button {
      background-color: transparent;
      border: 1px solid #707070;
      padding: 18px 80px;
      border-radius: 5px;
      margin: 45px 0 40px 0;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover {
      color: white;
      background: black;
      transition: 0.4s ease-in-out;
    }
  }
}
</style>

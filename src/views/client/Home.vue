<template>
  <div class="main__content">
    <div class="banner">
      <img src="@/assets/images/banner_img.jpg" alt="" />
    </div>
    <RecommendProducts :recommendProducts="recommendProducts" />
    <Slogan />
    <NewProducts :newProducts="fourNewProducts" :saleProduct="oneSaleProduct" />
    <Slogan />
    <HotProducts :hotProducts="hotProducts" />
  </div>
</template>

<script>
import Slogan from "@/components/client/Slogan.vue";
import RecommendProducts from "@/components/client/pages/homePage/RecommendProducts.vue";
import NewProducts from "@/components/client/pages/homePage/NewProducts.vue";
import HotProducts from "@/components/client/pages/homePage/HotProducts.vue";
// import { mapState } from "vuex";

import { getProducts } from "@/service/product.service.js";
import {
  API_RECOMMEND_PRODUCT,
  API_NEW_PRODUCT,
  API_HOT_PRODUCT,
  API_SALE_PRODUCT,
} from "@/common/constants/api.constants";

export default {
  name: "HomePage",
  components: {
    Slogan,
    RecommendProducts,
    NewProducts,
    HotProducts,
  },
  data() {
    return {
      recommendProducts: [],
      newProducts: [],
      hotProducts: [],
      saleProducts: [],
      fourNewProducts: [],
      oneSaleProduct: {},
    };
  },
  async created() {
    // getProducts(API_RECOMMEND_PRODUCT).then((response) => {
    //   this.recommendProducts = response.data.data.data;
    // });
    // getProducts(API_NEW_PRODUCT).then((response) => {
    //   this.newProducts = response.data.data.data;
    //   for (let i = 0; i < 4; i++) {
    //     this.fourNewProducts.push(this.newProducts[i]);
    //   }
    // });
    // getProducts(API_HOT_PRODUCT).then((response) => {
    //   this.hotProducts = response.data.data.data;
    // });
    // getProducts(API_SALE_PRODUCT).then((response) => {
    //   this.saleProducts = response.data.data.data;
    //   this.oneSaleProduct = this.saleProducts[9];
    // });

    const apiUrls = [
      API_RECOMMEND_PRODUCT,
      API_NEW_PRODUCT,
      API_HOT_PRODUCT,
      API_SALE_PRODUCT,
    ];
    let listDataArrs = [];
    for (let key in this.$data) {
      listDataArrs.push(key);
    }
    const requests = apiUrls.map((apiUrl) => getProducts(apiUrl));
    let results = await Promise.all(requests);
    for (let i = 0; i < results.length; i++) {
      this.$data[listDataArrs[i]] = results[i].data.data.data;
    }
    for (let i = 0; i < 4; i++) {
      this.fourNewProducts.push(this.newProducts[i]);
    }
    this.oneSaleProduct = this.saleProducts[0];
  },
  methods: {},
};
</script>

<style lang="scss">
.main__content {
  background-color: white;
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>

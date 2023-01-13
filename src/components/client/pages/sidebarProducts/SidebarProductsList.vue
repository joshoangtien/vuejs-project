<template>
  <div class="list__products">
    <div v-for="product in products" :key="product.product_id">
      <SidebarProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import SidebarProductItem from "@/components/client/pages/sidebarProducts/SidebarProductItem.vue";
export default {
  name: "SidebarProductList",
  props: {
    products: Array,
  },
  components: {
    SidebarProductItem,
  },
};
</script>

<style lang="scss" scoped>
.list__products {
  border: 2px solid rgb(194, 194, 194);
  padding: 0 15px;
  margin-top: 20px;
}
</style>

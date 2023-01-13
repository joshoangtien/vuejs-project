<template>
  <div class="list__products">
    <div v-for="product in products" :key="product.product_id">
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";

export default {
  name: "ProductsList",
  props: {
    products: Array,
  },
  components: {
    ProductItem,
  },
};
</script>

<style lang="scss" scoped>
.list__products {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 60px;
}
</style>

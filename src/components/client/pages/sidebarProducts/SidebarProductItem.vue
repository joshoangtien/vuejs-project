<template>
  <router-link
    :to="`/product-detail/${product.product_id}`"
    class="product__item__component"
  >
    <div class="product__item">
      <img class="product__item__img" :src="product.image" alt="" />
      <div class="product__item__infor">
        <p class="product__item__name">{{ product.name }}</p>
        <p class="product__item__price">{{ product.price | formatPrice }} đ</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SidebarProductItem",
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped>
.product__item__component {
  text-decoration: none;
  color: rgb(51, 51, 51);

  .product__item {
    overflow: hidden;
    display: grid;
    grid-template-columns: 30% 70%;
    gap: 20px;
    align-items: center;
    border-bottom: 1px dashed rgb(194, 194, 194);
    cursor: pointer;
    height: 85px;

    img {
      width: 100%;
      height: 80%;
    }

    .product__item__infor {
      font-size: 14px;

      .product__item__price {
        font-weight: bold;
        margin-top: 10px;
      }
    }
  }
}
</style>

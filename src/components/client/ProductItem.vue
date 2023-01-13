<template>
  <router-link
    :to="`/product-detail/${
      product.product_id ? product.product_id : product.id
    }`"
    class="product__item__component"
  >
    <div class="product__item">
      <div class="img">
        <img
          class="product__item__img"
          :src="product.image ? product.image : product.product_img"
          alt="Ảnh sản phẩm"
        />
      </div>
      <p class="product__item__name">{{ product.name }}</p>
      <p class="product__item__price">{{ product.price | formatPrice }} Đ</p>
      <div>
        <button class="btn__addToCart">Chi tiết sản phẩm</button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductItem",
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
    width: 220px;
    height: 400px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    background-color: #f5f5f5;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;

    .img {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: end;

      img {
        transition: all 0.2s ease-in-out;
        // margin-top: -30px;
        width: 220px;
        height: 280px;
        overflow: hidden;
      }
    }

    .product__item__name {
      font-size: 14px;
      font-weight: bold;
      margin-top: 20px;
    }
    .product__item__price {
      width: 70%;
      margin: 0 auto;
      color: #ff4f04;
      font-weight: bold;
      background-color: #ff4f0417;
      border-radius: 15px;
      padding: 5px 0;
      margin-top: 20px;
    }

    button {
      cursor: pointer;
      background-color: #ce0b0b;
      color: white;
      font-size: 12px;
      letter-spacing: -0.4px;
      border: 0;
      padding: 5px 10px;
      margin: 20px;
    }
  }

  .product__item:hover {
    img {
      transform: scale(1.1);
    }
  }
}
</style>

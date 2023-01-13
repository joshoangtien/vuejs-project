<template>
  <div class="new__products container">
    <div class="products__intro">
      <h5>NHẬP KHẨU TRỰC TIẾP TỪ NIKE</h5>
      <h3>SẢN PHẨM MỚI</h3>
    </div>
    <div class="products__list">
      <div class="products__list--left">
        <ProductsList :products="newProducts" />
      </div>
      <div class="product__item--right">
        <router-link :to="`product-detail/${saleProduct.product_id}`">
          <div class="product__item--box">
            <div class="product__item__sale">
              <span class="sale__percent">SALE - {{ salePercent }}%</span>
              <span class="sale__price"
                >{{ saleProduct.price | formatPrice }}đ</span
              >
            </div>
            <div class="img">
              <img :src="saleProduct.image" alt="" />
            </div>
            <div class="product__item__information">
              <p class="product__item--name">{{ saleProduct.name }}</p>
              <p class="product__item--brand">
                Nhãn hiệu: {{ saleProduct.category_name }}
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="btn_more">
      <router-link to="/new-products">
        <button>Xem thêm</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/client/ProductsList.vue";
export default {
  name: "HotProducts",
  components: {
    ProductsList,
  },
  props: {
    newProducts: Array,
    saleProduct: Object,
  },
  computed: {
    salePercent: function () {
      return Math.floor(
        Number(
          100 - (this.saleProduct.sale_price / this.saleProduct.price) * 100
        )
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.new__products {
  margin-top: 80px;

  .products__intro {
    text-align: center;
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
    margin-top: 50px;
    display: grid;
    grid-template-columns: 48% 48%;
    grid-gap: 4%;

    .products__list--left {
      .list__products {
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
        gap: 25px;
        row-gap: 20px;
      }
    }
    .product__item--right {
      background-color: #f5f5f5;
      border-radius: 10px;
      position: relative;
      overflow: hidden;

      .product__item--box {
        .img {
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          img {
            width: 100%;
            height: 700px;
          }
        }
        .product__item__sale {
          display: flex;
          justify-content: space-between;

          .sale__percent {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #111111;
            border-radius: 17px;
            text-align: center;
            letter-spacing: -0.3px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
            padding: 5px 10px;
          }
          .sale__price {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #ff5106;
            background-color: #ff4d0053;
            font-weight: bold;
            border-radius: 17px;
            padding: 5px 10px;
          }
        }
        .product__item__information {
          position: absolute;
          left: 20px;
          bottom: 30px;
          // margin-left: 20px;
          // margin-bottom: 30px;
          .product__item--name {
            letter-spacing: -0.45px;
            color: #111111;
            font-size: 25px;
            font-weight: 600;
          }
          .product__item--brand {
            letter-spacing: -0.25px;
            color: #7a7a7a;
            font-size: 14px;
            margin-top: 8px;
          }
        }
      }
    }
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

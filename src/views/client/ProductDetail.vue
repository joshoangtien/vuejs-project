<template>
  <div>
    <div class="product_detail">
      <div class="product_detail_description_short">
        <div class="product_image">
          <img
            :src="product.image"
            alt=""
          />
        </div>

        <div class="product_info">
          <div class="breadcrumbs">
            <router-link
              class="router-link"
              to="/"
            > Trang chủ</router-link>
            <p>/ Chi tiết sản phẩm</p>
          </div>

          <div class="info">
            <h2 class="info_name">
              {{ product.name }}
            </h2>
            <div class="info_price">
              <p :class="product.sale ? 'price' : 'price_normal'">
                {{ product.price | formatPrice }} đ
              </p>
              <p
                :hidden="!product.sale"
                class="price_sale"
              >
                {{ (product.price - product.sale) | formatPrice }} đ
              </p>
            </div>
            <div class="info_size">
              <h4>Size</h4>
              <div class="list_size">
                <div
                  v-for="size in product.size"
                  :key="size.size"
                  class="checkbox_size"
                >
                  <input
                    name="size"
                    type="radio"
                    hidden="hidden"
                    :id="size.size"
                    :value="size.size"
                    v-model="sizeValue"
                  />
                  <label :for="size.size"> {{ size.size }} </label>
                </div>
              </div>
            </div>
            <div class="info_quantity">
              <div class="quantity buttons_added">
                <input
                  @click="quantityValue -= 1"
                  type="button"
                  value="-"
                  class="minus"
                  :disabled="quantityValue == 1"
                />

                <input
                  type="number"
                  step="1"
                  min="1"
                  v-model="quantityValue"
                  max="999"
                  title="Qty"
                  class="input-text qty text"
                  size="4"
                />

                <input
                  @click="quantityValue += 1"
                  type="button"
                  value="+"
                  class="plus"
                />
              </div>

              <div
                v-for="size in product.size"
                :hidden="size.size !== sizeValue"
                :key="size.size"
                class="total_quantity"
              >
                <p v-if="size.size == sizeValue">
                  {{ size.quantity }} sản phẩm có sẵn
                </p>
              </div>
            </div>

            <div
              hidden
              class="quantity_error"
            >
              <p>Số lượng bạn chọn đã đạt mức tối đa của sản phẩm này</p>
            </div>

            <div class="add_to_cart">
              <BaseButton
                class="red sm"
                text="Thêm vào giỏ"
              />

              <BaseButton
                class="red sm"
                text="Thanh toán"
              />
            </div>
          </div>

          <div class="express_logo">
            <div class="heading">
              <p>Tính ship tự động</p>
              <p>Thanh toán</p>
            </div>
            <img
              src="@/assets/images/logo-express.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    <div class="product_detail_description_long">
      <div class="description_heading">
        <button class="button_desc">Thông tin bổ xung</button>
        <button class="button_rate">Đánh giá (0)</button>
        <div></div>
      </div>
      <div class="description_content">
        <div class="description_content_item">
          <span>Mã sản phẩm</span>
          <p>{{ product.shoe_code }}</p>
        </div>
        <div class="description_content_item">
          <span>Hãng</span>
          <p>{{ product.category_name }}</p>
        </div>
        <div class="description_content_item">
          <span>Giới tính</span>
          <p v-if="product.suitable_gender == '0'">Nam</p>
          <p v-else-if="product.suitable_gender == '1'">Nữ</p>
          <p v-else-if="product.suitable_gender == '2'">Nam, Nữ</p>
        </div>
      </div>
    </div>

    <div class="product_similar">
      <h4>Sản phẩm tương tự</h4>

      <ProductsList :products="productsRelated" />
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import ProductsList from "@/components/client/ProductsList.vue";
import {
  getProductDetail,
  getProductRelated,
} from "@/service/product.service.js";

export default {
  name: "ProductDetailPage",
  components: {
    BaseButton,
    ProductsList,
  },
  data() {
    return {
      quantityValue: 1,
      sizeValue: "",
      product: {},
      productsRelated: [],
    };
  },
  created() {
    getProductDetail(this.$route.params.id)
      .then((response) => {
        this.product = response.data.data;
        getProductRelated(this?.product.category_id)
          .then((response) => {
            this.productsRelated = response.data.data.data.slice(0, 5);
          })
          .catch((error) => {
            if (error.status == 400) {
              this.$router.push("/");
            }
          });
      })
      .catch((error) => {
        if (error.status == 400) {
          this.$router.push("/");
        }
      });
  },
};
</script>

<style lang="scss" scoped>
.product_detail {
  margin: 200px 85px 30px;
  font-family: Roboto;

  .product_detail_description_short {
    display: flex;
    gap: 50px;

    .product_image img {
      margin-top: 30px;
      width: 500px;
    }

    .product_info {
      display: flex;
      flex-direction: column;
      gap: 5px;

      .breadcrumbs {
        display: flex;
        gap: 5px;

        .router-link,
        p {
          text-decoration: none;
          color: rgb(90, 90, 90);
          font-weight: 500;
        }

        .router-link:hover {
          cursor: pointer;
          color: #1f1f1f;
        }
      }

      .info {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .info_price {
          display: flex;
          gap: 20px;
          font-size: 15pt;
          font-weight: 500;
          color: rgb(65, 65, 65);

          .price {
            color: #c30005;
            text-decoration: line-through;
          }

          .price_normal {
            color: rgb(65, 65, 65);
            text-decoration: none;
          }

          .price_sale {
          }
        }

        .info_size {
          display: flex;
          flex-direction: column;
          gap: 10px;

          .list_size {
            display: grid;
            gap: 10px;
            grid-template-columns: 50px 50px 50px 50px 50px;
            grid-template-rows: auto;

            .checkbox_size input ~ label {
              background-color: rgb(207, 207, 207);
              color: rgb(85, 85, 85);
            }
            .checkbox_size input:checked ~ label {
              background-color: #c30005;
              color: white;
            }

            .checkbox_size {
              display: inline-block;

              label {
                padding: 4px;
                border-radius: 3px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 12pt;
                font-weight: 400;
              }

              label:hover {
                cursor: pointer;
              }
            }
          }
        }

        .quantity_error {
          color: #c30005;
        }

        .add_to_cart {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: start;
        }

        .info_quantity {
          display: flex;
          gap: 10px;
          align-items: center;

          .quantity {
            display: inline-block;

            .input-text.qty {
              width: 35px;
              height: 39px;
              padding: 0 5px;
              text-align: center;
              background-color: transparent;
              border: 1px solid #c2c2c2;
            }

            &.buttons_added {
              text-align: left;
              position: relative;
              white-space: nowrap;
              vertical-align: top;

              input {
                display: inline-block;
                margin: 0;
                vertical-align: top;
                box-shadow: none;
              }

              input::-webkit-outer-spin-button,
              input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                -moz-appearance: none;
                margin: 0;
              }

              .minus,
              .plus {
                font-size: 14pt;
                padding: 7px 10px 8px;
                height: 41px;
                background-color: #ffffff;
                border: 1px solid #c2c2c2;
                cursor: pointer;
              }

              .minus {
                border-right: 0;
              }

              .plus {
                border-left: 0;
              }

              .minus:hover,
              .plus:hover {
                background: #eeeeee;
              }
            }
          }

          .total_quantity p {
            font-size: 11pt;
            color: #757575;
          }
        }
      }

      .express_logo {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        gap: 20px;

        .heading {
          display: flex;
          align-items: center;

          p {
            width: 50%;
            font-weight: 500;
          }
        }
      }
    }
  }
}

.product_detail_description_long {
  font-family: Roboto;
  margin: 0 30px;

  .description_heading {
    display: flex;
    position: relative;

    button {
      position: absolute;
      display: block;
      text-transform: uppercase;
      padding: 5px;
      border: 1px solid #adadad;
      border-top: 2px solid #c30005;
      border-bottom: 0;
      font-size: 9pt;
      cursor: pointer;
      font-weight: 600;
    }

    .button_desc {
      top: 0;
      left: 0;
    }

    .button_rate {
      top: 0;
      left: 140px;
      border: 1px solid #adadad;
      background-color: #dddddd;
      color: #757575;
    }
  }

  .description_content {
    margin-top: 25px;
    border: 1px solid #adadad;
    padding: 20px 15px 28px;

    .description_content_item {
      display: flex;
      justify-content: start;
      align-items: center;
      border-bottom: 1px solid #adadad;
      padding: 8px 0;

      span {
        width: 50%;
        font-weight: 500;
        text-transform: uppercase;
        font-size: 11pt;
      }

      p {
        font-weight: 300;
        color: #757575;
      }
    }
  }
}

.product_similar {
  font-family: Roboto;
  margin: 30px 30px;

  h4 {
    margin-bottom: 10px;
    border-top: 1px solid #757575;
    padding: 15px 30px;
    text-transform: uppercase;
    font-size: 13pt;
    font-weight: 500;
  }
}
</style>

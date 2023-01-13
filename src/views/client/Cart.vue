<template>
  <div>
    <div
      v-if="productsOnCart && productsOnCart.length !== 0"
      class="main__content"
    >
      <div class="cart__productsList">
        <table>
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Tổng</th>
            </tr>
          </thead>
          <tbody v-for="product in productsOnCart" :key="product.product_id">
            <tr>
              <td>
                <div class="base__infor">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  <img src="@/assets/images/product.png" alt="" />
                  <p>{{ product.name }}</p>
                </div>
              </td>
              <td>{{ product.price }}đ</td>
              <td>
                <div class="quantity">
                  <button
                    @click="
                      product.quantity <= 1
                        ? (product.quantity = 1)
                        : product.quantity--
                    "
                    @mouseout="
                      product.quantity > product.amount
                        ? (product.quantity = product.amount)
                        : product.quantity
                    "
                  >
                    -
                  </button>
                  <input
                    :class="[
                      product.quantity > product.amount ? 'alertQuantity' : '',
                    ]"
                    @mouseout="
                      product.quantity > product.amount
                        ? (product.quantity = product.amount)
                        : product.quantity && product.quantity <= 1
                        ? (product.quantity = 1)
                        : product.quantity
                    "
                    type="number"
                    v-model="product.quantity"
                  />
                  <button
                    @click="
                      product.quantity >= product.amount
                        ? (product.quantity = product.amount)
                        : product.quantity++
                    "
                    @mouseout="
                      product.quantity > product.amount
                        ? (product.quantity = product.amount)
                        : product.quantity
                    "
                  >
                    +
                  </button>
                </div>
                <p
                  class="errorQuantity"
                  v-if="product.quantity >= product.amount"
                >
                  Sản phẩm chỉ còn {{ product.amount }}
                </p>
              </td>
              <td>{{ product.price * product.quantity }}đ</td>
            </tr>
          </tbody>
        </table>

        <div class="cart__productsList__buttons">
          <button class="btn btn__backHome">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Về trang chủ
          </button>
          <button class="btn btn__updateCart" @click="applyCart">
            Cập nhật giỏ hàng
          </button>
        </div>
      </div>
      <div class="cart__checkout">
        <div class="cart__checkout__sumQuantity">
          <h6>Tổng số lượng</h6>
          <div class="cart__minorTotal">
            <span class="cart__checkout__desc">Tổng phụ</span>
            <span class="cart__checkout__price">{{ sumPrice }}đ</span>
          </div>
          <div class="delivery">
            <span class="cart__checkout__desc">Giao hàng</span>
            <div class="delivery__content">
              <p>Giao hàng miễn phí</p>
              <p>Ước tính cho Việt Nam</p>
            </div>
          </div>
          <div class="cart__promotion--price" v-if="isVoucher">
            <span class="cart__checkout__desc">Ưu đãi</span>
            <span class="cart__checkout__price"> - {{ promotionPrice }}đ</span>
          </div>
          <div class="cart__totalPrice">
            <span class="cart__checkout__desc">Tổng</span>
            <span class="cart__checkout__price">đ</span>
          </div>
          <router-link to="/payment">
            <div class="cart__btn">
              <button>Tiến hành thanh toán</button>
            </div>
          </router-link>
        </div>
        <div class="cart__voucher">
          <div class="cart__voucher--title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              />
            </svg>
            <h6>Phiếu ưu đãi</h6>
          </div>
          <div class="cart__voucher--input">
            <input type="text" placeholder="Mã ưu đãi" v-model="voucher_code" />
            <p class="cart__voucher--error" v-if="voucher_error">
              Mã ưu đãi không tồn tại!
            </p>
          </div>
          <div class="cart__voucher--apply">
            <button>Áp dụng</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="productsOnCart.length == 0" class="errorCart">
      <div class="">
        Bạn chưa thêm sản phẩm nào vào giỏ hàng <i class="far fa-frown" />
      </div>
      <router-link to="/">
        <button class="">Trang chủ</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      productsOnCart: [],
      minorPrice: 0,
      totalPrice: 0,
      isVoucher: false,
      voucher_code: "",
      voucher_error: false,
      productQuantity: 0,
      productAmount: 0,
    };
  },
  created() {
    this.productsOnCart = [
      {
        id: 1,
        name: "Adidas",
        price: 1,
        quantity: 2,
        amount: 5,
      },
      {
        id: 2,
        name: "Adidas",
        price: 2,
        quantity: 2,
        amount: 7,
      },
      {
        id: 3,
        name: "Adidas",
        price: 3,
        quantity: 2,
        amount: 8,
      },
      {
        id: 4,
        name: "Adidas",
        price: 4,
        quantity: 2,
        amount: 4,
      },
    ];
  },
  computed: {
    sumPrice() {
      let totalPrice = 0;
      if (this.productsOnCart !== null) {
        this.productsOnCart.forEach((item) => {
          let price;
          price = item.quantity * item.price;
          totalPrice += price;
        });
        console.log(this.productsOnCart);
      }
      return totalPrice;
    },
  },
  methods: {
    applyCart() {
      console.log(this.productsOnCart);
    },
  },
};
</script>

<style lang="scss" scoped>
.main__content {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 62% 38%;
  // gap: 2%;
  padding-top: 30px;

  .cart__productsList {
    padding-right: 4%;

    table {
      border-collapse: collapse;
      thead {
        tr {
          th {
            width: 15%;
            text-align: left;
            border-bottom: 2px solid #e2e1e1;
            padding: 10px 0;
            text-transform: uppercase;

            button {
              padding: 0 5px;
            }
          }
          th:first-child {
            width: 50%;
          }
          th:last-child {
            text-align: right;
          }
          th:nth-child(3) {
            width: 20%;
            text-align: center;
          }
        }
      }

      tbody {
        tr {
          td {
            border-bottom: 1px solid #ececec;
            text-align: left;
            font-weight: bold;

            input {
              width: 25%;
              text-align: center;
              padding: 5px 0;
              border: 1px solid black;
              border-left: 0;
              border-right: 0;
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
              -moz-appearance: none;
              margin: 0;
            }

            button {
              padding: 5px 5px;
              cursor: pointer;
              background-color: rgb(240, 239, 239);
              border: 1px solid black;
            }

            button:active {
              background-color: rgb(255, 255, 255);
            }
          }
          td:first-child {
            font-weight: normal;
            align-items: center;

            .base__infor {
              display: flex;
              align-items: center;
            }
            button {
              width: 7%;
              padding: 3px;
              border: 0;
              background-color: transparent;
              svg {
                color: #919191;
                cursor: pointer;
              }

              svg:hover {
                background-color: rgb(250, 104, 104);
                border-radius: 50%;
                color: white;
              }
            }

            img {
              width: 18%;
              margin-left: 4%;
            }

            p {
              margin-left: 4%;
            }
          }
          td:nth-child(3) {
            text-align: center;

            .quantity {
              input {
                outline: none;
              }
            }

            .alertQuantity {
              border: 2px solid red;
              background-color: rgb(255, 205, 205);
            }
            .errorQuantity {
              margin-top: 3px;
              font-size: 12px;
              font-weight: normal;
              color: rgb(214, 182, 0);
            }
          }
          td:last-child {
            text-align: right;
            font-weight: bold;
          }
        }
      }
    }
  }

  .cart__productsList__buttons {
    display: flex;
    margin-top: 20px;
    .btn__backHome {
      cursor: pointer;
      width: 25%;
      padding: 2px 0;
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      font-weight: bold;
      align-items: center;
      border: 2px solid #c30106;
      background-color: white;

      svg {
        width: 9%;
        margin: 5px;
      }
      color: #c30106;
    }

    .btn__updateCart {
      cursor: pointer;
      margin-left: 2%;
      background-color: #db6669;
      width: 25%;
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      border: 0;
      outline: none;
      padding: 7px 0;
    }
  }

  .cart__checkout {
    border-left: 1px solid #e7e7e7;
    padding-left: 6%;
    padding-right: 3%;

    .cart__checkout__sumQuantity {
      h6 {
        font-weight: bold;
        text-transform: uppercase;
        color: red;
        font-size: 16px;
        color: black;
        padding: 10px 0;
        border-bottom: 2px solid #e2e1e1;
      }

      .cart__minorTotal {
        padding: 20px 0 10px 0;
        border-bottom: 1px solid #e2e1e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .delivery {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e2e1e1;

        .delivery__content {
          text-align: right;
          font-size: 14px;

          p:first-child {
            padding: 15px 0 15px 0;
          }

          p:last-child {
            padding: 0 0 5px 0;
          }
        }
      }

      .cart__totalPrice,
      .cart__promotion--price {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0 10px 0;
        border-bottom: 2px solid #e2e1e1;
      }

      .cart__btn {
        margin-top: 20px;

        button {
          width: 100%;
          background-color: #d26e4b;
          color: white;
          outline: none;
          border: 0;
          padding: 10px 0;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }

    .cart__checkout__desc {
      color: #353535;
    }
    .cart__checkout__price {
      font-weight: bold;
    }

    .cart__voucher {
      margin-top: 25px;

      .cart__voucher--title {
        display: flex;
        align-items: center;
        margin-top: 10px;
        border-bottom: 2px solid #e2e1e1;
        padding-bottom: 10px;

        svg {
          width: 4%;
          color: #353535;
        }
        h6 {
          font-size: 16px;
        }
      }

      .cart__voucher--input {
        margin-top: 15px;

        input {
          width: calc(100% - (4% + 2px));
          padding: 2% 2%;
          border: 1px solid #e2e1e1;
          outline: none;
        }

        .cart__voucher--error {
          color: red;
          font-size: 14px;
          margin-top: 5px;
        }
      }

      .cart__voucher--apply {
        margin-top: 15px;

        button {
          width: 100%;
          padding: 8px 10px;
          border: 1px solid #e2e1e1;
          outline: none;
          cursor: pointer;
          background-color: #f9f9f9;
          color: #353535;
        }

        button:active {
          background-color: rgb(255, 255, 255);
        }
        button:hover {
          background-color: rgb(213, 213, 213);
        }
      }
    }
  }
}
.errorCart {
  text-align: center;
  padding: 100px 0;
  font-size: 30px;
  font-weight: bold;

  a {
    button {
      margin-top: 20px;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 5px;
      outline: none;
      border: 0;
      background-color: #d26e4b;
      color: white;
    }

    button:hover {
      background-color: #b55430;
    }
  }
}
</style>

<template>
  <form>
    <div class="main__content">
      <div class="payment__form">
        <h3>THÔNG TIN THANH TOÁN</h3>
        <div class="form__info">
          <div class="info__name">
            <div class="info__name__item">
              <BaseInput
                type="text"
                label="Họ và Tên Đệm *"
                messageError="Error"
              />
            </div>

            <div class="info__name__item">
              <BaseInput type="text" label="Tên *" messageError="Error" />
            </div>
          </div>

          <div>
            <BaseInput
              type="text"
              value="Việt Nam"
              palacehoder="Việt Nam"
              label="Quốc gia *"
              disabled
            />
          </div>
          <div>
            <BaseInput
              type="text"
              label="Địa chỉ *"
              messageError="Error"
              placeholder="Địa chỉ"
            />
          </div>
          <div>
            <BaseInput
              type="text"
              label="Tỉnh / Thành phố *"
              messageError="Error"
            />
          </div>
          <div>
            <BaseInput
              type="number"
              label="Số điện thoại *"
              messageError="Error"
            />
          </div>
          <div>
            <BaseInput
              type="email"
              label="Địa chỉ email"
              messageError="Error"
            />
          </div>

          <div class="info__note">
            <label>Ghi chú đơn hàng(tùy chọn)</label>

            <textarea
              name=""
              id=""
              placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
              maxlength="1000"
            ></textarea>
          </div>
        </div>
      </div>

      <div class="payment__checkout">
        <h3>ĐƠN HÀNG CỦA BẠN</h3>
        <div class="checkout_info">
          <div class="info__products">
            <div class="info__products__head">
              <h4>SẢN PHẨM</h4>
              <h4>TỔNG</h4>
            </div>
            <div class="product__buy">
              <div class="product__buy__item">
                <p class="product__buy__item__name">
                  Chuck Taylor <span>× 1</span>
                </p>
                <p class="product__buy__item__price">1.000.000 đ</p>
              </div>

              <div class="product__buy__item">
                <p class="product__buy__item__name">
                  Chuck Taylor <span>× 1</span>
                </p>
                <p class="product__buy__item__price">1.000.000 đ</p>
              </div>

              <div class="product__buy__item">
                <p class="product__buy__item__name">
                  Chuck Taylor <span>× 1</span>
                </p>
                <p class="product__buy__item__price">1.000.000 đ</p>
              </div>

              <div class="product__buy__item">
                <p class="product__buy__item__name">
                  Chuck Taylor <span>× 1</span>
                </p>
                <p class="product__buy__item__price">1.000.000 đ</p>
              </div>

              <div class="product__buy__item">
                <p class="product__buy__item__name">
                  Chuck Taylor <span>× 1</span>
                </p>
                <p class="product__buy__item__price">1.000.000 đ</p>
              </div>
            </div>
          </div>

          <div class="info_subtotal">
            <p>Tổng phụ</p>
            <p>8.000.000 đ</p>
          </div>

          <div class="info_delivery">
            <p>Giao hàng</p>
            <p>Giao hàng miễn phí</p>
          </div>

          <div class="info_total">
            <p>Tổng</p>
            <p>8.000.000 đ</p>
          </div>

          <div class="info_payment">
            <div class="info_payment_receive">
              <input
                type="radio"
                id="receive"
                name="payment"
                value="receive"
                checked
              />
              <label for="receive">Trả tiền khi nhận hàng</label>
            </div>
            <div class="info_payment_banking">
              <input type="radio" id="banking" name="payment" value="banking" />
              <label for="banking">Chuyển khoản ngân hàng</label>
            </div>
          </div>

          <div>
            <p>
              Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
              Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
              toán. Đơn hàng sẽ được giao sau khi đã chuyển tiền
            </p>
          </div>

          <div class="btn_payment">
            <BaseButton typeButton="orange" text="ĐẶT HÀNG" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  name: "PaymentPage",
  components: {
    BaseInput,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.main__content {
  width: 90%;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  gap: 40px;
  grid-template-columns: 62% 38%;
  padding-top: 50px;

  .payment__form {
    padding-right: 4%;
    border-top: 2px solid rgb(177, 177, 177);
    padding-top: 20px;

    .form__info {
      margin-top: 30px;
      display: flex;
      gap: 25px;
      flex-direction: column;

      .info__name {
        display: grid;
        gap: 20px;
        justify-content: space-between;
        grid-template-columns: 50% 50%;

        .info__name__item {
          width: calc(100% - 20px);
        }
      }

      .info__note {
        width: 100%;

        label {
          font-size: 16px;
          font-weight: bold;
        }

        textarea {
          margin-top: 16px;
          width: 100%;
          min-width: 100%;
          min-height: 200px;
          max-width: 100%;
          max-height: 200px;
          height: 200px;
          padding: 10px;
          resize: none;
        }
      }
    }
  }

  .payment__checkout {
    height: fit-content;
    padding: 20px;
    border: 2px solid red;

    .checkout_info {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 15px;

      .info__products {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .info__products__head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 3px solid rgb(207, 207, 207);
          padding: 5px 0;
        }

        .product__buy {
          display: flex;
          flex-direction: column;

          .product__buy__item {
            border-bottom: 1px solid rgb(207, 207, 207);
            padding: 15px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .product__buy__item__name span,
            .product__buy__item__price {
              font-weight: bold;
            }
          }
        }
      }

      .info_subtotal {
        font-size: 14pt;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(207, 207, 207);
        padding: 5px 0;
      }

      .info_delivery {
        font-size: 13pt;
        font-weight: 200;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgb(207, 207, 207);
        padding: 5px 0;
        color: rgb(85, 85, 85);
      }

      .info_total {
        font-size: 14pt;
        font-weight: 600;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 3px solid rgb(207, 207, 207);
        padding: 5px 0;
      }

      .info_payment {
        display: flex;
        flex-direction: column;

        .info_payment_receive {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          font-size: 13pt;
          font-weight: 700;
          border-bottom: 1px solid rgb(207, 207, 207);
        }

        .info_payment_banking {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 0;
          font-size: 13pt;
          font-weight: 700;
        }
      }

      .btn_payment {
        margin-top: 20px;
      }
    }
  }
}
</style>

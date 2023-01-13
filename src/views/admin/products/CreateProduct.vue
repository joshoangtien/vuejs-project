<template>
  <form @submit="handleSubmit">
    <div class="content_head">
      <h2>Thêm mới sản phẩm</h2>
    </div>

    <div class="form_add_product">
      <div class="column_left">
        <BaseInput
          type="text"
          label="Mã sản phẩm"
          messageError="Error"
          v-model="productCode"
          :isError="productCode == ''"
        />

        <BaseInput
          type="text"
          label="Tên sản phẩm"
          messageError="Error"
          v-model="productName"
          :isError="productName == ''"
        />

        <div class="category_select">
          <label>Danh mục</label>
          <select v-model="productCate" name="" id="">
            <option>Danh mục</option>
            <option value="">Nike</option>
            <option value="">Adidas</option>
            <option value="">Thafasoco</option>
            <option value="">Gucci</option>
          </select>
          <span>fdsfsd</span>
        </div>

        <BaseInput
          :isError="productPrice == ''"
          type="number"
          label="Giá"
          messageError="Error"
          v-model="productPrice"
        />

        <BaseInput
          :isError="productSale == ''"
          type="number"
          label="Giảm giá"
          messageError="Error"
          v-model="productSale"
        />
      </div>

      <div class="column_right">
        <div class="upload_image">
          <div class="upload_input">
            <h4>Ảnh sản phẩm</h4>
            <input
              type="file"
              accept="image/*"
              @change="previewImage"
              class="form-control-file"
              id="my-file"
            />
          </div>

          <img
            v-if="preview"
            :src="preview"
            class="img-fluid"
            width="250px"
            alt="image upload"
          />
        </div>

        <div class="info_gender">
          <h4>Giới tính</h4>
          <div class="list_gender">
            <div class="checkbox_gender">
              <input
                name="gender"
                type="checkbox"
                id="man"
                hidden="hidden"
                value="man"
              />
              <label for="man"> Nam </label>
            </div>

            <div class="checkbox_gender">
              <input
                name="gender"
                type="checkbox"
                id="woman"
                hidden="hidden"
                value="woman"
              />
              <label for="woman"> Nữ </label>
            </div>
          </div>
        </div>

        <div class="info_size">
          <h4>Size</h4>
          <div class="list_size">
            <div class="checkbox_size">
              <input
                name="size"
                type="checkbox"
                id="36"
                hidden="hidden"
                value="36"
              />
              <label for="36"
                >36
                <span class="quantity_size">
                  Số lượng
                  <input
                    maxlength="4"
                    type="number"
                    onKeyPress="if(this.value.length == 3) return false;"
                  />
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BaseButton type="submit" text="Thêm mới" typeButton="button-add" />
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import ImgDefault from "@/assets/images/image-default.png";

import { NotAuthorizationApiService } from "@/common/notAuthorizationApi.service";
// import ApiService from "@/common/api.service";
export default {
  name: "CreateProductPage",
  components: {
    BaseInput,
    BaseButton,
  },
  data: function () {
    return {
      preview: ImgDefault,
      image: null,
      file: null,
      productCode: "",
      productName: "",
      productCate: "",
      productPrice: "",
      productSale: "",
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.$children.forEach((ele) => {
        ele.focus = false;
      });
    },

    previewImage: function (event) {
      var input = event.target;
      if (input.files) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.preview = e.target.result;
        };
        this.image = input.files[0];
        reader.readAsDataURL(input.files[0]);
        console.log(reader);
        console.log(reader.result);
        const data = {
          image: reader,
          type: 2,
        };
        NotAuthorizationApiService.post("uploadFile", data).then((response) => {
          console.log(response);
        });
      }
    },
  },
};
</script>

<style lang="scss">
.content_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.form_add_product {
  font-family: Roboto;
  display: flex;
  gap: 40px;
  margin: 40px 10px;

  .column_left {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;

    .category_select {
      display: flex;
      flex-direction: column;

      label {
        font-size: 16px;
        font-weight: bold;
      }

      select {
        height: 37px;
        margin-top: 16px;
      }
    }
  }

  .column_right {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;

    h4 {
      font-size: 16px;
      font-weight: bold;
    }

    .upload_image {
      display: flex;
      flex-direction: column;
      gap: 20px;

      .upload_input {
        display: flex;
        flex-direction: column;
        gap: 16px;

        input {
          cursor: pointer;
          width: 300px;
        }
      }

      .img-fluid {
        box-shadow: 0 3px 10px rgb(0, 0, 0 / 0.2);
      }
    }

    .info_size,
    .info_gender {
      display: flex;
      flex-direction: column;
      gap: 10px;

      .list_size,
      .list_gender {
        display: grid;
        gap: 15px;
        grid-template-columns: 130px 130px 130px;
        grid-template-rows: auto;

        .checkbox_size input ~ label,
        .checkbox_gender input ~ label {
          background-color: rgb(207, 207, 207);
          color: rgb(85, 85, 85);
        }

        .checkbox_size input:checked ~ label,
        .checkbox_gender input:checked ~ label {
          background-color: #c30005;
          color: white;

          .quantity_size {
            display: flex;
          }
        }

        .checkbox_size,
        .checkbox_gender {
          display: inline-block;

          label {
            font-weight: 700;
            padding: 4px;
            border-radius: 3px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12pt;
            display: flex;
            flex-direction: column;
            gap: 10px;

            .quantity_size {
              font-size: 11pt;
              font-weight: 400;
              display: none;
              gap: 5px;

              input {
                width: 40px;
                border: none;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                padding: 2px;
              }

              input:focus {
                outline: none;
              }
            }
          }

          label:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>

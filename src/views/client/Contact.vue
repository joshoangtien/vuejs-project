<template>
  <div class="contact">
    <h2 class="contact__title">LIÊN HỆ</h2>
    <div class="contact__main">
      <div class="contact__info">
        <h3>Liên hệ</h3>
        <p>Khu nhà trên mây, phường Phú La, Hà Đông, Hà Nội</p>
        <p>+84 123 456 888</p>
        <p>support@tuankashop.com.vn</p>
      </div>
      <form @submit="handleSubmit" class="contact__content">
        <div class="contact_info">
          <div class="contact__content--item">
            <BaseInput placeholder="Họ và tên" v-model="name" />
          </div>

          <div class="contact__content--item">
            <BaseInput
              placeholder="Email"
              v-model="email"
              :isError="emailErrorMessage != ''"
              :messageError="emailErrorMessage"
            />
          </div>

          <div class="contact__content--item">
            <BaseInput
              placeholder="Số điện thoại"
              v-model="telephone"
              :isError="telephoneErrorMessage != ''"
              :messageError="telephoneErrorMessage"
              maxlength="10"
            />
          </div>

          <div class="contact__content--item">
            <BaseInput placeholder="Địa chỉ" v-model="address" />
          </div>
        </div>

        <div class="contact__content--comment">
          <textarea
            name=""
            id=""
            placeholder="Lời nhắn"
            v-model="comment"
            maxlength="1000"
          ></textarea>
        </div>

        <div class="contact__content--submit">
          <div class="toast">
            <p class="toast--failed" v-if="messageContactFailed">
              Thất bại! Vui lòng kiểm tra lại thông tin
            </p>
            <p class="toast--success" v-if="messageContactSuccess">
              Gửi thông tin liên hệ thành công!
            </p>
          </div>

          <BaseButton text="GỬI" type="submit" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { postContact } from "@/service/contact.service.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      telephone: "",
      address: "",
      comment: "",
      messageContactSuccess: false,
      messageContactFailed: false,
    };
  },

  components: {
    BaseInput,
    BaseButton,
  },

  computed: {
    nameErrorMessage() {
      if (!this.name) return "Yêu cầu nhập đầy đủ họ và tên";
      const regex =
        /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]+(([',. -][a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ])?[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý])$/;
      if (!regex.test(this.name)) return "Họ và tên không đúng định dạng";
      return "";
    },

    emailErrorMessage() {
      if (!this.email) return "Yêu cầu nhập email";
      const regex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)$/;
      if (!regex.test(this.email)) return "Email không đúng định dạng";
      return "";
    },

    telephoneErrorMessage() {
      if (!this.telephone) return "Vui lòng nhập số điện thoại";
      const regex = /(84|0)+([3|2|4|6|5|7|8|9])+([0-9]{8})\b/;
      if (!regex.test(this.telephone))
        return "Số điện thoại không đúng định dạng";
      return "";
    },
  },

  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.$children.forEach((ele) => (ele.focus = false));

      if (!this.$children.some((ele) => ele.hasError)) {
        let data = {
          fullname: this.name,
          email: this.email,
          phone: this.telephone,
          address: this.address,
          content: this.comment,
        };

        postContact(data).then((response) => {
          if (response.data.success === 0) {
            this.messageContactFailed = true;
          } else if (response.data.success === 1) {
            this.name = "";
            this.email = "";
            this.telephone = "";
            this.address = "";
            this.comment = "";
            this.$children.forEach((ele) => (ele.focus = true));
            this.messageContactFailed = false;
            this.messageContactSuccess = true;
            setTimeout(() => {
              this.messageContactSuccess = false;
              window.location.href = "/contact";
            }, 3000);
          }
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  width: 1270px;
  margin: 0 auto;
  padding: 20px 0;

  &__title {
    text-align: center;
    padding: 60px 0;
  }

  &__main {
    display: flex;

    .contact__info {
      width: 30%;
      padding: 50px 20px 0 100px;
      border-right: 1px solid #b3afaf;

      h3 {
        margin-bottom: 15px;
        font-size: 22px;
      }

      p {
        font-size: 18px;
        line-height: 26px;
      }
    }

    .contact__content {
      width: 70%;
      padding: 30px 30px;

      .contact_info {
        display: grid;
        row-gap: 25px;
        column-gap: 15px;
        grid-template-columns: 50% 50%;

        .contact__content--item {
          width: calc(100% - 22px);
        }
      }

      .contact__content--comment {
        width: 100%;
        margin: 25px 0;

        textarea {
          width: 100%;
          min-width: 100%;
          min-height: 200px;
          max-width: 100%;
          max-height: 200px;
          height: 200px;
          padding: 5px;
          resize: none;
        }
      }

      .contact__content--submit {
        margin: 0 auto;
        width: 50%;

        button {
          width: 100%;
          padding: 15px;
        }

        .toast {
          text-align: center;
          padding: 0 0 20px;

          .toast--failed {
            padding: 15px 20px;
            background-color: red;
            color: white;
            border-radius: 10px;
            width: 80%;
            margin: 0 auto;
          }

          .toast--success {
            padding: 15px 20px;
            background-color: rgb(0, 155, 0);
            color: white;
            border-radius: 10px;
            width: 80%;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>

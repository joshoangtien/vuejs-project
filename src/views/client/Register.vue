<template>
  <form @submit="handleSubmit">
    <h2 class="form__title">ĐĂNG KÝ</h2>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="name"
        label="Tên *"
        :isError="nameErrorMessage != ''"
        :messageError="nameErrorMessage"
        maxlength="30"
      />
    </div>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="email"
        label="Địa chỉ email *"
        :isError="emailErrorMessage != ''"
        :messageError="emailErrorMessage"
      />
    </div>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="password"
        type="password"
        label="Mật khẩu *"
        minlength="6"
        maxlength="12"
        :isError="passwordErrorMessage != ''"
        :messageError="passwordErrorMessage"
      />
    </div>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="confirmPassword"
        type="password"
        label="Xác nhận mật khẩu *"
        minlength="6"
        maxlength="12"
        :isError="confirmPassword == '' || confirmPassword !== password"
        :messageError="
          confirmPassword == ''
            ? 'Yêu cầu xác nhận mật khẩu'
            : confirmPassword !== password
            ? 'Mật khẩu không khớp'
            : ''
        "
      />
    </div>

    <div class="form__group">
      <div class="toast">
        <p class="toast--failed" v-if="messageRegisterFailed">
          Email đã tồn tại! Vui lòng nhập địa chỉ email khác
        </p>
        <p class="toast--success" v-if="messageRegisterSuccess">
          Đăng ký thành công! Đang di chuyển tới trang đăng nhập...
        </p>
      </div>

      <BaseButton text="ĐĂNG KÝ" type="submit" />
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { register } from "@/service/auth.service.js";

export default {
  name: "RegisterPage",

  components: {
    BaseInput,
    BaseButton,
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      messageRegisterSuccess: false,
      messageRegisterFailed: false,
    };
  },

  computed: {
    nameErrorMessage() {
      if (!this.name) return "Yêu cầu nhập tên";
      // const regex =
      //   /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]+(([ ][a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ])?[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]*)*$/;
      const regex =
        /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]*$/;
      if (!regex.test(this.name))
        return "Định dạng tên chỉ được bao gồm chữ hoặc số!";
      return "";
    },

    emailErrorMessage() {
      if (!this.email) return "Yêu cầu nhập email";
      const regex = /^[a-zA-Z0-9.]+@(?:gmail)+(?:\.com+)$/;
      if (!regex.test(this.email)) return "Email không đúng định dạng";
      return "";
    },

    passwordErrorMessage() {
      if (!this.password) return "Yêu cầu nhập mật khẩu";
      const paraPass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{6,12}$/;
      if (!paraPass.test(this.password)) return "Password không đúng định dạng";
      return "";
    },
  },

  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.$children.forEach((ele) => (ele.focus = false));

      if (!this.$children.some((ele) => ele.hasError)) {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
        };

        register(data)
          .then((response) => {
            console.log(response);
            this.messageRegisterFailed = false;
            this.messageRegisterSuccess = true;
            setTimeout(() => {
              this.$router.push("/login");
            }, 2000);
          })
          .catch((error) => {
            this.messageRegisterFailed = true;
            setTimeout(() => {
              this.messageRegisterFailed = false;
            }, 4000);
            throw new Error(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 70px 0;
  h2 {
    text-align: center;
    padding: 50px 0 30px 0;
  }

  .form__group {
    width: 60%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;

    .toast {
      text-align: center;
      padding: 0 0 20px;

      .toast--failed {
        padding: 20px 20px;
        background-color: red;
        color: white;
        border-radius: 10px;
        width: 100%;
        margin: 0 auto;
      }

      .toast--success {
        padding: 20px 20px;
        background-color: rgb(0, 155, 0);
        color: white;
        border-radius: 10px;
        width: 100%;
        margin: 0 auto;
      }
    }
  }
}
</style>

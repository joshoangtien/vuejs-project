<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <h2 class="form__title">ĐĂNG NHẬP</h2>

      <div class="form__group">
        <BaseInput
          ref="input"
          v-model="email"
          label="Địa chỉ email *"
          :isError="emailErrorMessage !== ''"
          :messageError="emailErrorMessage"
        />
      </div>

      <div class="form__group">
        <BaseInput
          type="password"
          ref="input"
          v-model="password"
          label="Mật khẩu *"
          minlength="6"
          maxlength="12"
          :isError="passwordErrorMessage !== ''"
          :messageError="passwordErrorMessage"
        />
      </div>

      <div class="toast">
        <p class="toast--failed" v-if="loginFailed">
          Đăng nhập thất bại! Vui lòng kiểm tra lại Email hoặc Mật khẩu
        </p>
        <p class="toast--success" v-if="loginSuccess">
          Đăng nhập thành công! Đang được di chuyển tới trang chủ...
        </p>
      </div>

      <div class="form__login">
        <div class="form__login--child">
          <BaseButton text="ĐĂNG NHẬP" type="submit" />
          <input type="checkbox" name="" id="" /> Ghi nhớ mật khẩu
        </div>
        <p>
          <router-link to="/forgotPassword">Quên mật khẩu?</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

import { login } from "@/service/auth.service";
import { saveToken } from "@/common/jwt.service";

export default {
  name: "LoginPage",

  components: {
    BaseInput,
    BaseButton,
  },

  data() {
    return {
      email: "",
      password: "",
      msg: [],
      loginFailed: false,
      loginSuccess: false,
    };
  },
  computed: {
    emailErrorMessage() {
      if (!this.email) return "Yêu cầu nhập Email!";
      // const regex = /^[a-zA-Z0-9.]+@(?:gmail)+(?:\.com)$/;
      // if (!regex.test(this.email)) return "Email không đúng định dạng!";
      return "";
    },
    passwordErrorMessage() {
      if (!this.password) return "Yêu cầu nhập mật khẩu";
      // const paraPass =
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{6,12}$/;
      // if (!paraPass.test(this.password)) return "Password không đúng định dạng";
      return "";
    },
  },
  methods: {
    handleSubmit: async function (e) {
      e.preventDefault();

      this.$children.forEach((ele) => (ele.focus = false));
      if (!this.$children.some((ele) => ele.hasError)) {
        let credentials = {
          email: this.email,
          password: this.password,
        };

        login(credentials)
          .then((response) => {
            this.loginSuccess = true;
            this.loginFailed = false;
            const user = response.data.data.user;
            const token = response.data.data.token.access_token;
            saveToken(token);
            window.localStorage.setItem("user", JSON.stringify(user));
            setTimeout(() => {
              window.location.href = "/";
            }, 2000);
          })
          .catch((error) => {
            this.loginFailed = true;
            setTimeout(() => {
              this.loginFailed = false;
            }, 2000);
            throw new Error(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toast {
  text-align: center;
  padding: 0 0 20px;

  .toast--failed {
    padding: 20px 0;
    background-color: red;
    color: white;
    border-radius: 10px;
    width: 40%;
    margin: 0 auto;
  }

  .toast--success {
    padding: 20px 0;
    background-color: rgb(0, 155, 0);
    color: white;
    border-radius: 10px;
    width: 40%;
    margin: 0 auto;
  }
}

form {
  padding: 20px 0;
  h2 {
    padding: 20px 0;
    text-align: center;
  }

  .form__group {
    width: 60%;
    margin: 40px auto;
    display: flex;
    justify-content: center;
  }

  .form__login {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    input {
      margin-left: 45px;
    }

    p {
      font-size: 18px;
      margin: 20px 0 0 -175px;
    }
  }
}
</style>

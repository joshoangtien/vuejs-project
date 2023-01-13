<template>
  <form @submit.prevent="handleSubmit">
    <h2 class="form__title">THAY ĐỔI MẬT KHẨU</h2>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="password"
        type="password"
        label="Nhập lại mật khẩu cũ *"
        minlength="6"
        maxlength="12"
        :isError="passwordErrorMessage != ''"
        :messageError="passwordErrorMessage"
      />
    </div>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="newPassword"
        type="password"
        label="Nhập mật khẩu mới *"
        minlength="6"
        maxlength="12"
        :isError="newPasswordErrorMessage != ''"
        :messageError="newPasswordErrorMessage"
      />
    </div>

    <div class="form__group">
      <BaseInput
        ref="input"
        v-model="confirmNewPassword"
        type="password"
        label="Xác nhận mật khẩu mới *"
        minlength="6"
        maxlength="12"
        :isError="
          confirmNewPassword == '' || confirmNewPassword !== newPassword
        "
        :messageError="
          confirmNewPassword == ''
            ? 'Vui lòng xác nhận mật khẩu'
            : confirmNewPassword !== newPassword
            ? 'Mật khẩu mới không khớp'
            : ''
        "
      />
    </div>

    <div class="form__group">
      <div class="toast">
        <p class="toast--failed" v-if="messageChangeFailed">
          Nhập sai mật khẩu cũ! Vui lòng nhập đúng mật khẩu!
        </p>
        <p class="toast--success" v-if="messageChangeSuccess">
          Thay đổi mật khẩu thành công!
        </p>
      </div>

      <BaseButton text="THAY ĐỔI" type="submit" />
    </div>
  </form>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";

import { change_password } from "@/service/auth.service";

export default {
  name: "ChangePassword",

  components: {
    BaseInput,
    BaseButton,
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      newPassword: "",
      confirmNewPassword: "",
      messageChangeSuccess: false,
      messageChangeFailed: false,
    };
  },

  computed: {
    passwordErrorMessage() {
      if (!this.password) return "Yêu cầu nhập mật khẩu";
      // const paraPass =
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{6,12}$/;
      // if (!paraPass.test(this.password)) return "Mật khẩu không đúng định dạng";
      return "";
    },

    newPasswordErrorMessage() {
      if (!this.newPassword) return "Vui lòng nhập mật khẩu mới";
      const paraPass =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{6,12}$/;
      if (!paraPass.test(this.newPassword))
        return "Mật khẩu mới không đúng định dạng";
      return "";
    },
  },

  methods: {
    handleSubmit() {
      this.$children.forEach((ele) => (ele.focus = false));
      if (!this.$children.some((ele) => ele.hasError)) {
        let credentials = {
          old_password: this.password,
          new_password: this.newPassword,
          cnew_password: this.confirmNewPassword,
        };
        change_password(credentials)
          .then((response) => {
            console.log(response);
            this.messageChangeSuccess = true;
            setTimeout(() => {
              window.location.href = "/profile";
            }, 2000);
          })
          .catch((error) => {
            this.messageChangeFailed = true;
            setTimeout(() => {
              this.messageChangeFailed = false;
            }, 2000);
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

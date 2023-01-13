<template>
  <div class="main__content">
    <aside class="sidebar">
      <div class="sidebar__top">
        <p class="sidebar__top--title">
          <i class="fas fa-info-circle"></i>
          <span>Thông tin</span>
        </p>
        <!-- <div class="sidebar__top__information">
                    <p class="name__information">
                        <span class="">TÊN</span>
                        <span class="user__name">TUANKA</span>
                    </p>
                    <p class="email__information">
                        <span class="">EMAIL</span>
                        <span class="user__email">Youremail@gmail.com</span>
                    </p>
                </div> -->
        <router-link to="/changePassword">Thay đổi mật khẩu</router-link>
      </div>
      <div class="sidebar__bottom">
        <ul>
          <li>
            <span>
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg> </span
            >Thông Báo
          </li>
          <li>
            <span
              ><svg
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
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                /></svg></span
            >Phương Thức Thanh Toán
          </li>
          <li>
            <span
              ><svg
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                /></svg></span
            >Địa Chỉ Nhận Hàng
          </li>
          <li>
            <span
              ><svg
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
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                /></svg></span
            >Lịch Sử Mua Hàng
          </li>
          <li>
            <span
              ><svg
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                /></svg></span
            >Trợ Giúp
          </li>
        </ul>
      </div>
    </aside>
    <div class="profile">
      <div class="profile__title">
        <h6>Hồ Sơ Của Tôi</h6>
        <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
      </div>
      <form class="profile__main" @submit.prevent="handleSubmit">
        <div class="profile__main__field">
          <div class="field__name">Họ và tên</div>
          <div class="input__field">
            <BaseInput
              ref="input"
              v-model="name"
              :isError="nameErrorMessage != ''"
              :messageError="nameErrorMessage"
              maxlength="30"
            />
          </div>
        </div>
        <div class="profile__main__field">
          <div class="field__name">Email</div>
          <div class="input__field">
            <BaseInput
              ref="input"
              v-model="email"
              :isError="emailErrorMessage != ''"
              :messageError="emailErrorMessage"
              disabled
            />
          </div>
        </div>
        <div class="profile__main__field">
          <div class="field__name">Số điện thoại</div>
          <div class="input__field">
            <BaseInput
              type="number"
              ref="input"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              v-model="phone"
              :isError="phoneNumberErrorMessage != ''"
              :messageError="phoneNumberErrorMessage"
              maxlength="10"
            />
          </div>
        </div>
        <div class="profile__main__field">
          <div class="field__name">Giới Tính</div>
          <div class="input__radio">
            <label class="radio__female" for="female_gender">
              <input
                type="radio"
                name="gender"
                value="0"
                id="female_gender"
                v-model="gender"
                :checked="gender == 0"
              />Nam
            </label>
            <label class="radio__male" for="male_gender">
              <input
                type="radio"
                name="gender"
                value="1"
                id="male_gender"
                v-model="gender"
                :checked="gender == 1"
              />Nữ
            </label>
            <p class="errorGender" v-if="genderErrorMessage">
              Hãy chọn giới tính
            </p>
          </div>
        </div>
        <div class="profile__main__field">
          <div class="field__name">Ngày Sinh</div>
          <div class="input__field">
            <BaseInput
              type="date"
              ref="input"
              v-model="birthday"
              :isError="birthdayErrorMessage != ''"
              :messageError="birthdayErrorMessage"
            />
            <!-- <p class="errorBirthday" v-if="birthdayErrorMessage">
              Nhập ngày sinh
            </p> -->
          </div>
        </div>
        <div class="profile__main__button">
          <div class="field__name"></div>
          <BaseButton text="Lưu" type="submit" />
        </div>
        <div class="profile__main__toast" v-if="updateSuccess">
          <div class="field__name"></div>
          <div class="toast--success">Cập nhật thành công!</div>
        </div>
        <div class="profile__main__toast" v-if="updateFailed">
          <div class="field__name"></div>
          <div class="toast--failed">
            Cập nhật thất bại, vui lòng kiểm tra lại các thông tin!
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { update_profile } from "@/service/auth.service";
import { mapState } from "vuex";
import moment from "moment";

export default {
  name: "Profile",
  components: {
    BaseInput,
    BaseButton,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: 5,
      gender: 0,
      birthday: "",
      genderErrorMessage: false,
      updateSuccess: false,
      updateFailed: false,
    };
  },
  created() {
    this.name = this.user.name;
    this.email = this.user.email;
    this.phone = this.user.phone;
    this.gender = this.user.gender;
    this.birthday = this.user.birthday;
  },
  computed: mapState({
    isAuthenticated: (state) => state.auth.isAuthenticated,
    user: (state) => state.auth.user,
    nameErrorMessage() {
      if (!this.name) return "Hãy nhập họ và tên!";
      // const regex =
      //   /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]+(([ ][a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý ])?[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]*)*$/;
      const regex =
        /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễếệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý]*$/;
      if (!regex.test(this.name)) return "Họ và tên không đúng định dạng";
      return "";
    },
    emailErrorMessage() {
      if (!this.email) return "Yêu cầu nhập email";
      const regex = /^[a-zA-Z0-9.]+@[gmail]+(?:\.com)$/;
      if (!regex.test(this.email)) return "Email không đúng định dạng";
      return "";
    },
    phoneNumberErrorMessage() {
      if (!this.phone) return "Nhập số điện thoại";
      const regex = /(0[1|2|3|4|5|6|7|8|9])+([0-9]{8})\b/g;
      if (!regex.test(this.phone)) return "Số điện thoại không đúng định dạng";
      return "";
    },
    birthdayErrorMessage() {
      if (!this.birthday) return "Hãy nhập ngày sinh";
      const today = moment(String(new Date())).format("YYYY-MM-DD");
      if (this.birthday >= today)
        return "Ngày sinh phải là ngày trước của ngày hiện tại!";
      return "";
    },
  }),
  methods: {
    handleSubmit() {
      this.$children.forEach((ele) => (ele.focus = false));
      this.genderErrorMessage = this.gender === null;
      if (
        !this.genderErrorMessage &&
        !this.$children.some((ele) => ele.hasError)
      ) {
        let credentials = {
          name: this.name,
          phone: this.phone,
          gender: this.gender,
          birthday: this.birthday,
        };
        update_profile(credentials)
          .then((response) => {
            const user = JSON.stringify(response.data.data);
            window.localStorage.setItem("user", user);
            this.updateSuccess = true;
            setTimeout(() => {
              this.updateSuccess = false;
              window.location.reload();
            }, 2000);
          })
          .catch((error) => {
            this.updateFailed = true;
            setTimeout(() => {
              this.updateFailed = false;
            }, 2000);
            throw new Error(error);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main__content {
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 22% 75%;
  grid-gap: 3%;
  padding-top: 20px;
  margin-bottom: 60px;

  .sidebar {
    padding: 20px 0;
    .sidebar__top {
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid #e7e7e7;

      .sidebar__top--title {
        display: flex;
        align-items: center;
        i {
          color: #c31717;
          font-size: 40px;
        }

        span {
          color: black;
          font-size: 16px;
          margin-left: 30px;
        }
      }

      .sidebar__top__information {
        margin-top: 20px;

        p {
          display: flex;
          justify-content: space-between;

          .user__name,
          .user__email {
            color: #c31717;
          }
        }

        .email__information {
          margin-top: 35px;
        }
      }

      a {
        text-decoration: none;
        color: #c62222;
        margin-top: 100px;
        margin-bottom: 20px;
      }
    }

    .sidebar__bottom {
      ul {
        margin-top: 15px;
        li {
          display: flex;
          align-items: center;
          padding: 10px 0;
          span {
            margin-right: 15px;
            svg {
              color: #c31717;
              width: 24px;
              height: 24px;
            }
          }
        }
      }
    }
  }

  .profile {
    border-left: 1px solid #e7e7e7;

    padding-top: 20px;
    padding-left: 40px;
    .profile__title {
      color: #707070;
      border-bottom: 1px solid #e7e7e7;

      h6 {
        font-size: 20px;
      }

      p {
        font-size: 16px;
        margin-top: 5px;
        margin-bottom: 15px;
      }
    }

    .profile__main {
      .profile__main__field,
      .profile__main__button,
      .profile__main__toast {
        .input__field {
          width: 70%;

          .errorBirthday {
            color: red;
          }
        }

        display: grid;
        grid-template-columns: 20% 1fr;
        grid-gap: 3%;
        margin-top: 20px;
        align-items: center;

        .field__name {
          margin-top: 16px;
          text-align: right;
          color: #949494;
        }

        input[type="text"],
        input[type="number"],
        input[type="date"] {
          width: 100%;
          padding: 10px 10px;
          outline: none;
          border: 1px solid #dbdbdb;
        }

        .input__radio {
          width: 70%;
          margin-top: 16px;

          label {
            cursor: pointer;
          }

          .radio__male {
            margin-left: 30px;
          }

          input {
            margin-right: 3px;
          }

          .errorGender {
            margin-top: 5px;
            color: red;
          }
        }

        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          -moz-appearance: none;
          margin: 0;
        }

        button {
          padding: 12px 23px;
          border: 0;
          border-radius: 2px;
          outline: none;
          color: white;
          background-color: #ee4d2d;
          cursor: pointer;
        }
        button:hover {
          background-color: #cc4429;
        }

        .toast--success {
          width: 73%;
          margin-top: 10px;
          color: white;
          background-color: rgb(3, 159, 3);
          text-align: center;
          padding: 15px 0;
          border-radius: 5px;
        }
        .toast--failed {
          width: 73%;
          margin-top: 10px;
          color: white;
          background-color: red;
          text-align: center;
          padding: 15px 0;
          border-radius: 5px;
        }
      }

      .profile__main__button {
        margin-top: 30px;
      }

      .profile__main__toast {
        margin-top: 10px;
      }
    }
  }
}
</style>

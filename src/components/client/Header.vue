<template>
  <div class="header">
    <div class="header__top container">
      <div class="logo">
        <router-link to="/">
          <img
            src="@/assets/images/logo.png"
            alt=""
          />
        </router-link>
      </div>
      <!-- hadle Search -->
      <form
        @submit.prevent="directSearch()"
        class="search__form"
      >
        <BaseInput
          type="text"
          placeholder="Tìm kiếm"
          v-model="searchValue"
          maxlength="60"
        />

        <svg
          id="Search"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          @click.prevent="directSearch()"
        >
          <path
            id="Search-2"
            data-name="Search"
            d="M14.115,14.894l-.062-.053-2.346-2.287a7.276,7.276,0,0,1-4.5,1.545A7.138,7.138,0,0,1,0,7.05,7.139,7.139,0,0,1,7.208,0a7.139,7.139,0,0,1,7.209,7.05,6.938,6.938,0,0,1-1.9,4.762l2.318,2.261a.535.535,0,0,1,0,.768.565.565,0,0,1-.723.053ZM1.11,7.05a6.039,6.039,0,0,0,6.1,5.964,6.039,6.039,0,0,0,6.1-5.964,6.039,6.039,0,0,0-6.1-5.964A6.039,6.039,0,0,0,1.11,7.05Z"
            fill="#200e32"
          />
        </svg>
      </form>
      <div class="header__option">
        <div @click="showUserOption = !showUserOption">
          <div
            v-if="isAuthenticated"
            class="user__information"
          >
            <svg
              id="user_icon"
              data-name="674aaa8a5939fb3fb007e77121fb1581"
              xmlns="http://www.w3.org/2000/svg"
              width="18.556"
              height="18.658"
              viewBox="0 0 18.556 18.658"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M688.437,572.377a9.4,9.4,0,0,0-4.393-6.917.933.933,0,1,0-.977,1.59,7.516,7.516,0,0,1,3.516,5.531.934.934,0,0,0,.926.831.959.959,0,0,0,.1-.006A.932.932,0,0,0,688.437,572.377Z"
                transform="translate(-669.887 -554.757)"
              />
              <path
                id="Path_3"
                data-name="Path 3"
                d="M24.87,12.9a5.6,5.6,0,1,0-10.882,1.846.932.932,0,1,0,1.761-.613,3.733,3.733,0,1,1,3.524,2.5A9.312,9.312,0,0,0,10,24.922a.934.934,0,0,0,.826,1.03.96.96,0,0,0,.1.006.932.932,0,0,0,.926-.831,7.447,7.447,0,0,1,7.417-6.633A5.6,5.6,0,0,0,24.87,12.9Z"
                transform="translate(-9.995 -7.3)"
              />
            </svg>
            <p class="user__information--greeting">{{ user.name }}</p>
            <div
              v-if="showUserOption"
              id="user_option"
              class="option"
            >
              <ul v-if="user.role == 'User'">
                <router-link to="/profile">
                  <li>Thông tin tài khoản</li>
                </router-link>
                <li @click="logout">Đăng xuất</li>
              </ul>

              <ul v-if="user.role == 'Admin'">
                <router-link to="/admin">
                  <li>Quản Trị</li>
                </router-link>
                <router-link to="/profile">
                  <li>Thông tin tài khoản</li>
                </router-link>
                <li @click="logout">Đăng xuất</li>
              </ul>
            </div>
          </div>
          <div
            v-else
            class="login_option"
            @click="showAuthOption = !showAuthOption"
          >
            <svg
              id="user_icon"
              data-name="674aaa8a5939fb3fb007e77121fb1581"
              xmlns="http://www.w3.org/2000/svg"
              width="18.556"
              height="18.658"
              viewBox="0 0 18.556 18.658"
            >
              <path
                id="Path_2"
                data-name="Path 2"
                d="M688.437,572.377a9.4,9.4,0,0,0-4.393-6.917.933.933,0,1,0-.977,1.59,7.516,7.516,0,0,1,3.516,5.531.934.934,0,0,0,.926.831.959.959,0,0,0,.1-.006A.932.932,0,0,0,688.437,572.377Z"
                transform="translate(-669.887 -554.757)"
              />
              <path
                id="Path_3"
                data-name="Path 3"
                d="M24.87,12.9a5.6,5.6,0,1,0-10.882,1.846.932.932,0,1,0,1.761-.613,3.733,3.733,0,1,1,3.524,2.5A9.312,9.312,0,0,0,10,24.922a.934.934,0,0,0,.826,1.03.96.96,0,0,0,.1.006.932.932,0,0,0,.926-.831,7.447,7.447,0,0,1,7.417-6.633A5.6,5.6,0,0,0,24.87,12.9Z"
                transform="translate(-9.995 -7.3)"
              />
            </svg>
            <div
              v-if="showAuthOption"
              id="auth_option"
              class="option"
            >
              <ul>
                <router-link to="/login">
                  <li>Đăng nhập</li>
                </router-link>
                <router-link to="/register">
                  <li>Đăng ký</li>
                </router-link>
              </ul>
            </div>
          </div>
        </div>
        <div class="cart">
          <router-link to="/cart">
            <div class="cart__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.968"
                height="17.681"
                viewBox="0 0 20.968 17.681"
              >
                <path
                  id="Path_4"
                  data-name="Path 4"
                  d="M30.829,6.1a.808.808,0,0,0-.67-.355h0l-15.946.036L12.884,1.756a.81.81,0,0,0-.77-.556H10.809a.81.81,0,1,0,0,1.62h.719l1.32,4.007.013.036L14.885,13,12.369,17.69a.81.81,0,0,0,.715,1.192H27.324a.809.809,0,1,0,0-1.618H14.435l1.81-3.374h11.3a.806.806,0,0,0,.751-.509l2.61-6.524A.815.815,0,0,0,30.829,6.1ZM27,12.268H16.344l-1.6-4.87,14.218-.032Z"
                  transform="translate(-10 -1.2)"
                />
              </svg>
              <span class="amount__cart">5</span>
            </div>
          </router-link>
          <div
            class="cart__desc"
            hidden
          >
            <p>Giỏ hàng</p>
          </div>
        </div>
      </div>
    </div>
    <div class="strikethrough"></div>
    <div class="header__navbar container">
      <Dropdown
        title="Tất cả danh mục"
        :items="categories"
      />
      <div class="header__navbar--list">
        <ul>
          <li>
            <router-link
              class="router-link"
              to="/"
            >Trang chủ</router-link>
          </li>
          <li>
            <router-link
              class="router-link"
              to="/new-products"
            >Sản phẩm mới</router-link>
          </li>
          <li>
            <router-link
              class="router-link"
              to="/hot-products"
            >Sản phẩm hot</router-link>
          </li>
          <li>
            <router-link
              class="router-link"
              to="/sale-products"
            >Sản phẩm giảm giá</router-link>
          </li>
          <li>
            <router-link
              class="router-link"
              to="/news"
            >Tin tức</router-link>
          </li>
          <li>
            <router-link
              class="router-link"
              to="/about"
            >Giới thiệu</router-link>
          </li>
          <li>
            <router-link
              class="router-link"
              to="/contact"
            >Liên hệ</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BaseInput from "@/components/base/BaseInput.vue";
import Dropdown from "@/components/base/Dropdown.vue";
import { getListCate } from "@/service/category.service";

export default {
  name: "Header",
  components: {
    BaseInput,
    Dropdown,
  },
  data() {
    return {
      showUserOption: false,
      showAuthOption: false,
      searchValue: "",
      categories: [],
    };
  },
  created() {
    getListCate().then((response) => {
      this.categories = response.data.data.data;
      this.categories.reverse();
    });
  },
  computed: mapState({
    isAuthenticated: (state) => state.auth.isAuthenticated,
    user: (state) => state.auth.user,
  }),
  methods: {
    directSearch() {
      if (this.searchValue.trim().length > 0) {
        // this.$router.push({
        //   path: "/search",
        //   query: {
        //     key: this.searchValue,
        //   },
        // });
        window.location.href = `/search?key=${this.searchValue}`;
      }
    },
    logout() {
      this.$store.commit("logout");
      window.location.href = "/login";
    },
    login() {
      this.$store.commit("login");
    },
  },
};
</script>

<style lang="scss" scoped>
div.header::v-deep .base-input input {
  border: 1px solid red;
}
</style>
<style lang="scss" scoped>
.header {
  background-color: white;
  font-size: 14px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  border-bottom: 1px solid rgb(208, 208, 208);

  .header__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 15px 0;

    .logo {
      margin-right: 6%;
    }

    .search__form {
      width: 40%;
      position: relative;
      display: inline-flex;
      align-items: center;

      svg {
        position: absolute;
        right: 0;
        cursor: pointer;
      }
    }

    .header__option {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      margin-left: 25%;

      .user__information {
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;

        .user__information--greeting {
          margin-top: 5px;
          font-weight: bold;
        }
        .option {
          position: absolute;
          width: 150px;
          top: 45px;
          border: 1 solid rgb(0, 0, 0);
          background-color: rgb(255, 255, 255);
          ul {
            list-style: none;
            text-align: left;
            font-size: 14px;
            border: 1px solid rgb(220, 220, 220);
            li {
              padding: 10px 10px;
            }
            a {
              text-decoration: none;
              color: black;
              li {
                padding: 10px 10px;
              }
            }

            li:hover {
              background: rgb(196, 195, 195);
              cursor: pointer;
            }
          }
        }
      }

      .login_option {
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;

        i {
          cursor: pointer;
          font-size: 20px;
        }

        .option {
          position: absolute;
          width: 100px;
          top: 30px;
          border: 1 solid rgb(0, 0, 0);
          background-color: rgb(255, 255, 255);

          ul {
            list-style: none;
            text-align: left;
            font-size: 14px;
            border: 1px solid rgb(220, 220, 220);
            li {
              padding: 10px 10px;
            }
            a {
              text-decoration: none;
              color: black;
              li {
                padding: 10px 10px;
              }
            }

            li:hover {
              background: rgb(196, 195, 195);
              cursor: pointer;
            }
          }
        }
      }

      .login_option:hover {
        .login__desc {
          display: block;
        }
      }

      .cart {
        cursor: pointer;
        position: relative;

        .cart__icon {
          position: relative;

          .amount__cart {
            position: absolute;
            top: -20%;
            right: -10%;

            background-color: red;
            color: white;
            padding: 1px 4px;
            font-size: 12px;
            border-radius: 50%;
          }
        }

        .cart__desc {
          position: absolute;
          margin-top: 5px;
          width: 70px;
          border: 1px solid gray;
          padding: 0 5px;
          border-radius: 5px;
          text-align: center;
          padding: 4px 0;
        }
      }
      .cart:hover {
        .cart__desc {
          display: inline-block;
        }
      }
    }
  }
  .strikethrough {
    border-bottom: 1px solid rgb(236, 236, 236);
  }
  .header__navbar {
    margin-top: 15px;
    display: flex;
    align-items: center;
    padding-bottom: 10px;

    .header__navbar--categories {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 2px solid #efefef;
      border-radius: 5px;
      // width: 15%;
      padding: 10px 15px;
      cursor: pointer;

      p {
        margin: 0 10px;
        font-size: 14px;
      }
    }

    .header__navbar--list {
      margin-left: 5%;
      ul {
        display: flex;
        list-style-type: none;
        gap: 40px;

        .router-link {
          padding: 10px 10px;
          border-bottom: 3px solid transparent;
          text-decoration: none;
          color: black;
        }

        .router-link:hover {
          border-bottom: 3px solid #ff4f04;
          cursor: pointer;
          color: #ff4f04;
        }
      }
    }
  }
}
</style>

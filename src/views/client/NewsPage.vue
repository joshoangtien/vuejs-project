<template>
  <div class="newsPage">
    <h3 class="newsPage__title">TIN TỨC</h3>

    <section class="newsPage__content">
      <aside class="sidebar">
        <form @submit="handleSubmit" class="aside__input">
          <input
            type="text"
            placeholder="Tìm kiếm ..."
            v-model="keyword"
            maxlength="30"
          />

          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              />
            </svg>
          </button>
        </form>

        <div class="sidebar__posts">
          <span class="sidebar__posts--title">Bài viết mới nhất</span>
          <SidebarPostsList :posts="sidebarPosts" />
        </div>
      </aside>

      <div class="content__page">
        <section class="newsPage__main">
          <router-link
            v-for="post in listPosts"
            :key="post.id"
            class="newsPage__main--item"
            :to="{ path: '/post-detail/' + post.id }"
          >
            <div class="images">
              <img :src="post.image" alt="" />
            </div>

            <div class="item__text">
              <h4>{{ post.title }}</h4>

              <div class="line"></div>

              <p class="text">
                {{ post.content }}
              </p>
            </div>

            <div class="event">
              <span>{{ post.created_at | formatDate }}</span>
            </div>
          </router-link>
        </section>

        <BasePagination
          :page="page"
          @update:page="page = $event"
          :total="total"
        />
      </div>
    </section>
  </div>
</template>

<script>
import SidebarPostsList from "@/components/client/pages/sidebarPosts/SidebarPostsList.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import {
  getFiveNews,
  getAllNews,
  getNewsSearch,
} from "@/service/news.service.js";

export default {
  name: "NewsPage",
  components: {
    SidebarPostsList,
    BasePagination,
  },

  data() {
    return {
      keyword: "",
      sidebarPosts: [],
      listPosts: [],
      page: 1,
      total: 0,
    };
  },

  watch: {
    page(value) {
      this.getList(value);
      this.handleSubmit(value);
    },
  },

  created() {
    this.getList();
    getFiveNews().then((response) => {
      if (response.data.success === 0) {
        this.sidebarPosts = [];
      } else if (response.data.success === 1) {
        this.sidebarPosts = response.data.data.data;
      }
    });
  },

  methods: {
    /* paginate */
    updatePage(pageNumber) {
      this.page = pageNumber;
    },
    /* end of paginate */

    getList(page) {
      getAllNews(page)
        .then((response) => {
          this.listPosts = response.data.data.data;
          this.total = response.data.data.last_page;
        })
        .catch((error) => {
          this.listPosts = [];
          throw new Error(error);
        });
    },

    handleSubmit: function (e, page) {
      e.preventDefault();
      let keyword = this.keyword;
      getNewsSearch(page, keyword)
        .then((response) => {
          this.listPosts = response.data.data.data;
          this.total = response.data.data.last_page;
        })
        .catch((error) => {
          this.listPosts = [];
          throw new Error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.newsPage {
  margin: 0 auto;
  padding: 20px 100px;

  &__title {
    text-align: center;
    padding: 30px 0 50px;
    font-size: 24px;
  }

  .newsPage__content {
    width: 100%;
    display: flex;

    .sidebar {
      width: 25%;
      padding: 0 15px;

      .aside__input {
        width: 100%;
        position: relative;

        input {
          width: 80%;
          padding: 10px 10px;
          border: 1px solid #c3c3c3;
        }

        input:focus {
          outline: none;
        }

        button {
          position: absolute;
          right: 0;
          top: 0;
          padding: 9px 15px;
          border: none;
          background: rgb(196, 13, 13);
          color: white;

          svg {
            background: none;
          }
        }
      }

      .sidebar__products {
        margin-top: 45px;

        .sidebar__products--title {
          color: #111111;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 300;
          font-weight: bold;
          opacity: 0.8;
        }
      }

      .sidebar__posts {
        margin-top: 45px;

        .sidebar__posts--title {
          color: #111111;
          text-transform: uppercase;
          font-size: 16px;
          font-weight: 300;
          font-weight: bold;
          opacity: 0.8;
        }
      }
    }

    .newsPage__main {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 40px;
      padding: 0 0 0 30px;

      .newsPage__main--item {
        height: fit-content;
        border: 1px solid #c3c3c3;
        border-radius: 4px;
        box-shadow: 0px 0px 0px 0px #999999;
        width: 100%;
        position: relative;
        cursor: pointer;
        text-decoration: none;

        .images {
          width: 100%;
          height: 150px;

          img {
            width: 100%;
            height: 150px;
            background: violet;
          }
        }

        .item__text {
          color: #413f3f;
          padding: 20px;

          h4 {
            font-size: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            height: 45px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }

          .line {
            width: 40px;
            border-bottom: 1px solid #646363;
            margin: 10px 0;
          }

          p.text {
            font-size: 17px;
            color: #413f3f;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 3;
            height: 40px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
        }

        .event {
          width: 45px;
          height: 45px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: absolute;
          border-radius: 50px;
          left: -10px;
          top: 20px;
          background: rgb(180, 21, 21);
          color: rgb(252, 245, 245);

          span {
            width: 30px;
            text-align: center;
            background: none;
            font-size: 14px;
            font-weight: 500;
          }

          p {
            background: none;
            font-size: 12px;
            font-weight: 600;
          }
        }
      }
    }

    .content__page {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>

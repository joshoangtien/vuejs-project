<template>
  <div class="newsPage container">
    <section class="newsPage__content">
      <aside class="sidebar">
        <div class="sidebar__posts">
          <span class="sidebar__posts--title">Bài viết mới nhất</span>
          <SidebarPostsList :posts="sidebarPosts" />
        </div>
      </aside>

      <section class="newsPage__main">
        <h2 class="post__title">{{ this.postDetail.title }}</h2>
        <img :src="this.postDetail.image" alt="" />
        <p>
          {{ this.postDetail.content }}
        </p>
      </section>
    </section>
  </div>
</template>

<script>
import SidebarPostsList from "@/components/client/pages/sidebarPosts/SidebarPostsList.vue";
import { getFiveNews, getNewDetail } from "@/service/news.service.js";

export default {
  name: "PostDetailPage",
  components: {
    SidebarPostsList,
  },

  data() {
    return {
      keyword: "",
      sidebarPosts: [],
      listPosts: [],
      postDetail: {},
    };
  },

  created() {
    getFiveNews().then((response) => {
      if (response.data.success === 0) {
        this.sidebarPosts = [];
      } else if (response.data.success === 1) {
        this.sidebarPosts = response.data.data.data;
      }
    });

    getNewDetail(this.$route.params.id).then((response) => {
      if (response.data.success === 0) {
        this.postDetail = null;
      } else if (response.data.success === 1) {
        this.postDetail = response.data.data;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.newsPage {
  .newsPage__content {
    padding-top: 45px;
    width: 100%;
    display: flex;

    .sidebar {
      width: 25%;

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
      width: 75%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      flex-wrap: wrap;
      padding: 0 0 0 30px;

      img {
        max-width: 100%;
      }

      .post__title {
        width: 80%;
        text-align: center;
      }
    }
  }
}
</style>

<template>
  <router-link :to="`/post-detail/${post.id}`" class="post__item__component">
    <div class="post__item">
      <img class="post__item__img" :src="post.image" alt="" />
      <div class="post__item__infor">
        <p class="post__item__name">{{ post.title }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SidebarPostItem",
  props: {
    post: Object,
  },
};
</script>

<style lang="scss" scoped>
.post__item__component {
  text-decoration: none;
  color: rgb(51, 51, 51);

  .post__item {
    overflow: hidden;
    // display: grid;
    // grid-template-columns: 25% 70%;
    // gap: 5%;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed rgb(194, 194, 194);
    padding: 10px 0;
    cursor: pointer;

    .post__item__img {
      display: inline-block;
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
    .post__item__img img {
      width: auto;
      height: 100%;
      margin-left: -20px;
    }

    .post__item__infor {
      width: 100%;

      p {
        margin-left: 10px;
        color: #413f3f;
        font-size: 14px;
        width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 20px;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>

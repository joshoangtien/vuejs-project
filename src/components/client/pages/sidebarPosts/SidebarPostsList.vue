<template>
  <div class="list__posts">
    <div v-for="post in posts" :key="post.id" class="list__posts__item">
      <SidebarPostItem :post="post" />
    </div>
  </div>
</template>

<script>
import SidebarPostItem from "./SidebarPostItem.vue";
export default {
  name: "SidebarPostsList",
  props: {
    posts: Array,
  },
  components: {
    SidebarPostItem,
  },
};
</script>

<style lang="scss" scoped>
.list__posts {
  border: 2px solid rgb(194, 194, 194);
  padding: 0 15px;
  margin-top: 20px;

  &__item {
    text-decoration: none;
  }
}
</style>

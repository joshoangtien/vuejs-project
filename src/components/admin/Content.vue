<template>
  <div class="admin_content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style lang="scss" scoped>
.admin_content {
  border-radius: 5px;
  background-color: rgb(243, 244, 246);
  padding: 20px;
  border: 1px solid rgb(206, 204, 204);
  filter: drop-shadow(0 15px 15px rgba(97, 97, 97, 0.493));
}
</style>

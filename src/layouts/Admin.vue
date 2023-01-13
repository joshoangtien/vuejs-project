<template>
  <div class="admin">
    <Sidebar />

    <div class="admin_body">
      <Header />

      <Content />
    </div>
  </div>

  <!---<router-view />--->
</template>

<script>
import Header from "@/components/admin/Header.vue";
import Sidebar from "@/components/admin/Sidebar.vue";
import Content from "@/components/admin/Content.vue";

export default {
  name: "AdminLayout",
  components: {
    Header,
    Sidebar,
    Content,
  },
};
</script>

<style lang="scss" scoped>
.admin {
  min-height: 100vh;
  display: flex;
}

.admin_body {
  width: 100%;
  background-color: rgb(229, 231, 235);
  flex-grow: 1;
  padding: 40px 35px;
}
</style>

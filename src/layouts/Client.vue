<template>
  <div class="ClientLayout">
    <Header />
    <div class="content">
      <router-view :key="this.$route.path" />
    </div>
    <Slogan />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/client/Header.vue";
import Footer from "@/components/client/Footer.vue";
import Slogan from "@/components/client/Slogan.vue";

export default {
  name: "ClientLayout",
  components: {
    Header,
    Footer,
    Slogan,
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
.ClientLayout {
  background-color: white;
  .content {
    margin-top: 167px;
  }
}
</style>

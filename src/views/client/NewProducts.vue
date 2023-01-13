<template>
  <div class="main__content">
    <div class="breadcrumb">
      <span class="breadcrumb--link__previous">Trang chủ / </span>
      <span class="breadcrumb--link__current">Giày nike</span>
    </div>
    <div class="content">
      <aside>1</aside>
      <div cclass="products__list">
        <ProductsList />
      </div>
    </div>
  </div>
</template>

<script>
import ProductsList from "@/components/client/ProductsList.vue";
export default {
  name: "NewProducts",
  components: {
    ProductsList,
  },
};
</script>

<style lang="scss" scoped>
.main__content {
  width: 95%;
  margin: 0 auto;

  .breadcrumb {
    padding: 40px 0 20px 0;
    letter-spacing: -1.2px;
    color: #111111;
    text-transform: uppercase;
    font-size: 25px;
    font-weight: 300;
    font-weight: bold;

    .previous__page {
      opacity: 0.45;
    }
  }

  .content {
    display: grid;
    grid-template-columns: 25% 73%;
    gap: 2%;

    .products__list {
      .list__products {
        justify-content: flex-start;
        gap: 20px;
      }
    }
  }
}
</style>

<template>
  <div v-if="total > 0" class="pagination-wrapper">
    <button
      class="pagination-btn"
      @click.prevent="localPage -= 1"
      :disabled="page <= 1"
    >
      &lt;
    </button>
    Trang {{ localPage }} / {{ total }}
    <button
      class="pagination-btn"
      @click.prevent="localPage += 1"
      :disabled="localPage >= total"
    >
      &gt;
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["page", "total"],
  data() {
    return {
      localPage: this.page,
    };
  },
  watch: {
    localPage(value) {
      this.$emit("update:page", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  font-size: 18px;
  font-weight: bold;
  button {
    margin: 0 8px;
    width: 32px;
    height: 38px;
    font-size: 24px;
  }

  .pagination-btn {
    cursor: pointer;
  }
}
</style>

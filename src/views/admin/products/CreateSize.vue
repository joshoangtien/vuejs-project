<template>
  <div>
    <div class="content_head">
      <h2>Thêm mới size</h2>
    </div>

    <form @submit="handleSubmit" class="form_add_size">
      <BaseInput
        type="number"
        v-model="size"
        :isError="sizeErrorMessage != ''"
        :messageError="sizeErrorMessage"
        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
        maxlength="2"
      />

      <BaseButton type="submit" text="Thêm mới" class="button-add" />
    </form>

    <BaseTable
      v-bind="{ columns, rows, hasDeleteRow, hasUpdateRow, hasDetailRow }"
    ></BaseTable>
  </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseButton from "@/components/base/BaseButton.vue";
export default {
  name: "CreateSizePage",
  components: {
    BaseTable,
    BaseInput,
    BaseButton,
  },
  computed: {
    sizeErrorMessage() {
      if (!this.size) return "Yêu cầu nhập đầy số size";
      return "";
    },
  },
  data() {
    return {
      size: "",
      hasDeleteRow: true,
      hasUpdateRow: false,
      hasDetailRow: false,
      columns: [
        {
          name: "sizeName",
          align: "center",
          width: "250px",
          label: "Số size",
          type: "text",
        },
      ],
      rows: [
        {
          sizeId: "1",
          sizeName: "36",
        },
        {
          sizeId: "2",
          sizeName: "37",
        },
      ],
    };
  },
  methods: {
    handleSubmit: function (e) {
      e.preventDefault();
      this.$children.forEach((ele) => (ele.focus = false));
    },
  },
};
</script>

<style lang="scss">
.content_head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.form_add_size {
  display: flex;
  gap: 50px;
  align-items: flex-end;
  margin-bottom: 10px;
}
</style>

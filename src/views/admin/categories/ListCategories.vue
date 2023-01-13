<template>
  <div class="list-categories">
    <div class="content_head">
      <h2>Danh sách danh mục sản phẩm</h2>
    </div>

    <BaseTable
      v-bind="{ columns, rows, hasDeleteRow, hasUpdateRow, hasDetailRow }"
    ></BaseTable>
  </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import { getListCate } from "@/service/category.service.js";

export default {
  name: "ListCategoriesPage",
  components: { BaseTable },
  data() {
    return {
      hasDeleteRow: true,
      hasUpdateRow: true,
      hasDetailRow: false,
      columns: [
        {
          name: "name",
          align: "center",
          width: "300px",
          label: "Tên danh mục",
          type: "text",
        },
        {
          name: "image",
          align: "center",
          width: "300px",
          label: "Icon danh mục",
          type: "image",
        },
      ],
      rows: [],
    };
  },

  created() {
    getListCate()
      .then((response) => {
        this.rows = response.data.data.data.reverse();
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
};
</script>

<style lang="scss" scoped>
div.list-categories {
  table {
    thead {
      th:first-child {
        width: 1%;
      }
    }
  }
}

.content_head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &_button {
    display: flex;
    align-items: center;
    gap: 10px;

    a {
      text-decoration: none;
    }

    .button_add_category {
      background-color: rgb(59, 130, 246);
      color: white;
      font-weight: 600;
      font-size: 11pt;
      padding: 8px 6px;
      border-radius: 5px;
      border: none;
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;

      svg {
        width: 25px;
        height: 25px;
      }

      p {
        text-decoration: none;
      }
    }

    .button_add_product:hover {
      background-color: rgb(37, 99, 235);
      cursor: pointer;
    }

    .button_add_size {
      background-color: rgb(59, 130, 246);
      color: white;
      font-weight: 600;
      font-size: 11pt;
      padding: 8px 6px;
      border-radius: 5px;
      border: none;
      display: flex;
      gap: 5px;
      align-items: center;
      justify-content: center;

      svg {
        width: 25px;
        height: 25px;
      }
    }

    .button_add_size:hover {
      background-color: rgb(37, 99, 235);
      cursor: pointer;
    }
  }
}
</style>

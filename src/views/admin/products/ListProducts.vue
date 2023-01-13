<template>
  <div class="list-products">
    <div class="content_head">
      <h2>Danh sách sản phẩm</h2>
      <div class="content_head_button">
        <router-link to="/admin/create-product">
          <button class="button_add_product">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p>Thêm sản phẩm</p>
          </button>
        </router-link>
        <router-link to="/admin/create-size">
          <button class="button_add_size">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <p>Thêm size</p>
          </button>
        </router-link>
      </div>
    </div>

    <BaseTable
      v-bind="{ columns, rows, hasDeleteRow, hasUpdateRow, hasDetailRow }"
    >
      <template #buttonDetail>
        <button class="button_detail" v-if="hasDetailRow">
          <p>Chi tiết</p>
        </button>
      </template>
    </BaseTable>

    <BasePagination :page="page" @update:page="page = $event" :total="total" />
  </div>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import { getAllProducts } from "@/service/product.service.js";
export default {
  name: "ListProductsPage",
  components: { BaseTable, BasePagination },
  data() {
    return {
      hasDeleteRow: true,
      hasUpdateRow: true,
      hasDetailRow: false,
      page: 1,
      total: 0,
      columns: [
        {
          name: "shoe_code",
          align: "center",
          width: "100px",
          label: "Mã SP",
          type: "text",
        },
        {
          name: "name",
          align: "center",
          width: "250px",
          label: "Tên SP",
          type: "text",
        },
        {
          name: "suitable_gender",
          align: "center",
          width: "150px",
          label: "Giới tính",
          type: "text",
        },
        {
          name: "image",
          align: "center",
          width: "30px",
          label: "Ảnh",
          type: "image",
        },
        {
          name: "price",
          align: "center",
          width: "120px",
          label: "Giá(VNĐ)",
          type: "html",
        },
      ],
      rows: [],
    };
  },

  watch: {
    page(value) {
      this.getList(value);
    },
  },

  created() {
    this.getList();
  },

  methods: {
    /* paginate */
    updatePage(pageNumber) {
      this.page = pageNumber;
    },
    /* end of paginate */

    getList(page) {
      getAllProducts(page)
        .then((response) => {
          this.rows = response.data.data.data;
          this.rows.map((item) => {
            if (item.suitable_gender == 0) {
              item.suitable_gender = "Nam";
            } else if (item.suitable_gender == 1) {
              item.suitable_gender = "Nữ";
            } else if (item.suitable_gender == 2) {
              item.suitable_gender = "Nam, Nữ";
            }
          });
          this.total = response.data.data.last_page;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
div.list-products {
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

    .button_add_product {
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

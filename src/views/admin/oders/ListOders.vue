<template>
  <form action="">
    <div class="order-list">
      <div>
        <h2>Danh sách đơn hàng</h2>
      </div>
      <div class="order-list__search">
        <input
          type="text"
          v-model="keySearch"
          name="productName"
          placeholder="Nhập số điện thoại"
        />
        <button>Tìm</button>
      </div>
    </div>

    <BaseTable
      v-bind="{ columns, rows, hasDeleteRow, hasUpdateRow, hasDetailRow }"
    ></BaseTable>

    <BasePagination :page="page" @update:page="page = $event" :total="total" />
  </form>
</template>

<script>
import BaseTable from "@/components/base/BaseTable.vue";
import BasePagination from "@/components/base/BasePagination.vue";
import { getListOrder } from "@/service/order.service.js";

export default {
  name: "ListOders",
  components: { BaseTable, BasePagination },
  data() {
    return {
      keySearch: "",
      hasDeleteRow: false,
      hasUpdateRow: false,
      hasDetailRow: true,
      page: 1,
      total: 0,
      columns: [
        {
          name: "first_name",
          align: "center",
          width: "300px",
          label: "Tên khách hàng",
          type: "text",
        },
        {
          name: "email",
          align: "center",
          width: "300px",
          label: "Email",
          type: "text",
        },
        {
          name: "phone",
          align: "center",
          width: "300px",
          label: "Số điện thoại",
          type: "number",
        },
        {
          name: "payment",
          align: "center",
          width: "300px",
          label: "Tổng giá(VNĐ)",
          type: "html",
        },
        {
          name: "status",
          align: "center",
          width: "300px",
          label: "Trạng thái",
          type: "text",
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
    getList(page) {
      getListOrder(page)
        .then((response) => {
          this.rows = response.data.data.data;
          this.rows.map((item) => {
            if (item.status == 1) {
              item.status = "Đang xử lý";
            } else if (item.status == 2) {
              item.status = "Đã xử lý";
            } else if (item.status == 3) {
              item.status = "Đang giao hàng";
            } else if (item.status == 4) {
              item.status = "Đã giao hàng";
            } else if (item.status == 5) {
              item.status = "Hoàn trả";
            }
          });
          this.total = response.data.data.last_page;
        })
        .catch((error) => {
          throw new Error(error);
        });
    },

    handleSearchProduct() {
      if (this.keySearch === "") {
        this.listItem = this.originalData.slice();
        this.updateListItem();
      } else {
        this.listItem = this.originalData.filter((product) =>
          product.name
            .toLowerCase()
            .includes(this.keySearch.trim().toLowerCase())
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.order-list {
  h2 {
    float: left;
  }
  a {
    text-decoration: none;
    margin: 8px;
  }

  &__search {
    float: right;
    margin-bottom: 18px;
    input {
      width: 200px;
      height: 36px;
      border: 1px solid #ccc;
      border-radius: 4px;
      padding: 0 8px;
      margin-right: 8px;
    }
    button {
      width: 100px;
      font-weight: 600;
      letter-spacing: 1px;
      height: 36px;
      border: 1px solid #c30005;
      font-size: 18px;
      border-radius: 4px;
      background-color: #c30005;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: red;
        color: #fff;
      }
    }
  }
}
// .pagination {
//   text-align: center;
// }

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th:hover {
  cursor: pointer;
  background: rgb(229, 255, 211);
}

tr:nth-child(even) {
  background-color: #f3f3f3;
}
</style>

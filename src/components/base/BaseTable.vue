<template>
  <div class="content_table">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th
            v-for="column in columns"
            :key="column.name"
            v-bind:style="{ width: column.width, textAlign: column.align }"
          >
            {{ column.label }}
          </th>
          <th v-if="hasDeleteRow || hasUpdateRow || hasDetailRow">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, index) in rows"
          :key="row.index"
        >
          <td class="table_numerical_order">{{ index + 1 }}</td>

          <td
            v-for="column in columns"
            :key="column.name"
          >
            <img
              width="150px"
              height="150px"
              :src="row.image"
              alt="Image Product"
              v-if="column.type === 'image'"
            />

            <div
              v-else-if="column.type === 'html'"
              class="table_row_flex_col"
            >
              <p>
                {{ row[column.name] | formatPrice }}
              </p>
            </div>

            <template v-else>{{ row[column.name] }}</template>
          </td>

          <td
            class="table_operation"
            v-if="hasDeleteRow || hasUpdateRow || hasDetailRow"
          >
            <div class="table_operation_collumn">

              <router-link
                to="/product-detail"
                target="_blank"
                class="btn_operation"
              >
                <button
                  class="button_detail"
                  v-if="hasDetailRow"
                >
                  <slot name="buttonDetail"></slot>
                  <p>Chi tiết</p>
                </button>
              </router-link>

              <button
                class="button_edit"
                v-if="hasUpdateRow"
              >
                <slot name="buttonEdit"></slot>
                <p>Chỉnh sửa</p>
              </button>

              <button
                class="button_remove"
                v-if="hasDeleteRow"
              >
                <slot name="buttonRemove"></slot>
                <p>Xóa</p>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BaseTable",
  props: {
    rows: Array,
    columns: Array,
    hasDeleteRow: Boolean,
    hasUpdateRow: Boolean,
    hasDetailRow: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.content_table {
  min-width: 100%;
  overflow: hidden;

  .table {
    min-width: 100%;
    filter: drop-shadow(0 3px 3px rgba(97, 97, 97, 0.493));
    border-radius: 5px;
    background-color: white;
    margin-top: 30px;
    text-align: center;

    thead {
      color: white;
      background-color: rgb(55, 65, 81);
      font-size: 17px;
      line-height: 50px;
    }

    tbody {
      tr {
        word-break: normal;
        background-color: rgb(229, 231, 235);

        td {
          padding: 4px;
        }

        .table_numerical_order {
          width: 30px;
        }

        .table_row_flex_col {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }

        .table_operation {
          width: 130px;

          .table_operation_collumn {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;

            .btn_operation {
              text-decoration: none;
            }

            button {
              width: 100px;
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
            }

            .button_detail {
              background-color: rgb(249, 115, 22);
            }

            .button_edit {
              background-color: rgb(22, 163, 74);
            }

            .button_remove {
              background-color: rgb(223, 21, 65);
            }

            .button_detail:hover {
              background-color: rgb(248, 105, 2);
              cursor: pointer;
            }

            .button_edit:hover {
              background-color: rgb(0, 155, 57);
              cursor: pointer;
            }

            .button_remove:hover {
              background-color: rgb(204, 2, 46);
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>

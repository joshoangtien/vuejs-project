<template>
  <div class="admin_sidebar">
    <router-link to="/">
      <img src="@/assets/images/logo.png" alt="logo_website" />
    </router-link>

    <div class="menu">
      <ul>
        <li>
          <router-link to="/admin" class="menu_item">
            <svg
              class="menu_item_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
              />
            </svg>
            <p>Dashboard</p>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/list-products" class="menu_item">
            <svg
              class="menu_item_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
              />
            </svg>
            <p>Sản phẩm</p>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/list-categories" class="menu_item">
            <svg
              class="menu_item_icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
              />
            </svg>
            <p>Danh mục</p>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/list-posts" class="menu_item">
            <svg
              class="menu_item_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <p>Bài viết</p>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/list-oders" class="menu_item">
            <svg
              class="menu_item_icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <p>Đơn hàng</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
.admin_sidebar {
  text-align: center;
  width: 15%;
  padding: 40px 20px;
  background-color: white;
  border-right: 2px solid rgb(206, 204, 204);

  .menu {
    margin-top: 50px;

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 20px;

      li {
        border: 1px solid #6b7280;
        border-radius: 5px;

        &:hover {
          background-color: rgb(229, 231, 235);
          filter: drop-shadow(0 3px 3px rgba(145, 145, 145, 0.39));
        }
      }

      .menu_item {
        padding: 5px 20px;
        display: flex;
        justify-items: center;
        gap: 5px;
        color: rgb(75, 85, 99);
        text-decoration: none;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;

        .menu_item_icon {
          width: 30px;
          height: 30px;
          margin-right: 5px;
        }

        p {
          font-size: 17pt;
          font-weight: 600;
          line-height: 30px;
        }

        &:hover {
          color: rgb(31, 41, 55);
        }
      }
    }
  }
}
</style>

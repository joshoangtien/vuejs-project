<template>
  <div class="admin_header">
    <div class="welcome">
      <h4 class="">Xin chào AnhDD,</h4>
      <h1 class="text-4xl font-bold text-indigo-900">
        Chào mừng đến với Tuấn Ka Admin!
      </h1>
    </div>

    <button @click="logout" class="logout">
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
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <p>Đăng xuất</p>
    </button>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      this.$store.commit("logout");
      window.location.href = "/login";
    },
  },
};
</script>

<style lang="scss" scoped>
.admin_header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 55px;

  .welcome {
    color: rgb(31, 41, 55);
  }

  .logout {
    display: flex;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: rgb(95, 94, 94);
    outline: none;
    cursor: pointer;
    // border: 0;
    border-radius: 5px;
    background-color: transparent;
    padding: 0 5px;

    svg {
      width: 25px;
      height: 25px;
    }

    p {
      width: 67px;
    }
  }

  .logout:hover {
    color: rgb(31, 41, 55);
    background-color: rgb(255, 255, 255);
  }

  .logout:hover > svg {
    color: rgb(247, 48, 48);
  }
}
</style>

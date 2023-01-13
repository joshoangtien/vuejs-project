<template>
  <div
    class="menu-item"
    @click="isOpen = !isOpen"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
      viewBox="0 0 18 12"
    >
      <path
        id="path"
        d="M557.4,875h18v2h-18Zm0,7v-2h18v2Zm0,5v-2h18v2Z"
        transform="translate(-557.4 -875)"
      />
    </svg>
    <span>{{ title }}</span>
    <i class="fas fa-caret-down"></i>
    <transition name="sub-menu">
      <div
        class="sub-menu"
        v-if="isOpen"
      >
        <div
          v-for="(item, i) in items"
          :key="i"
        >
          <router-link
            :to="`/categories/${item.id}`"
            class="list-item"
          >
            <img
              class="logo"
              :src="item.image"
              alt=""
            />
            <p class="link--text">{{ item.name }}</p>
          </router-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  width: 176px;
  background-color: #f8f8f8;
  border: 1px solid #d5cbcb;
  border-radius: 3px;
  padding: 12px 11px;
  position: relative;
  display: flex;
  gap: 22px;
  transition: 0.4s;
  cursor: pointer;
}

.sub-menu {
  position: absolute;
  background-color: #222;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: max-content;
  border-radius: 0px 0px 16px 16px;
}

.sub-menu-enter-active {
  transition: all 0.8s ease;
}
.sub-menu-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.sub-menu-enter,
.sub-menu-leave-to {
  transform: translate(50px, 20px);
  opacity: 0;
}

.list-item {
  overflow: hidden;
  align-items: center;
  display: flex;
  gap: 10px;
  grid-template-columns: 30% 70%;
  height: 40px;
  width: 198px;
  background-color: #f3f3f3;
  border: 1px solid #efefef;
  color: #000;
  font-size: 14px;
  font-family: "Roboto";
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  text-decoration: none;

  img {
    height: 40px;
    width: 60px;
    overflow: hidden;
  }

  p {
    padding-top: 10px;
    height: 34px;
    font-size: 17px;
    font-family: "Poppins", sans-serif;
    color: black;
    text-decoration: none;
  }
}

.list-item:hover {
  background-color: #aaaaaa;
  border: 1px solid rgb(220, 220, 220);

  p {
    color: white;
  }
}
</style>

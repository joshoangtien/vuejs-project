<template>
  <button class="normal" :class="typeButton" v-bind="$attrs">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    typeButton: String,
  },
};
</script>

<style scoped>
.normal {
  height: 51px;
  width: 116px;
  background-color: red;
  padding: 12px 16px;
  border: none;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
}
.red {
  background-color: #c30005;
  color: #fff;
}
.red:hover {
  background-color: #ff4949;
}
.orange {
  background-color: #d26e4b;
  color: #fff;
}
.orange:hover {
  background-color: #eb764c;
}
.gray {
  background-color: #f9f9f9;
  color: #ccc;
}
:disabled {
  cursor: not-allowed;
}
.outline {
  height: 54px;
  width: 222px;
  padding: 16px 0px 18px;
  border: 1px solid #707070;
  border-radius: 3px;
  background-color: transparent;
  color: #302f2f;
  font-size: 16px;
  font-weight: bold;
}
.outline:hover {
  background-color: #707070;
  color: #fff;
}

.outline-white {
  border: 1px solid #fff;
  color: #fff;
}
.outline-white:hover {
  background-color: #fff;
  border: 1px solid #fff;
  color: #000;
  opacity: 0.9;
}
.outline-red {
  border: 1px solid #ff4949;
  color: #ff4949;
}
.outline-red:hover {
  background-color: #ff4949;
  color: #fff;
}

.button-add {
  height: 40px;
  background-color: rgb(5, 150, 105);
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
  text-decoration: none;
}

.button-add:hover {
  background-color: rgb(4, 120, 87);
}

.sm {
  border-radius: inherit;
  height: 28px;
  padding: 8px;
  font-size: 0.6em;
}
.md {
  border-radius: inherit;
  height: 38px;
  padding: 12px 18px;
  font-size: 0.8em;
}
.lg {
  border-radius: inherit;
  height: 40px;
  width: 478px;
  padding: 10px 0px;
  font-size: 16px;
}
</style>

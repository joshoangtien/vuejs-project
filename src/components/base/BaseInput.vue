<template>
  <div class="base-input">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      v-bind="$attrs"
      :class="{ 'is-error': isError && !focus }"
      @blur="focus = false"
      @input="$emit('input', $event.target.value)"
    />
    <span v-if="isError && !focus">{{ messageError }}</span>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    label: String,
    isError: Boolean,
    messageError: String,
  },
  data() {
    return {
      focus: true,
    };
  },
  computed: {
    hasError() {
      return this.isError && !this.focus;
    },
  },
};
</script>
<style lang="scss" scoped>
.base-input {
  width: 100%;
  position: relative;

  input {
    width: 100%;
    display: flex;
    padding: 10px 10px;

    &.is-error {
      border: 1px solid red;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    margin: 0;
  }

  label {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  span {
    position: absolute;
    bottom: -20px;
    color: red;
  }
}
</style>

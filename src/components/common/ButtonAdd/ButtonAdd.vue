<template>
  <div class="button-add">
    <span v-if="plus" class="boss-plus">+</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "button-add",
  props: {
    plus: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
@import './ButtonAdd.sass';
</style>

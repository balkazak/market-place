<template>
  <div class="page-content">
    <h3 class="title">Рекомендуем к покупке</h3>
    <main>
      <ShoppingCard v-for="item in 10"/>
    </main>
  </div>
</template>

<script>

import ShoppingCard from "@/components/common/ShoppingCard/ShoppingCard.vue";

export default {
  components: {ShoppingCard},
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
<style scoped>
@import './index.sass';
</style>

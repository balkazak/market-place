<template>
  <div class="rate">
    <template v-for="i of 5">
      <icon_rate_star v-if="i <= rate" />
      <icon_rate_star_empty v-else />
    </template>
  </div>
</template>

<script>
import icon_rate_star from "@/components/icons/IconStar.vue";
import icon_rate_star_empty from "@/components/icons/IconStarEmpty.vue";

export default {
  name: "button-add",
  props: ["rate"],
  components: {
    icon_rate_star,
    icon_rate_star_empty
  }
};
</script>

<style scoped>
@import './BarRating.sass';
</style>


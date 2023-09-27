<template>
  <div class="shop-card">
    <div class="like">
      <IconLike/>
    </div>
    <div class="image" :style="{ backgroundImage: 'url(' + cardImg + ')' }">

    </div>
    <div class="body">
      <div class="title">
        Худи SAMURAI
      </div>
      <div class="desc">
        Толстовка анархия, осенний крутой пуловер, толстовка с капюшоном
      </div>
      <div class="bar">
        <BarRating :rate="4"/>
      </div>
      <div class="price">
        1200 - 1600 ₸ <span>Мин.: 1 шт.</span>
      </div>
      <button class="btn btn-card">
        В корзину
      </button>
    </div>
  </div>
</template>

<script >
import IconSettings from "@/components/icons/IconSettings.vue";
import BarRating from "@/components/common/BarRating/BarRating.vue";


import itemImg from '@/assets/images/card-img.png'
import IconLike from "@/components/icons/IconLikeWhite.vue";

export default {
  components: {
    IconLike,
    IconSettings,
    itemImg,
    BarRating
  },
  data() {
    return {
      cardImg: itemImg
    };
  },
}
</script>


<style scoped>
@import './ShoppingCard.sass';
</style>

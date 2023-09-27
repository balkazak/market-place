<template>
  <div class="_container">
    <div class="profile-header">
      <div class="item">
        <IconNotes />
        <div>
          Запрос цены на товар
          <p>Создайте запрос на интересующий товар и продавцы вам ответят</p>
        </div>
      </div>
      <div class="item">
        <IconBuildings />
        <div>
          Производители
          <p>Изучите список производителей на сайте и их ассортимент товара</p>
        </div>
      </div>
      <div class="item">
        <IconDeliveryOrange />
        <div>
          Компании доставки
          <p>Не подошла наша служба доставки? Гляньте список наших партнеров</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import IconSettings from "@/components/icons/IconSettings.vue";
import BarRating from "@/components/common/BarRating/BarRating.vue";


import itemImg from '@/assets/images/card-img.png'
import IconLike from "@/components/icons/IconLikeWhite.vue";
import note from "@/components/icons/IconNotes.vue";
import IconNotes from "@/components/icons/IconNotes.vue";
import IconBuildings from "@/components/icons/IconBuildings.vue";
import IconDeliveryOrange from "@/components/icons/IconDeliveryOrange.vue";

export default {
  components: {
    IconDeliveryOrange,
    IconBuildings,
    IconNotes,
    IconLike,
    IconSettings,
    itemImg,
    BarRating
  },
  data() {
    return {
      cardImg: itemImg,
    };
  },
}
</script>

<style scoped>
  @import './ProfileHeader.sass';
</style>

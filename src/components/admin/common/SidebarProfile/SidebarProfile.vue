<template>
  <div class="sidebar">
    <div class="card card-top">
      <div class="avatar" :style="{ backgroundImage: 'url(' + profileImgUrl + ')' }">

      </div>
      <div class="title">asdasdasd</div>
    </div>
    <div class="card card-bottom">
      <div class="title">Основные</div>
      <div class="sidebar-nav">
        <router-link v-for="router of routers" :to="router.router_link" class="link">
          <component :is="router.router_icon" class="icon" />
          <span class="router-name">
          {{ router.router_name }}
        </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script >
import IconSettings from "@/components/icons/IconSettings.vue";

import IconOrders from '@/components/icons/IconOrders.vue'
import IconCredit from '@/components/icons/IconCredit.vue'
import IconReviews from "@/components/icons/IconReviews.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconDelivery from "@/components/icons/IconDelivery.vue";
import IconContact from "@/components/icons/IconContact.vue";
import IconNotification from "@/components/icons/IconNotification.vue";
import IconSupport from "@/components/icons/IconSupport.vue";
import IconBuilding from "@/components/icons/IconBuilding.vue";

import profileImg from '@/assets/images/profile-ava.png'

export default {
  components: {
    IconSettings,
    IconOrders,
    IconCredit,
    IconReviews,
    IconLike,
    IconChat,
    IconDelivery,
    IconContact,
    IconNotification,
    IconSupport,
    IconBuilding
  },
  data() {
    return {
      routers: [
        {
          router_name: "Поля и формы",
          router_link: "/admin/forms",
          router_icon: "IconOrders"
        },
        {
          router_name: "Категории",
          router_link: "/admin/category",
          router_icon: "IconCredit"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconReviews"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconLike"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconChat"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconDelivery"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconContact"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconNotification"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconSupport"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconBuilding"
        }
      ],
      profileImgUrl: profileImg
    };
  },
}
</script>


<style scoped>
  @import './SidebarProfile.sass';
</style>

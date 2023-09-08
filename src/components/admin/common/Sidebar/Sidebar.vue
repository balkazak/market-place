<script >
import IconAdminForms from '@/components/icons/IconAdminForms.vue'
import IconAdminCategory from '@/components/icons/IconAdminCategory.vue'
import IconSettings from "@/components/icons/IconSettings.vue";
import IconCompanies from "@/components/icons/IconCompanies.vue";
export default {
  components: {
    IconSettings,
    IconAdminForms,
    IconAdminCategory,
    IconCompanies
  },
  data() {
    return {
      routers: [
        {
          router_name: "Поля и формы",
          router_link: "/admin/forms",
          router_icon: "IconAdminForms"
        },
        {
          router_name: "Категории",
          router_link: "/admin/category",
          router_icon: "IconAdminCategory"
        },
        {
          router_name: "Компании",
          router_link: "/admin/companies",
          router_icon: "IconCompanies"
        }
      ]
    };
  },
}
</script>

<template>
  <div class="sidebar">
    <h2 class="sidebar-header">Админ панель:</h2>
    <div class="sidebar-nav">
      <router-link v-for="router of routers" :to="router.router_link" class="link">
        <component :is="router.router_icon" class="icon" />
        <span class="router-name">
          {{ router.router_name }}
        </span>
      </router-link>
    </div>
    <div class="sidebar-footer">
      <IconSettings/>
      <span>Настройки</span>
    </div>
  </div>
</template>


<style scoped>
  @import 'Sidebar.sass';
</style>

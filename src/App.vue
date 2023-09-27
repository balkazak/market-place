<template>
  <AdminHeader v-if="adminHeader"/>
  <Header v-else/>
  <ProfileHeader v-if="profileSidebar"/>
  <div class="d-flex content">
    <AdminSideBarProfile v-if="profileSidebar" />
    <AdminSideBar v-else />
    <RouterView />
  </div>
  <Swiper />
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from "@/components/common/Header/Header.vue";
import AdminHeader from "@/components/admin/common/Header/Header.vue";
import AdminSideBar from "@/components/admin/common/Sidebar/Sidebar.vue";
import AdminSideBarProfile from "@/components/admin/common/SidebarProfile/SidebarProfile.vue";
import Footer from "@/components/common/Footer/Footer.vue";
import ProfileHeader from "@/components/admin/common/ProfileHeader/ProfileHeader.vue";
import Swiper from "@/components/common/Swiper/Swiper.vue";
export default {
  components: {
    Swiper,
    ProfileHeader,
    RouterView,
    Header,
    AdminHeader,
    AdminSideBar,
    AdminSideBarProfile,
    Footer
  },
  computed: {
    adminHeader() {
      return this.$route.path.includes('admin');
    },
    profileSidebar() {
      return this.$route.path.includes('profile');
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <AdminHeader v-if="adminHeader"/>
  <Header v-else/>
  <div class="d-flex content">
    <AdminSideBar />
    <RouterView />
  </div>
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router'
import Header from "@/components/common/Header/Header.vue";
import AdminHeader from "@/components/admin/common/Header/Header.vue";
import AdminSideBar from "@/components/admin/common/Sidebar/Sidebar.vue";
import Footer from "@/components/common/Footer/Footer.vue";
export default {
  components: {
    RouterView,
    Header,
    AdminHeader,
    AdminSideBar,
    Footer
  },
  computed: {
    adminHeader() {
      return this.$route.path.includes('admin');
    }
  }
}
</script>

<style scoped>

</style>

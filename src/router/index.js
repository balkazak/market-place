import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Header from '../components/common/Header/Header.vue'
import AdminHomeView from "@/views/Admin/Forms/FieldsFormsView.vue";
import AdminCategoryView from "@/views/Admin/Category/CategoryListView.vue";
import AdminCompanies from "@/views/Admin/Companies/Companies.vue";
import AddNewItem from "@/views/AdminSeller/AddNewItem/AddNewItem.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/category',
      name: 'admin',
      component: () => import('../views/Admin/Category/CategoryListView.vue')
    },
    {
      path: '/admin/forms',
      name: 'forms',
      component: AdminHomeView
    },
    {
      path: '/admin/companies',
      name: 'companies',
      component: AdminCompanies
    },
    {
      path: '/admin/seller/additem',
      name: 'additem',
      component: AddNewItem
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

  ]
})

export default router
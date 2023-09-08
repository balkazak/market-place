<script setup>

import IconHamburger from "@/components/icons/IconHamburger.vue";

</script>

<template>
  <header>
    <div class="_container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="header-left">
          <div class="logo">
            <img src="@/assets/logo-admin.svg" alt="logo" class="img-fluid">
            <span>TRADE</span>WAY
          </div>
          <div class="tab">
            <IconHamburger />
            <span>Меню</span>
          </div>
        </div>
        <div class="header-right">
          <div class="dropdown">
            <!-- Trigger button -->
            <button data-bs-toggle="dropdown" class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="@/assets/images/avatar.png" alt="Avatar" class="mr-2" style="width: 32px; height: 32px; border-radius: 50%;"> <span>Admin</span>
            </button>

            <!-- Dropdown menu -->
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Settings</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
  @import './Header.sass';
</style>

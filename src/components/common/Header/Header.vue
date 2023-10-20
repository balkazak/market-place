<script setup>

import IconHamburger from "@/components/icons/IconHamburger.vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import IconList from "@/components/icons/IconList.vue";
import IconLike from "@/components/icons/IconLike.vue";
import IconChat from "@/components/icons/IconChat.vue";
import IconBag from "@/components/icons/IconBag.vue";
</script>

<template>
  <header>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <div class="header-left">
          <div class="logo">
            <img src="@/assets/logo.svg" alt="logo" class="img-fluid">
            <span>TABAY</span>
          </div>
          <div class="tab">
            <IconHamburger />
            <span>Категории</span>
          </div>
          <div class="bg-light rounded rounded-pill">
            <div class="input-group">
              <div class="input-group-prepend">
                <button id="button-addon2" type="submit" class="btn btn-link text-warning">
                  <IconSearch />
                </button>
              </div>
              <input type="search" placeholder="Давайте найдем что-нибудь" aria-describedby="button-addon2" class="form-control border-0 bg-light">
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-main btn-orange h-100">Найти</button>
              </div>
            </div>
          </div>
        </div>
        <div class="header-right">
          <div class="circle">
            <IconList />
          </div>
          <div class="circle">
            <IconLike />
          </div>
          <div class="circle">
            <IconBag />
          </div>
          <div class="circle">
            <IconChat />
          </div>
          <div class="dropdown">
            <!-- Trigger button -->
            <button data-bs-toggle="dropdown" class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="@/assets/images/avatar.png" alt="Avatar" class="mr-2" style="width: 32px; height: 32px; border-radius: 50%;"> User Name
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

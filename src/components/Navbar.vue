<template>
  <div>
    <nav
      class="top-0 left-0 justify-evenly md:justify-between w-full lg:px-32 shadow md:py-6 py-3 flex"
    >
      <button
        class="block md:hidden px-4 focus:outline-none hover:bg-gray-200 group"
      >
        <img class="w-8" src="../assets/images/icon-menu.svg" alt="menu" />
        <div class="absolute top-0 -left-full opacity-0 h-screen w-8/12 z-50 bg-white transform group-focus:left-0 group-focus:opacity-100 transition-all duration-300">
          <ul class="flex flex-col items-center w-full text-base cursor-pointer pt-10">
            <router-link class="px-3 py-4 w-full" to="/">Collections</router-link>
            <router-link class="px-3 py-4 w-full" to="/about">Men</router-link>
            <router-link class="px-3 py-4 w-full" to="/">Women</router-link>
            <router-link class="px-3 py-4 w-full" to="/">About</router-link>
            <router-link class="px-3 py-4 w-full" to="/">Contact</router-link>
          </ul>
        </div>
      </button>
      <div class="container m-auto flex items-center">
        <router-link class="sm:w-full sm:h-12 md:w-32 md:pt-3" to="/">
          <img src="../assets/images/logo.svg" alt="logo" />
        </router-link>
        <div class="px-10 hidden md:flex text-gray-400">
          <router-link class="px-3" to="/">Collections</router-link>
          <router-link class="px-3" to="/about">Men</router-link>
          <router-link class="px-3" to="/">Women</router-link>
          <router-link class="px-3" to="/">About</router-link>
          <router-link class="px-3" to="/">Contact</router-link>
        </div>
      </div>
      <div class="flex w-40 justify-evenly">
        <ModalCart class="mt-3 pr-1 md:pr-7"/>
        <button class="mt-1 md:mt-0">
          <img
            class="w-6 h-6 md:w-11 md:h-10"
            src="../assets/images/image-avatar.png"
            alt=""
          />
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import ModalCart from './modalCart.vue';

export default {
    name: "ShelixAppNavbar",
    data() {
        return {};
    },
    mounted() { },
    methods: {},
    components: { ModalCart }
};
</script>

<style scoped></style>

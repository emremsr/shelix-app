<template>
  <div>
    <!-- Desktop Size -->
    <div class="hidden md:block mt-5">
      <div class="flex items-center">
        <h1 class="text-3xl font-bold mr-3">${{ price + ".00" }}</h1>
        <p
          class="px-2 py-1 font-bold rounded-md text-md bg-orange-100 text-orange-500"
        >
          50%
        </p>
      </div>
      <span class="text-gray-400 line-through">${{ delPrice + ".00" }} </span>

      <div class="flex items-end">
        <div
          class="flex bg-gray-100 w-48 h-14 mt-10 justify-around items-center"
        >
          <button
            :disabled="counter <= 0"
            @click="azalt"
            class="text-orange-400 font-bold text-3xl"
          >
            -
          </button>
          <p class="font-bold text-md">{{ counter }}</p>
          <button @click="arrtir" class="text-orange-400 font-bold text-3xl">
            +
          </button>
        </div>
        <button
          @click="addToCard(count, price)"
          :disabled="counter == 0"
          class="bg-orange-500 text-white w-7/12 h-14 ml-5 rounded-lg shadow-md flex justify-center items-center"
        >
          <img
            class="w-8 h-5 pr-3"
            src="../assets/images/basketicon.png"
            alt=""
          />
          <p>Add To Cart</p>
        </button>
      </div>
    </div>
    <!-- Desktop Size Finish -->

    <!-- Mobile Size -->
    <div class="block md:hidden px-5 mt-7">
      <div class="flex justify-between items-center">
        <div class="flex">
          <h1 class="text-3xl font-bold mr-3">${{ price + ".00" }}</h1>
          <p
            class="px-3 py-1 font-bold rounded-md text-md bg-orange-100 text-orange-500"
          >
            50%
          </p>
        </div>
        <span class="text-gray-400 line-through">${{ delPrice + ".00" }} </span>
      </div>
      <!-- Button and AddToCart -->
      <div>
        <div
          class="flex bg-gray-100 w-full h-14 mt-10 justify-around items-center"
        >
          <button
            :disabled="counter <= 0"
            @click="azalt"
            class="text-orange-400 font-bold text-3xl"
          >
            -
          </button>
          <p class="font-bold text-md">{{ counter }}</p>
          <button @click="arrtir" class="text-orange-400 font-bold text-3xl">
            +
          </button>
        </div>
        <button
          @click="addToCard(count, price)"
          :disabled="counter == 0"
          class="bg-orange-500 text-white w-full mt-5 h-14 rounded-md shadow-md flex justify-center items-center"
        >
          <img
            class="w-8 h-5 pr-3"
            src="../assets/images/basketicon.png"
            alt=""
          />
          <p>Add To Cart</p>
        </button>
      </div>
      <!-- Button and AddToCart Finish -->
    </div>
    <!-- Mobile Size Finish -->
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "ShelixAppAddToCart",

  data() {
    return {
      delPrice: 250.0,
      count: 0,
      price: 125,
      total: 0,
    };
  },

  computed: {
    counter() {
      return this.$store.state.count;
    },
  },
  methods: {
    ...mapMutations(["addToCart"]),
    addToCard(count, price) {
      this.addToCart({ count, price });
    },
    arrtir() {
      this.$store.state.count++;
    },
    azalt() {
      this.$store.state.count--;
    },
  },
};
</script>

<style></style>

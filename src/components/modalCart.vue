<template>
  <div class="pr-1 md:pr-7">
    <button @click="toggleModal()">
      <span
        class="absolute top-4 md:top-7 text-xs px-2 rounded-lg bg-orange-400 text-white"
        v-if="cart.length > 0"
        >{{ counter }}</span
      >
      <img src="../assets/images/icon-cart.svg" alt="" />
    </button>
    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto h-96 absolute inset-0 z-50 outline-none focus:outline-none justify-center items-center flex bottom-3/4 md:left-3/4"
    >
      <div class="relative w-full my-0 mx-auto max-w-sm">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
          >
            <h3 class="text-sm font-semibold">Cart</h3>
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              v-on:click="toggleModal()"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <div class="px-5 flex items-center">
            <div v-if="cart.length > 0">
              <img
                class="w-16 h-16 rounded-md"
                src="../assets/images/image-product-1-thumbnail.jpg"
                alt=""
              />
            </div>
            <div class="pl-5">
              <p v-if="cart.length > 0" class="text-gray-400">{{ name }}</p>
              <div class="relative flex-auto">
                <p
                  class="my-4 text-slate-500 font-bold text-lg leading-relaxed"
                  v-if="cart.length == 0"
                >
                  Your cart is empty.
                </p>
                <ul v-if="cart.length > 0">
                  <li v-for="item in cart" :key="item.index">
                    <span class="text-gray-400"
                      >${{ item.price }}.00 x {{ item.count }}</span
                    >
                    &nbsp;
                    <span class="font-bold">${{ item.total + ".00" }}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div v-if="cart.length > 0" class="ml-7">
              <button>
                <img
                  class="text-gray-400"
                  src="../assets/images/icon-delete.svg"
                  alt=""
                />
              </button>
            </div>
          </div>

          <div
            class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
          >
            <button
              v-if="cart.length > 0"
              class="text-white bg-orange-400 w-full font-bold uppercase text-sm px-6 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Checkout
            </button>
            <button
              v-if="cart.length == 0"
              class="text-white bg-orange-400 w-full font-bold uppercase text-sm px-6 py-3 rounded-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              v-on:click="toggleModal()"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      showModal: false,
      name: "Fall Limited Edition Sneakers",
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    counter() {
      return this.$store.state.count;
    },
    ...mapState(["cart"]),
  },
};
</script>

<template>
  <div>
    <!-- Desktop Size -->
    <div class="hidden md:block md:mx-16 md:mt-24 justify-evenly">
      <div class="grid md:grid-cols-2">
        <div>
          <div class="w-full mx-auto text-center">
            <img
              class="md:w-8/12 h-full mx-auto md:rounded-md"
              :src="require(`@/assets/images/${selectedImage}`)"
            />
          </div>
          <div class="md:flex md:w-8/12 mt-5 mx-auto text-center">
            <div class="mx-auto flex" v-for="image in images" :key="image">
              <img
                class="md:w-14 md:h-15 xl:w-20 xl:h-20 bg-cover md:mr-3 xl:mr-12 rounded-md focus:opacity-5"
                :src="require(`@/assets/images/${image}`)"
                @click="selectedImage = image"
              />
            </div>
          </div>
        </div>

        <div class="lg:w-10/12 justify-start">
          <p class="text-orange-400 font-bold text-sm mt-16 tracking-widest">
            {{ name }}
          </p>
          <p class="text-5xl font-bold mt-3">{{ name2 }}</p>
          <p class="mt-10 text-gray-600 w-10/12">{{ desc }}</p>
          <AddToCart />
        </div>
      </div>
    </div>
    <!-- Desktop Size Finish -->

    <!-- Mobile Size -->
    <div class="block md:hidden">
      <div>
        <carousel :per-page="1" :loop="true" :navigation="true">
          <slide v-for="image in images" :key="image">
            <img
              class="w-full h-80 bg-cover"
              :src="require(`@/assets/images/${image}`)"
              alt="Image"
            />
          </slide>
        </carousel>
      </div>
      <div class="px-5">
        <p class="text-orange-400 font-bold text-sm tracking-widest">
          {{ name }}
        </p>
        <p class="text-3xl font-bold mt-1">{{ name2 }}</p>
        <p class="mt-3 text-gray-400">{{ desc }}</p>
      </div>
      <AddToCart />
    </div>
    <!-- Mobile Size Finish -->
  </div>
</template>

<script>
import AddToCart from "@/components/addToCart.vue";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: { AddToCart, Carousel, Slide },
  data() {
    return {
      selectedImage: "image-product-1.jpg",
      name: "SNEAKER COMPANY",
      name2: "Fall Limited Edition Sneakers",
      desc: `These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.`,
      images: [
        "image-product-1.jpg",
        "image-product-2.jpg",
        "image-product-3.jpg",
        "image-product-4.jpg",
      ],
    };
  },
};
</script>

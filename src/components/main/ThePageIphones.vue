<script setup>
import TheCard from "./../TheCard.vue";

import { useMyStore } from "../../stores/Store";
const myStore = useMyStore();

import "vue3-carousel/dist/carousel.css";
import {
  Carousel,
  Slide,
  Pagination,
  Navigation as CarouselNavigation,
} from "vue3-carousel";

// Carousel configuration
const config = {
  itemsToShow: 1.2,
  snapAlign: "center",
  gap: 10,

  // 'breakpointMode' determines how the carousel breakpoints are calculated
  // Acceptable values: 'viewport' (default) | 'carousel'
  // 'viewport' - breakpoints are based on the viewport width
  // 'carousel' - breakpoints are based on the carousel width
  breakpointMode: "carousel",

  // Breakpoints are mobile-first
  // Any settings not specified will fall back to the carousel's default settings
  breakpoints: {
    // 300px and up
    300: {
      itemsToShow: 1.2,
      snapAlign: "center",
    },
    600: {
      itemsToShow: 2.2,
      snapAlign: "center",
    },

    900: {
      itemsToShow: 3.2,
      snapAlign: "center",
    },
    1020: {
      itemsToShow: 4.2,
      snapAlign: "center",
    },
  },
};
</script>

<template>
  <h2>iPhones</h2>
  <p>Созданный для того, чтобы его любили.</p>
  <p>Познакомьтесь поближе с iPhone.</p>
  <div class="cards">
    <TheCard v-for="phone in myStore.iphone" :phone="phone" />
  </div>
  <!-- Resizable container for testing 'carousel' breakpointMode -->
  <!-- Drag the right edge to adjust the width and see the breakpoints change -->
  <div class="carousel__wrapper">
    <Carousel v-bind="config">
      <Slide v-for="slide in myStore.slides.iphonesSlides" :key="slide.title">
        <div class="carousel__item">
          <img :src="slide.url" alt="" />
        </div>
      </Slide>
      <template #addons>
        <CarouselNavigation>
          <template #prev>
            <span class="carouselBtn carouselBtn_prev">←</span>
          </template>
          <template #next>
            <span class="carouselBtn carouselBtn_next">→</span>
          </template>
        </CarouselNavigation>
      </template>
    </Carousel>
  </div>
</template>

<style lang="scss" scoped>
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.carousel__wrapper {
  width: 100%;
  padding: 10px;
}
.carousel__item {
  width: 100%;
  border-radius: 50px;
  overflow: hidden;
}
.carousel__item img {
  width: 100%;
  object-fit: cover;
}
</style>

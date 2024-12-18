<script setup>
import { ref } from "vue";

import { useMyStore } from "../stores/Store";
const myStore = useMyStore();

import {
  NCard,
  NCarousel,
  NButton,
  NFlex,
  NDropdown,
  NSpace,
  NRadioGroup,
  NRadioButton,
} from "naive-ui";

const show = false;
const qqq = ref("ddd");
</script>

<template>
  <video
    src="https://www.apple.com/105/media/us/iphone-16/2024/3bd53bf6-27ee-4633-bd00-597a4ec4bf1b/anim/highlights-apple-intelligence/xlarge_2x.mp4"
    autoplay
    muted
    width="100%"
    height="600px"
  >
    Sorry, your browser doesn't support embedded videos, but don't worry, you
    can
  </video>

  <n-carousel
    v-show="show"
    direction="vertical"
    dot-placement="right"
    mousewheel
  >
    <img
      class="carousel-img"
      src="https://www.apple.com/v/iphone/home/by/images/overview/select/iphone_16__c5bvots96jee_xlarge.png"
    />
    <img
      class="carousel-img"
      src="https://www.apple.com/v/iphone-16/c/images/specs/finish_iphone_plus__b9g0ud5kzwty_large.jpg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
    />
    <img
      class="carousel-img"
      src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
    />
  </n-carousel>

  <n-space>
    <n-card v-for="item in myStore.iphone" :key="item.name" :title="item.name">
      <template #cover>
        <img :src="item.color.Pink.link" />
      </template>

      Card Content
      {{ qqq }}
      <n-radio-group v-model:value="qqq" name="radiobuttongroup1">
        <n-radio-button
          v-for="item in item.color"
          :key="item.colorName"
          :value="item.colorName"
          :style="{ backgroundColor: item.HEX }"
        />
      </n-radio-group>
    </n-card>
  </n-space>
</template>

<style scoped>
.main {
  width: 1440px;
}
video {
  object-fit: cover;
}
.n-card {
  max-width: 300px;
}

.carousel-img {
  width: 100%;

  object-fit: cover;
}
.n-carousel {
  height: 700px;
  border-radius: 20px;
  height: 500px;
}
</style>

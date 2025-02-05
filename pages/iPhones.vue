<script setup>
import { computed } from "vue";

useHead({
  title: "Каталог iPhone",
  meta: [
    {
      name: "description",
      content: "Купить iPhone с доставкой по лучшей цене в вашем городе",
    },
  ],
});

import BDiPhones from "../DataBase/iphones.json";

const filteredIphone15 = computed(() => {
  const result = [];
  for (const item in BDiPhones) {
    if (item.includes("15")) result.push(BDiPhones[item]);
  }
  return result;
});
const filteredIphone14 = computed(() => {
  const result = [];
  for (const item in BDiPhones) {
    if (item.includes("14")) result.push(BDiPhones[item]);
  }
  return result;
});
const filteredIphone13 = computed(() => {
  const result = [];
  for (const item in BDiPhones) {
    if (item.includes("13")) result.push(BDiPhones[item]);
  }
  return result;
});
</script>

<template>
  <div class="iphones">
    <div class="iphones__header">
      <h1 class="iphones__title">iPhones</h1>
      <div class="iphones__text">Созданный для того, чтобы его любили.</div>
    </div>
    <AppVideo
      :video="BDiPhones.video.videoUrl"
      :poster="BDiPhones.video.videoPoster"
    />

    <div class="slider">
      <div class="slider__title">iPhone 15</div>
      <KeenSlider :whatModel="filteredIphone15" />
    </div>
    <div class="slider">
      <div class="slider__title">iPhone 14</div>
      <KeenSlider :whatModel="filteredIphone14" />
    </div>
    <div class="slider">
      <div class="slider__title">iPhone 13</div>
      <KeenSlider :whatModel="filteredIphone13" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.iphones {
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 150px;
  }
  &__title {
    font-size: 50px;
    font-weight: 700;
  }
  &__text {
    font-size: 20px;
    font-weight: 700;
  }
}
.slider {
  display: flex;
  flex-direction: column;
  &__title {
    font-size: 40px;
    font-weight: 700;
  }
}

@media (max-width: 1200px) {
  .iphones__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 150px;
  }
}
</style>

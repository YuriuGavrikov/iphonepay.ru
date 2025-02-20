<script setup>
useHead({
  title: "Каталог AirPods",
  meta: [
    {
      name: "description",
      content: "Купить AirPods с доставкой по лучшей цене в вашем городе",
    },
  ],
});
import BDAirpods from "../DataBase/airpods.json";

const filteredAirPods = computed(() => {
  const result = [];
  for (const item in BDAirpods) {
    if (item.includes("AirPods")) result.push(BDAirpods[item]);
  }
  return result;
});
</script>

<template>
  <div class="airpods">
    <div class="airpods__header">
      <h1 class="airpods__title">AirPods</h1>
      <div class="airpods__text">Какие AirPods вам подходят?</div>
    </div>
    <AppVideo
      :video="BDAirpods.video.videoUrl"
      :poster="BDAirpods.video.videoPoster"
    />
    <div class="airpods__products">
      <AppCardsAirpodsCard
        v-for="airpods in filteredAirPods"
        :key="airpods.model"
        :airpods="airpods"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.airpods {
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
  .airpods__products {
    display: flex;
    flex-wrap: wrap;
  }
}

@media (max-width: 1200px) {
  .airpods {
    &__header {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
      width: 100%;
      height: 150px;
    }
    &__text {
      text-align: center;
    }
  }
}
</style>

<script setup>
const props = defineProps({
  airpods: Object,
});
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="airpods.img" alt="" />
    </div>
    <h2 class="card__title">
      {{ airpods.model }}
    </h2>
    <div class="card__specifications">
      <div class="card__specifications__item"><b>Характеристки:</b></div>
      <div class="card__specifications__item">
        <p><b>Год выпуска:</b> {{ airpods.release_year }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Батарея:</b></p>
        <p><b>Наушники:</b> {{ airpods.battery_life.earbuds }}</p>
        <p v-if="airpods.battery_life.with_case">
          <b>С кейсом:</b> {{ airpods.battery_life.with_case }}
        </p>
      </div>
      <div class="card__specifications__item">
        <p><b>Чип:</b> {{ airpods.chip }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Тип:</b> {{ airpods.type }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Питание:</b></p>
        <p>{{ airpods.charging_case.type }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Прочее:</b></p>
        <p v-for="feature in airpods.features">{{ feature }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  flex: 1 1 25%; /* Каждый элемент занимает 25% ширины контейнера */

  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img img {
    width: 100%;
  }
  &__title {
    text-align: center;
  }
  &__specifications {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 30px;
    &__item {
      text-align: center;
      padding: 10px 40px;
    }
  }
}
</style>

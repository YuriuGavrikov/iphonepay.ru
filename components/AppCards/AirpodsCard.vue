<script setup>
const props = defineProps({
  airpods: Object,
});

const airpodsModel = `/airpods/model-${props.airpods.model.replace(/ /g, "_")}`;
</script>

<template>
  <div class="card">
    <NuxtLink :to="airpodsModel">
      <div class="card__img">
        <img :src="airpods.img" alt="" />
      </div>
      <h2 class="card__title">
        {{ airpods.model }}
      </h2>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  margin-bottom: 30px;

  flex: 1 1 25%; /* Каждый элемент занимает 25% ширины контейнера */

  &__title {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img img {
    width: 100%;
  }
}
@media (max-width: 1200px) {
  .card {
    flex: 1 1 50%;
  }
}
</style>

<script setup>
const props = defineProps({
  airpods: Object,
});

const airpodsModel = `/airpods/model-${props.airpods.model.replace(/ /g, "_")}`;
</script>

<template>
  <div class="card">
    <NuxtLink :to="airpodsModel">
      <div class="card__inner">
        <div class="card__inner__img">
          <img :src="airpods.img" alt="" />
        </div>
        <h2 class="card__inner__title">
          {{ airpods.model }}
        </h2>
      </div>
    </NuxtLink>
    <TheButton textBtn="Где купить" />
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: end;
}
.card__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

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
</style>

<script setup>
import { ref } from "vue";

const props = defineProps({
  iphone: Object,
});

const curentColor = ref(Object.values(props.iphone.colors)[0].colorName);

const getImg = (iphone, curentColor) => {
  return iphone.colors[curentColor].link;
};
</script>

<template>
  <div class="card keen-slider__slide">
    <div class="card__img">
      <img :src="getImg(iphone, curentColor)" alt="" />
    </div>
    <div class="card__title">
      {{ iphone.model }}
    </div>
    <div class="card__colors">
      <div class="radio" v-for="color in iphone.colors" :key="color.colorName">
        <input
          class="radio-input"
          type="radio"
          :name="`${iphone.model}${color.colorName}`"
          :value="color.colorName"
          v-model="curentColor"
          :style="{ backgroundColor: color.HEX }"
        />
        <label
          class="radio-label"
          :for="`${iphone.model}${color.colorName}`"
          :style="
            curentColor === color.colorName
              ? { display: 'block' }
              : { display: 'none' }
          "
          >{{ color.colorName }}
        </label>
      </div>
    </div>
    <div class="card__specifications">
      <div class="card__specifications__item"><b>Характеристки:</b></div>
      <div class="card__specifications__item">
        <p><b>Процессор:</b></p>
        <p>{{ iphone.processor.chip }}</p>
        <p>{{ iphone.processor.cores }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Основная камера:</b></p>
        <p>{{ iphone.camera.rear.main }}</p>
        <p><b>Широкоугольная камера:</b></p>
        <p>{{ iphone.camera.rear.ultra_wide }}</p>
        <p><b>Фронтальная камера:</b></p>
        <p>{{ iphone.camera.front.resolution }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Дисплей:</b></p>
        <p>{{ iphone.display.type }}</p>
        <p>{{ iphone.display.size }}</p>
        <p>{{ iphone.display.refresh_rate }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Память:</b></p>
        <p v-for="options in iphone.storage.options">{{ options }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Материалы:</b></p>
        <p>{{ iphone.body.material }}</p>
      </div>
      <div class="card__specifications__item">
        <p><b>Водонепроницаемость:</b></p>
        <p>{{ iphone.body.water_resistance }}</p>
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

  &__title {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    min-height: 70px;
  }
  &__img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__img img {
    width: 100%;
  }
  &__specifications {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    font-size: 14px;
    &__item {
      text-align: center;
      padding: 10px 40px;
    }
  }
}
.card__colors {
  display: flex;
  gap: 10px;
  .radio {
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
  }
  .radio-label {
    font-size: 12px;

    position: absolute;
    top: 40px;
  }
  .radio-input {
    appearance: none;
    position: relative;
    width: 30px;
    height: 30px;
    box-shadow: inset 0 0 5px rgb(0 0 0 / 0.2);
    border: 1px solid #ffffff;
    transition: 500ms;
    border-radius: 50%;

    &:checked {
      border: 1px solid rgb(255, 255, 255);
      box-shadow: 0px 0px 10px 0px rgb(204, 204, 204);
    }
  }
}
@media (max-width: 1200px) {
  .card__colors {
    gap: 3px;
    .radio-input {
      width: 25px;
      height: 25px;
    }
  }
}
</style>

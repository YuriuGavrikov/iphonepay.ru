<script setup>
import { ref } from "vue";

const props = defineProps({
  iphone: Object,
});

const curentColor = ref(Object.values(props.iphone.colors)[0].colorName);

const getImg = (iphone, curentColor) => {
  return iphone.colors[curentColor].link;
};

const iPhoneModel = `/iphones/model-${props.iphone.model}`;
</script>

<template>
  <div class="keen-slider__slide">
    <div class="card">
      <NuxtLink :to="iPhoneModel">
        <div class="card__img">
          <img :src="getImg(iphone, curentColor)" alt="" />
        </div>
        <div class="card__title">
          {{ iphone.model }}
        </div>
      </NuxtLink>
      <div class="card__colors">
        <div
          class="radio"
          v-for="color in iphone.colors"
          :key="color.colorName"
        >
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
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  padding-bottom: 30px;

  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    font-weight: 700;
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
      width: 20px;
      height: 20px;
    }
  }
}
</style>

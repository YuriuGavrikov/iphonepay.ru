<script setup>
import { ref } from "vue";

import { useMyStore } from "../stores/Store";

defineProps({
  phone: Object,
});
const myStore = useMyStore();
</script>

<template>
  <div class="card">
    <div class="card__img">
      <img :src="phone.getImg()" />
    </div>
    <div class="card__title">{{ phone.name }}</div>
    <div class="card__color">
      <div class="radio" v-for="color in phone.color" :key="color.colorName">
        <input
          class="radio-input"
          type="radio"
          :name="`${phone.name}${color.colorName}`"
          :value="color.colorName"
          v-model="phone.curentColor"
          :style="{ backgroundColor: color.HEX }"
        />
        <label
          class="radio-label"
          :for="`${phone.name}${color.colorName}`"
          :style="
            phone.curentColor === color.colorName
              ? { display: 'block' }
              : { display: 'none' }
          "
          >{{ color.colorName }}
        </label>
      </div>
    </div>

    <div class="card__specifications"></div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  max-width: 300px;
  padding: 10px;

  &__img img {
    width: 100%;
    object-fit: contain;
  }
  &__title {
  }
  &__color {
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
        box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.5);
      }
    }
  }
  &__specifications {
  }
}
</style>

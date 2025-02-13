<script setup>
import { ref } from "vue";
import BDiPhones from "../DataBase/iphones.json";

const { iphoneModelCard } = useRoute().params;

const iconSize = "70px";

useHead({
  title: `Купить ${iphoneModelCard.replace(/_/g, " ")}`,
  meta: [
    {
      name: "description",
      content: `Купить ${iphoneModelCard.replace(
        /_/g,
        " "
      )} с доставкой по лучшей цене в вашем городе`,
    },
  ],
});

const iphone = BDiPhones[iphoneModelCard];
const curentColor = ref(Object.values(iphone.colors)[0].colorName);

const getImg = (iphone, curentColor) => {
  return iphone.colors[curentColor].link;
};
</script>

<template>
  <div class="card">
    <div class="card__hello">
      <div class="card__hello__img">
        <img :src="getImg(iphone, curentColor)" alt="" />
      </div>
      <h1 class="card__hello__title">
        {{ iphone.model }}
      </h1>
      <div class="card__hello__colors">
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

    <div class="parent">
      <div class="div1">
        <Icon
          name="solar:cpu-bolt-linear"
          :size="iconSize"
          style="color: var(--icon-one)"
        />

        <h2>Процессор:</h2>
        <p>{{ iphone.processor.chip }}</p>
        <p>{{ iphone.processor.cores }}</p>
      </div>
      <div class="div2">
        <Icon
          name="material-symbols:water-drop-outline"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Защита:</h2>
        <p>{{ iphone.body.water_resistance }}</p>
      </div>
      <div class="div3">
        <Icon
          name="eos-icons:molecules-outlined"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Материалы:</h2>
        <p>{{ iphone.body.material }}</p>
      </div>
      <div class="div4">
        <Icon
          name="material-symbols:android-camera-outline"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Основная камера:</h2>
        <p>{{ iphone.camera.rear.main }}</p>
        <h2>Широкоугольная камера:</h2>
        <p>{{ iphone.camera.rear.ultra_wide }}</p>
        <h2>Фронтальная камера:</h2>
        <p>{{ iphone.camera.front.resolution }}</p>
      </div>
      <div class="div5">
        <Icon
          name="material-symbols:open-in-phone-outline"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Дисплей:</h2>
        <p>{{ iphone.display.type }}</p>
        <p>{{ iphone.display.size }}</p>
        <p>{{ iphone.display.refresh_rate }}</p>
      </div>
      <div class="div6">
        <Icon
          name="tdesign:hard-disk-storage"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Память:</h2>
        <span v-for="options in iphone.storage.options">{{ options }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 40px 0;
  font-size: 16px;
  h2 {
    font-size: 18px;
  }
  &__hello {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
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
    &__colors {
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
  }
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  width: 70%;
  height: 550px;
}
.parent > div {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
}

.div1 {
  grid-area: 1 / 1 / 3 / 2;
}
.div2 {
  grid-area: 3 / 1 / 4 / 2;
}
.div3 {
  grid-area: 1 / 2 / 2 / 3;
}
.div4 {
  grid-area: 2 / 2 / 4 / 3;
}
.div5 {
  grid-area: 1 / 3 / 3 / 4;
}
.div6 {
  grid-area: 3 / 3 / 4 / 4;
}

@media (max-width: 1200px) {
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 0;

    font-size: 20px;
    h2 {
      font-size: 26px;
    }
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 100%;
    height: 100%;
  }

  .parent > div {
    padding: 30px;
  }

  .div1 {
    grid-area: 1 / 1 / 3 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 2 / 2 / 3 / 3;
  }
  .div4 {
    grid-area: 3 / 2 / 5 / 3;
  }
  .div5 {
    grid-area: 3 / 1 / 4 / 2;
  }
  .div6 {
    grid-area: 4 / 1 / 5 / 2;
  }
}
@media (max-width: 767px) {
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 50px;
    padding: 0;
  }
  .parent {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .parent > div {
    padding: 20px;
  }
}
</style>

<script setup>
import { ref } from "vue";
import BDiPhones from "../DataBase/iphones.json";

useHead({
  title: "Каталог iPhone",
  meta: [
    {
      name: "description",
      content: "Купить iPhone с доставкой по лучшей цене в вашем городе",
    },
  ],
});

const { iphoneModelCard } = useRoute().params;

const iphone = BDiPhones[iphoneModelCard.replace(/ /g, "_")];
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
      <div class="card__hello__title">
        {{ iphone.model }}
      </div>
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
          size="50px"
          style="color: var(--icon-one)"
        />

        <p><b>Процессор:</b></p>
        <p>{{ iphone.processor.chip }}</p>
        <p>{{ iphone.processor.cores }}</p>
      </div>
      <div class="div2">
        <Icon
          name="material-symbols:water-drop-outline"
          size="50px"
          style="color: var(--icon-one)"
        />
        <p><b>Водонепроницаемость:</b></p>
        <p>{{ iphone.body.water_resistance }}</p>
      </div>
      <div class="div3">
        <Icon
          name="eos-icons:molecules-outlined"
          size="50px"
          style="color: var(--icon-one)"
        />
        <p><b>Материалы:</b></p>
        <p>{{ iphone.body.material }}</p>
      </div>
      <div class="div4">
        <Icon
          name="material-symbols:android-camera-outline"
          size="50px"
          style="color: var(--icon-one)"
        />
        <p><b>Основная камера:</b></p>
        <p>{{ iphone.camera.rear.main }}</p>
        <p><b>Широкоугольная камера:</b></p>
        <p>{{ iphone.camera.rear.ultra_wide }}</p>
        <p><b>Фронтальная камера:</b></p>
        <p>{{ iphone.camera.front.resolution }}</p>
      </div>
      <div class="div5">
        <Icon
          name="material-symbols:open-in-phone-outline"
          size="50px"
          style="color: var(--icon-one)"
        />
        <p><b>Дисплей:</b></p>
        <p>{{ iphone.display.type }}</p>
        <p>{{ iphone.display.size }}</p>
        <p>{{ iphone.display.refresh_rate }}</p>
      </div>
      <div class="div6">
        <Icon
          name="tdesign:hard-disk-storage"
          size="50px"
          style="color: var(--icon-one)"
        />
        <p><b>Память:</b></p>
        <p v-for="options in iphone.storage.options">{{ options }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  padding: 30px 0;
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
}
.parent > div {
  display: inline-block;
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

    gap: 30px;
    padding: 30px 0;
  }

  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;

    width: 100%;
    font-size: 14px;
  }
  .parent > div {
    padding: 5px;
  }

  .div1 {
    grid-area: 1 / 1 / 5 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 3 / 3;
  }
  .div3 {
    grid-area: 3 / 2 / 7 / 3;
  }
  .div4 {
    grid-area: 5 / 1 / 9 / 2;
  }
  .div5 {
    grid-area: 7 / 2 / 11 / 3;
  }
  .div6 {
    grid-area: 9 / 1 / 11 / 2;
  }
}
</style>

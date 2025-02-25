<script setup>
import BDAirpods from "../DataBase/airpods.json";

const { airpodsModelCard } = useRoute().params;

const iconSize = "70px";

useHead({
  title: `Купить ${airpodsModelCard.replace(/_/g, " ")}`,
  meta: [
    {
      name: "description",
      content: `Купить ${airpodsModelCard.replace(
        /_/g,
        " "
      )} с доставкой по лучшей цене в вашем городе`,
    },
  ],
});

const airpods = BDAirpods[airpodsModelCard.replace(/_/g, " ")];
</script>

<template>
  <div class="card">
    <div class="card__hello">
      <div class="card__hello__img">
        <img :src="airpods.img" alt="" />
      </div>
      <h2 class="card__hello__title">
        {{ airpods.model }}
      </h2>
    </div>

    <div class="parent">
      <div class="div1">
        <Icon
          name="solar:cpu-bolt-linear"
          :size="iconSize"
          style="color: var(--icon-one)"
        />

        <h2>Процессор:</h2>
        <p>{{ airpods.chip }}</p>
      </div>
      <div class="div2">
        <Icon
          name="teenyicons:in-ear-headphones-solid"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Тип:</h2>
        <p>{{ airpods.type }}</p>
      </div>
      <div class="div3">
        <Icon
          name="material-symbols:headphones-battery"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Батарея:</h2>

        <b>Наушники:</b>
        <p>{{ airpods.battery_life.earbuds }}</p>

        <span v-if="airpods.battery_life.with_case">
          <b>С кейсом:</b>
          <p>{{ airpods.battery_life.with_case }}</p>
        </span>
      </div>
      <div class="div4">
        <Icon
          name="fluent:battery-charge-20-regular"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Питание:</h2>
        <p>{{ airpods.charging_case.type }}</p>
      </div>
      <div class="div5">
        <Icon
          name="bi:motherboard"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Прочее:</h2>
        <p v-for="feature in airpods.features">{{ feature }}</p>
      </div>
      <div class="div6">
        <Icon
          name="streamline:legal-justice-hammer-hammer-work-legal-mallet-office-company-gavel-justice-judge-arbitration-court"
          :size="iconSize"
          style="color: var(--icon-one)"
        />
        <h2>Год выпуска:</h2>
        <p>{{ airpods.release_year }}</p>
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

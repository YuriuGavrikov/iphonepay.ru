<script setup>
useHead({
  title: "Техника Apple",
  meta: [
    {
      name: "description",
      content:
        "Техника Apple в вашем городе с доставкой iPhone | AirPods | iPad | Wathces",
    },
  ],
});
</script>

<template>
  <h1>Apple</h1>

  <div class="products">
    <NuxtLink to="/iphones/">
      <div class="products__item">
        <img
          src="https://www.apple.com/v/iphone/home/ca/images/chapternav/iphone_14_light__cazn2nyanwuq_large.svg"
          alt="iphone"
        />
        <h2>iPhone</h2>
      </div>
    </NuxtLink>

    <NuxtLink to="/AirPods/">
      <div class="products__item">
        <img
          src="https://www.apple.com/v/airpods/x/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg"
          alt="ipad"
        />
        <h2>AirPods</h2>
      </div>
    </NuxtLink>

    <NuxtLink to="/ipads/">
      <div class="products__item">
        <img
          src="https://www.apple.com/assets-www/en_WW/ipad/chapternav/ipad_air_a326338d6.svg"
          alt="watch"
        />
        <h2>iPads</h2>
      </div>
    </NuxtLink>

    <NuxtLink to="/watches/">
      <div class="products__item">
        <img
          src="https://www.apple.com/v/watch/bp/images/chapternav/watch_nav_nike_light__c36zk943xfo2_large.svg"
          alt="airpods"
        />
        <h2>Watches</h2>
      </div>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 70px;
  color: var(--text-one);

  padding: 40px;
}
.products {
  display: flex;
  gap: 30px;

  color: var(--text-one);

  font-size: 30px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 200px;
    width: 200px;

    img {
      height: 80px;
    }
  }
}
.products > a:hover {
  transform: scale(1.02);
}

@media (max-width: 1200px) {
  .products {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 50px;
    grid-row-gap: 50px;
  }
}
@media (max-width: 760px) {
  .products {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
}
</style>

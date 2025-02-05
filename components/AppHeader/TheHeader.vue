<script setup>
const myStore = useMyStore();
</script>

<template>
  <header class="header">
    <div class="logo">
      <NuxtLink to="/" @click="myStore.navigation.isShowNavigation = true">
        iPhonePay
      </NuxtLink>
    </div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <NuxtLink to="/iphones">iPhones</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink to="/airpods">AirPods</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink to="/ipads">iPads</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink to="/watches">Watches</NuxtLink>
        </li>
        <li class="nav__item">
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="wrapper__hamburger"><AppHeaderTheHamburger /></div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  gap: 150px;

  padding: 0 30px 0 30px;

  width: 100%;
  height: 60px;

  background: #f9f9f9;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 600;
}
.nav {
  display: flex;
  align-items: center;
  gap: 50px;

  &__list {
    display: flex;

    list-style-type: none;
  }

  &__item {
    padding: 0 30px;
    &__inner {
      display: none;
      flex-direction: column;

      position: absolute;
      left: 0;
      top: 40px;

      width: 100%;
      padding: 40px 400px;
      background: #fff;

      z-index: 10;

      &__title {
        font-size: 22px;
        margin-bottom: 30px;
      }
      &__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      &__item {
        list-style-type: none;
      }
    }
  }
}
.wrapper__hamburger {
  position: relative;
}

@media (max-width: 1200px) {
  .nav {
    display: none;
  }
}
@media (min-width: 1200px) {
  .header {
    justify-content: center;
  }
  .wrapper__hamburger {
    display: none;
  }
}
</style>

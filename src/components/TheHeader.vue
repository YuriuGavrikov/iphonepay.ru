<script setup>
// import { ref } from "vue";

// import { useMyStore } from "../stores/Store";
// const myStore = useMyStore();

import { ref } from "vue";
import { useMyStore } from "../stores/Store";
import TheHumburger from "./TheHamburger.vue";
const myStore = useMyStore();
</script>

<template>
  <header class="header">
    <div class="logo">iPhonePay{{ www }}</div>
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          iPhone
          <div class="nav__item__inner">
            <p class="nav__item__inner__title">iPhones</p>
            <ul class="nav__item__inner__list">
              <li class="nav__item__inner__item">iPhone 15</li>
              <li class="nav__item__inner__item">iPhone 15</li>
              <li class="nav__item__inner__item">iPhone 15</li>
              <li class="nav__item__inner__item">iPhone 15</li>
            </ul>
          </div>
        </li>

        <li class="nav__item">
          AirPods
          <div class="nav__item__inner">
            <div class="nav__item__inner__title">AirPods</div>
            <ul class="nav__item__inner__list">
              <li class="nav__item__inner__item">AirPods 15</li>
              <li class="nav__item__inner__item">AirPods 15</li>
              <li class="nav__item__inner__item">AirPods 15</li>
              <li class="nav__item__inner__item">AirPods 15</li>
            </ul>
          </div>
        </li>
        <li class="nav__item">
          IPad
          <div class="nav__item__inner">
            <div class="nav__item__inner__title">IPad</div>
            <ul class="nav__item__inner__list">
              <li class="nav__item__inner__item">IPad 15</li>
              <li class="nav__item__inner__item">IPad 15</li>
              <li class="nav__item__inner__item">IPad 15</li>
              <li class="nav__item__inner__item">IPad 15</li>
            </ul>
          </div>
        </li>
        <li class="nav__item">
          Watch
          <div class="nav__item__inner">
            <div class="nav__item__inner__title">Watch</div>
            <ul class="nav__item__inner__list">
              <li class="nav__item__inner__item">Watch 15</li>
              <li class="nav__item__inner__item">Watch 15</li>
              <li class="nav__item__inner__item">Watch 15</li>
              <li class="nav__item__inner__item">Watch 15</li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
    <div class="wrapper__hamburger">
      <TheHumburger />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  gap: 150px;

  padding: 0 50px 0 30px;

  width: 100%;
  height: 60px;

  background: #fff;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
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

    @keyframes scale-in-ver-top {
      0% {
        transform: scaleY(0);
        transform-origin: 100% 0%;
        opacity: 1;
      }
      100% {
        transform: scaleY(1);
        transform-origin: 100% 0%;
        opacity: 1;
      }
    }
    &:hover &__inner {
      display: flex;
      animation: scale-in-ver-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

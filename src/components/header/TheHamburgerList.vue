<script setup>
import { ref } from "vue";
import { useMyStore } from "../../stores/Store";
import { RouterLink } from "vue-router";

const myStore = useMyStore();
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink to="/iphones" @click="myStore.setShowNavigation">
          iPhone
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/airpods" @click="myStore.setShowNavigation">
          AirPods
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/ipads" @click="myStore.setShowNavigation">
          IPad
        </RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink to="/watches" @click="myStore.setShowNavigation">
          Watch
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@keyframes scale-up-ver-top {
  0% {
    transform: scaleY(0.4);
    transform-origin: 100% 0%;
  }
  100% {
    transform: scaleY(1);
    transform-origin: 100% 0%;
  }
}
.nav {
  display: flex;
  align-items: start;

  width: 100%;
  height: 100%;

  background: #fff;
  padding: 30px;

  animation: scale-up-ver-top 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 50px;

    list-style-type: none;
  }

  &__item {
    font-size: 40px;
  }
}
</style>

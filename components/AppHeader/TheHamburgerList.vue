<script setup>
const myStore = useMyStore();
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <NuxtLink
          to="/iphones"
          @click="
            myStore.navigation.isShowNavigation =
              !myStore.navigation.isShowNavigation
          "
        >
          iPhone
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink
          to="/airpods"
          @click="
            myStore.navigation.isShowNavigation =
              !myStore.navigation.isShowNavigation
          "
        >
          AirPods
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink
          to="/ipads"
          @click="
            myStore.navigation.isShowNavigation =
              !myStore.navigation.isShowNavigation
          "
        >
          IPad
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink
          to="/watches"
          @click="
            myStore.navigation.isShowNavigation =
              !myStore.navigation.isShowNavigation
          "
        >
          Watch
        </NuxtLink>
      </li>
      <li class="nav__item">
        <NuxtLink
          to="/blog"
          @click="
            myStore.navigation.isShowNavigation =
              !myStore.navigation.isShowNavigation
          "
        >
          Blog
        </NuxtLink>
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

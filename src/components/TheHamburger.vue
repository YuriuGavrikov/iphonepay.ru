<script setup>
import { ref } from "vue";

const myCheckbox = ref(false);
</script>

<template>
  <input
    id="btn-1"
    type="checkbox"
    @click="myCheckbox = !myCheckbox"
    :checked="myCheckbox"
  />
  <label for="btn-1">
    <span class="hamburger">
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
      <span class="cross"></span>
    </span>
  </label>
  <nav class="nav" v-show="myCheckbox">
    <ul class="nav__list">
      <li class="nav__item">iPhone</li>
      <li class="nav__item">AirPods</li>
      <li class="nav__item">IPad</li>
      <li class="nav__item">Watch</li>
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

  position: fixed;
  top: 40px;
  left: 0;

  width: 100%;
  height: 100%;

  background: #fff;
  padding: 30px;

  z-index: 20;
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
/* --------------------------------------------------------------- */
input[type="checkbox"] {
  display: none;
}

.hamburger {
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  padding: 10px;
  width: 60px;
  height: 50px;

  z-index: 40;
}

.line-1,
.line-2,
.line-3 {
  position: relative;
  display: block;
  width: 30px;
  height: 2px;
  background: rgb(44, 62, 80);
  top: 0;
  margin-bottom: 10px;
  transition: 0.2s;
  border: none;
  margin-left: auto;
  margin-right: auto;
}

.line-1 {
  transition-delay: 0.3s;
}

.line-2 {
  transition-delay: 0.3s;
}

.line-3 {
  margin-bottom: 0;
  transition-delay: 0.3s;
}

#btn-1:checked ~ label .hamburger {
  width: 60px;
}

#btn-1:checked ~ label .line-1 {
  width: 0;
  transition-delay: 0.1s;
}

#btn-1:checked ~ label .line-2 {
  width: 0;
  transition-delay: 0.1s;
}

#btn-1:checked ~ label .line-3 {
  width: 0;
  transition-delay: 0.1s;
}

.cross,
.cross:after {
  position: absolute;
  width: 0;
  height: 2px;
  background: rgb(93, 62, 59);
  top: 50%;
  left: 50%;
  transition: 0.2s;
}

.cross {
  transform: translate(-50%, -50%) rotate(45deg);
  transition-delay: 0.1s;
}

.cross:after {
  content: "";
  transform: translate(-50%, -50%) rotate(90deg);
  transition-delay: 0.1s;
}

#btn-1:checked ~ label .cross {
  width: 40px;
  transition-delay: 0.3s;
}

#btn-1:checked ~ label .cross:after {
  width: 40px;
  transition-delay: 0.3s;
}
</style>

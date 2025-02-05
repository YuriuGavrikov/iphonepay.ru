<script setup>
const myStore = useMyStore();
</script>

<template>
  <input
    id="btn-1"
    type="checkbox"
    @click="
      myStore.navigation.isShowNavigation = !myStore.navigation.isShowNavigation
    "
    :checked="!myStore.navigation.isShowNavigation"
  />
  <label for="btn-1">
    <span class="hamburger">
      <span class="line-1"></span>
      <span class="line-2"></span>
      <span class="line-3"></span>
      <span class="cross"></span>
    </span>
  </label>
</template>

<style lang="scss" scoped>
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

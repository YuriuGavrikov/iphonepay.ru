<script setup>
const props = defineProps({
  textBtn: String,
});
</script>

<template>
  <button class="btn">{{ props.textBtn }}</button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 0 25px;
  border: 1px solid #c2c2c2;
  border-radius: 20px;
  height: 46px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(65, 132, 144, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
}
@keyframes slideme {
  0% {
    left: -30px;
    margin-left: 0px;
  }
  30% {
    left: 110%;
    margin-left: 80px;
  }
  100% {
    left: 110%;
    margin-left: 80px;
  }
}

.btn {
  overflow: hidden;
  position: relative;
}

.btn:after {
  content: "";
  display: block;
  width: 30px;
  height: 200px;
  margin-left: 60px;
  background: #fff;
  opacity: 0.5;
  position: absolute;
  left: -40px;
  top: -100px;
  z-index: 1;
  transform: rotate(45deg);
  transition: all 0.1s;
  animation-name: slideme;
  animation-duration: 3s;
  animation-delay: 0.05s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
</style>

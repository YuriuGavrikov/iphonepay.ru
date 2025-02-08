<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error">
    <img src="./public/robo.webp" alt="" />
    <p>Код ошибки: {{ error.statusCode }}</p>
    <p>{{ error.message }}</p>
    <TheButton textBtn="Вернуться на iPhonePay.ru" @click="handleError" />
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;

  position: fixed;
  top: 30%;

  font-weight: 700;

  img {
    width: 300px;
  }
}
</style>

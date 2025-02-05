<script setup>
const props = defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div class="error">
    <div class="error__content">
      <p>Код ошибки: {{ error.statusCode }}</p>
      <p>{{ error.message }}</p>
      <TheButton textBtn="Вернуться на iPhonePay.ru" @click="handleError" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(./public/orig.webp) no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    padding: 100px;

    border: 10px solid rgba(255, 255, 255, 0.8);
    border-radius: 50%;

    background-color: rgba(244, 244, 244, 0.8);
    p {
      font-size: 30px;
      font-weight: 700;
    }
  }
}
</style>

<script setup></script>

<template>
  <footer class="footer">
    <div class="logo">
      <NuxtLink to="/"> iPhonePay </NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  gap: 150px;

  padding: 0 30px 0 30px;
  margin-top: 30px;

  width: 100%;
  height: 60px;

  background: #f9f9f9;
}
.logo {
  display: flex;
  align-items: center;
  font-weight: 600;
}
</style>

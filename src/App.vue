<script setup>
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";

import { NFlex } from "naive-ui";
</script>

<template>
  <n-flex vertical justify="center" align="center">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </n-flex>
</template>

<style scoped></style>

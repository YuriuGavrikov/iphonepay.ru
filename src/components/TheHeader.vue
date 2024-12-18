<script setup>
// import { ref } from "vue";

// import { useMyStore } from "../stores/Store";
// const myStore = useMyStore();
import { NButton, NDropdown, NFlex, NH1, NText } from "naive-ui";

import { useMyStore } from "../stores/Store";
const myStore = useMyStore();
</script>

<template>
  <n-h1>
    <n-text> iPhonePay </n-text>
  </n-h1>
  <n-flex justify="center" size="small">
    <n-dropdown trigger="click" :options="myStore.optionsIphone">
      <n-button>IPhone</n-button>
    </n-dropdown>
    <n-dropdown trigger="click" :options="myStore.optionsAirpods">
      <n-button>AirPods</n-button>
    </n-dropdown>
    <n-dropdown trigger="click" :options="myStore.optionsIpad">
      <n-button>IPad</n-button>
    </n-dropdown>
  </n-flex>
</template>

<style lang="scss" scoped></style>

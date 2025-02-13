<script setup>
import { ref } from "vue";

const { isDesktop, isTablet, isMobile } = useDevice();

const props = defineProps({
  whatModel: Array,
});

const [container, slider] = useKeenSlider({
  slides: {
    perView: () => {
      if (isDesktop) return 3.5;
      if (isTablet) return 2.5;
      if (isMobile) return 1.5;
    },
    spacing: () => {
      if (isDesktop) return 50;
      if (isTablet) return 50;
      if (isMobile) return 30;
    },
  },
});
</script>

<template>
  <div ref="container" :class="['keen-slider']">
    <AppCardsIphoneCard
      v-for="iphone in whatModel"
      :key="iphone.model"
      :iphone="iphone"
    />
  </div>

</template>

<style lang="scss" scoped>
.keen-slider {
  transition: height 0.3s ease;
}
</style>

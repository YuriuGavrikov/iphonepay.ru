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

const isSliderHide = ref(false);
</script>

<template>
  <div
    ref="container"
    :class="[
      'keen-slider',
      { slider_hide: !isSliderHide, slider_show: isSliderHide },
    ]"
  >
    <AppCardsIphoneCard
      v-for="iphone in whatModel"
      :key="iphone.model"
      :iphone="iphone"
    />
  </div>
  <TheButton
    :textBtn="isSliderHide ? 'Скрыть' : 'Показать больше'"
    @click="isSliderHide = !isSliderHide"
  />
</template>

<style lang="scss" scoped>
.keen-slider {
  transition: height 0.3s ease;
}
.slider_hide {
  overflow: hidden;
  height: 600px;
  mask: linear-gradient(to top, transparent, rgb(255, 255, 255) 30%);
}
.slider_show {
  min-height: 900px;
}
</style>

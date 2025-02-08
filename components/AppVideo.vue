<script setup>
import { useMediaControls } from "@vueuse/core";
import { onMounted, ref } from "vue";

const props = defineProps({
  video: String,
  poster: String,
});

const video = ref();
const { playing, volume, muted } = useMediaControls(video, {
  src: props.video,
});

// Change initial media properties
onMounted(() => {
  playing.value = true;
  muted.value = true;
  volume.value = 0;
});
</script>

<template>
  <div class="video__wrapper">
    <video
      ref="video"
      @click="playing = !playing"
      :autoplay="true"
      :loop="true"
      :controls="false"
      playsinline
      :poster="props.poster"
    />
    <button class="videoBtn" @click="playing = !playing">
      <svg
        v-if="playing"
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#666666"
      >
        <path
          d="m383-310 267-170-267-170v340Zm97 230q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        height="48px"
        viewBox="0 -960 960 960"
        width="48px"
        fill="#666666"
      >
        <path
          d="M370-320h60v-320h-60v320Zm160 0h60v-320h-60v320ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"
        />
      </svg>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.video__wrapper {
  position: relative;

  width: 100%;
  height: 60vh;

  padding: 20px 0;
  video {
    width: 100%;
    height: 100%;
    border-radius: 40px;

    object-fit: cover;
  }
  .videoBtn {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 50px;
    right: 50px;

    background: #f5f5f5;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: none;

    cursor: pointer;
  }
}

@media (max-width: 1200px) {
  .video__wrapper {
    height: 50vh;
    padding: 0px;
    .videoBtn {
      position: absolute;
      bottom: 40px;
      right: 40px;

      width: 35px;
      height: 35px;
    }
  }
}
</style>

<script setup>
useHead({
  htmlAttrs: {
    lang: "ru",
  },
  meta: [{ name: "yandex-verification", content: "e47f3e029594dc43" }],
  script: [
    {
      innerHTML: `
        (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

        ym(99748077, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true
        });
      `,
      type: "text/javascript",
    },
  ],
  noscript: [
    {
      innerHTML: `
        <div><img src="https://mc.yandex.ru/watch/99748077" style="position:absolute; left:-9999px;" alt="" /></div>      `,
    },
  ],
});
const myStore = useMyStore();
</script>

<template>
  <div class="wrapper">
    <AppHeaderTheHeader />

    <main class="main">
      <div class="container">
        <slot v-if="myStore.navigation.isShowNavigation" />
        <AppHeaderTheHamburgerList v-else />
      </div>
    </main>

    <AppFooterTheFooter />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  min-height: 100vh;
}

.main {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;

  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
}

@media (max-width: 1200px) {
  .nav {
    display: none;
  }
  .container {
    width: 90%;
  }
}
</style>

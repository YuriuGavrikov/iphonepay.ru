<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap");

:root {
  --text-one: rgb(80, 80, 80);
  // var(--text-one);

  --bg-one: rgb(250, 250, 250);
  // var(--bg-one);

  --icon-one: rgb(82, 62, 62);
  // var(--icon-one);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  // border: 1px solid red;
}
html,
body {
  height: 100%;
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;

  color: var(--text-one);
}
a {
  text-decoration: none;
  color: var(--text-one);
}
</style>

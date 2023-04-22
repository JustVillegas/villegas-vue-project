<template>
  <div class="wrapper">
    <h1>404 Page Not Found</h1>
    <router-link class="link" :to="{name: 'homePage'}">Go Home</router-link>
  </div>
</template>

<style scoped>

.wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  background: #1f1f1f;
  color: #ffffff;
}

.link {
  color: #c4c4c4;
  text-decoration: none;
}

.link:hover {
  cursor: pointer;
}

</style>

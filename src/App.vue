<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="stylus">
#app {
  font-family: 'Rubik', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(116.87deg, #211F3A 0%, #131220 100.59%);
}
</style>

<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import navBar from '@/components/navBar'

export default {
  name: 'app',
  components: {
    navBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0px;
  overflow: hidden;
}
</style>

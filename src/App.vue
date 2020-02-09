<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import SearchForm from './components/SearchForm';

export default {
  name: 'App',
  components:{ SearchForm },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family:Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size:16px !important;
  font-weight:600 !important;
  line-height:1.375em !important;
  color:#484848 !important;
}
</style>

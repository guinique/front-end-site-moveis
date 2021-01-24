<template>
  <div id="app">
    <!-- <TelaInicial/> -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
// import TelaInicial from './components/TelaInicial.vue'

export default {
  name: 'App',
  components: {
    // TelaInicial
  }
}
</script>

<style>
html,body,#app{
  height: 100%;
  width: 100%;
}

</style>

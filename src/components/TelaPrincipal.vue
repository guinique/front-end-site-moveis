<template>
  <div>
    <Menu/>
    <!-- <ConteudoInicial/> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
// import ConteudoInicial from '@/components/ConteudoInicial.vue'

export default {
  name:"TelaPrincipal",
  components: {
    Menu
    // ConteudoInicial,
  }
}
</script>

<style scoped>

</style>
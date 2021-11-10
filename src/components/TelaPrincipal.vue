<template>
    <div>
        <Menu @toggleSidebar="toggleSidebar()" />
        <!-- <ConteudoInicial/> -->
        <sui-sidebar-pushable>
            <sui-menu is="sui-sidebar" :visible="sidebarVisible" animation="overlay" width="thin" icon="labeled" inverted vertical>
                <sui-menu-item @click="$router.push('/Galeria')"> <sui-icon name="images" /> Galeria </sui-menu-item>
                <sui-menu-item @click="$router.push('/Visualizar3D')">
                    <img src="../assets/imgs/icon3D.png" alt="" style="width: 50px; margin-bottom: 2px" />
                    <div>Visualização 3D</div>
                </sui-menu-item>
                <sui-menu-item @click="$router.push('/Sobre')"> <sui-icon name="info" /> Sobre </sui-menu-item>
            </sui-menu>
            <sui-sidebar-pusher>
                <router-view></router-view>
            </sui-sidebar-pusher>
        </sui-sidebar-pushable>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
// import ConteudoInicial from '@/components/ConteudoInicial.vue'

export default {
    name: 'TelaPrincipal',
    data() {
        return {
            sidebarVisible: false
        }
    },
    components: {
        Menu
        // ConteudoInicial,
    },
    methods: {
        toggleSidebar() {
            this.sidebarVisible = !this.sidebarVisible
        }
    }
}
</script>

<style scoped></style>

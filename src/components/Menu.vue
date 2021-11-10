<template>
    <div id="pai">
        <sui-icon @click="toggleSidebar()" size="big" class="menu-icon" name="bars" />
        <div class="navs" @click="$router.push('/TelaPrincipal')">
            <img src="../assets/logo.jpg" alt="" />
        </div>
        <span id="txtLogo">Nique móveis planejados</span>
        <div id="menus">
            <div class="navs" @click="$router.push('/Galeria')">
                <span>Galeria</span>
            </div>
            <div class="navs" @click="$router.push('/Visualizar3D')">
                <span>Visualização 3D</span>
            </div>
            <div class="navs" @click="$router.push('/Sobre')">
                <span>Sobre</span>
            </div>
        </div>
        <div id="login">
            <div v-if="this.getToken" class="email">
                <span> Bem-vindo {{ this.email }}! </span>
            </div>
            <div v-else class="navs" style="color: rgb(201, 185, 165);" @click="$router.push('/Login')">
                <i class="fas fa-sign-in-alt fa-lg"></i>
            </div>
        </div>
        <div id="contatos">
            <div class="navs">
                <i class="fab fa-facebook-square fa-lg"></i>
            </div>
            <div class="navs">
                <i class="fab fa-whatsapp-square fa-lg"></i>
            </div>
            <div class="navs">
                <i class="fas fa-envelope-square fa-lg"></i>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    data() {
        return {
            info: null
        }
    },
    methods: {
        toggleSidebar() {
            console.log(this)
            this.$emit('toggleSidebar')
        }
    },
    mounted() {},
    computed: {
        ...mapState('user', ['email']),
        ...mapGetters('user', ['getToken']),
        isAuth() {
            console.log(this.getToken)
            return 0
        }
    }
}
</script>

<style scoped>
/* #sidebar{
      position:absolute;
    } */

#login {
    width: 200px;
    display: flex;
    justify-content: center;
}

@media (max-width: 1000px) {
    #menus > *,
    #contatos > * {
        display: none;
        /* border:2px solid red; */
    }
    #pai > .navs > img {
        margin-left: 0;
    }
    .menu-icon {
        color: white;
        margin: 0 20px;
        /* line-height: 56px; */
        /* font-size: 40px; */
        cursor: pointer;
    }
}
@media (min-width: 1001px) {
    .menu-icon {
        display: none;
    }
}
#pai {
    width: 100vw;
    background-color: #1b1b1b;
    height: 95px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-evenly;
}
img {
    margin-left: 50px;
    /* border:3px solid#1b1b1b; */
    border-radius: 5px;
    height: 70px;
    width: auto;
}
#txtLogo {
    color: rgb(201, 185, 165);
    margin-left: 10px;
    font-family: 'Kanit';
    font-size: 20px;
    font-weight: bolder;
}
#menus {
    color: rgb(201, 185, 165);
    /* padding-right: 110px; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-family: 'Kanit', sans-serif;
    font-weight: 400;
    font-size: 20px;
}

#menus > .navs {
    border-bottom: 2px solid rgb(201, 185, 165);
}
#menus > .navs:hover {
    padding: 10px;
    transition-duration: 0.3s;
}
/* #menus>span{
      padding-bottom: 10px;
      border-bottom: 2px solid  rgb(201, 185, 165);
    } */
#contatos {
    color: rgb(201, 185, 165);
    display: flex;
    justify-content: space-evenly;
    width: 100px;
    margin-right: 20px;
}
.navs {
    cursor: pointer;
    padding: 5px;
}
.navs:hover {
    color: white;
}

.email {
    color: white;
    padding: 5px;
    white-space: nowrap;
    padding-right: 100px;
}
</style>

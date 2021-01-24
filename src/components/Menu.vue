<template>
  <div id="pai">
    <div class="navs" @click="$router.push('/TelaPrincipal')">
      <img src="../assets/logo.jpg" alt="">
    </div>
    <span id="txtLogo">Nique móveis planejados</span>
    <div id="menus">
      <div class="navs" @click="$router.push('/Galeria')">
        <span>Galeria</span>
      </div>
      <div class="navs" @click="$router.push('/Visualizar3D')">
        <span>Visualização 3D</span>
      </div>
      <div class="navs" @click="$router.push('/VisualizarAR')">
        <span>Teste visualização AR</span>
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
export default {
  name:"Menu"
}
</script>

<style scoped>
    #pai{
        background-color: #1b1b1b;
        height: 95px;
        display:flex;
        align-items: center;
        padding: 0 10px;
        justify-content: space-evenly;
    }
    img{
      margin-left:80px;
      /* border:3px solid#1b1b1b; */
      border-radius: 5px;
      height: 70px;
      width: auto;
    }
    #txtLogo{
      color:rgb(201, 185, 165);
      margin-left:10px;
      font-family: 'Kanit';
      font-size: 20px;
      font-weight: bolder;
    }
    #menus{
      color:rgb(201, 185, 165);
      padding-right:110px;
      width: 100%;
      display:flex;
      align-items: center;
      justify-content: space-evenly;
      font-family: 'Kanit', sans-serif;
      font-weight: 200;
      font-size: 20px;
    }
    /* #menus>span{
      padding-bottom: 10px;
      border-bottom: 2px solid  rgb(201, 185, 165);
    } */
    #contatos{
      color:rgb(201, 185, 165);
      display: flex;
      justify-content: space-evenly;
      width:100px;
    }
    .navs{
      cursor: pointer;
    }
    .navs:hover{
      color:white;
    }
</style>
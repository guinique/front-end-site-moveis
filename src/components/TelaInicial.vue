<template>
    <div id="pai">
        <div id="conteiner">
            <div id="logo">
                <img src="../assets/logo.jpg" />
            </div>
            <div id="titulo">
                <p>Nique móveis planejados</p>
            </div>

            <!-- <router-link v-if="$route.meta.goTo" :to="$route.meta.goTo"> -->
            <div @click="$router.push('/TelaPrincipal')">
                <sui-button secondary content="Ir para o site" id="btnEntrar" />
            </div>
            <!-- </router-link> -->
            <!-- <div style="height:200px"></div> -->

            <!-- <model-viewer src="gbdr.glb" auto-rotate camera-controls></model-viewer> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'TelaInicial'
}
</script>

<style scoped>
#pai {
    padding-top: 20px;
    height: 100%;
    width: 100vw;
    background-image: url('../assets/imgs/img (5).jpg');
    background-size: cover;
}

#conteiner {
    margin: 0 auto;
    border-radius: 25%;
    /* border:2px solid red; */
    backdrop-filter: blur(5px);
    width: 500px;
    max-width: 100%;
}

#logo > img {
    width: 300px;
}
#logo {
    text-align: center;
    padding-top: 70px;
}
#logo > img {
    /* border:3px solid black; */
    border-radius: 50px;
}
#titulo {
    font-family: 'Kanit';
    font-weight: 100;
    margin-top: 40px;
    text-align: center;
    font-size: 40px;
    font-weight: 300;
    color: black;
}
#btnEntrar {
    /* width: 200px; */
    font-size: 20px;
    margin: 40px auto;
    display: block;
    font-family: 'Exo', sans-serif;
}
</style>
>

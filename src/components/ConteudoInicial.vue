<template>
    <div id="pai">
        <img src="../assets/imgs/imgWide (1).jpg" alt="" />
        <img src="../assets/imgs/imgWide (2).jpg" alt="" />
    </div>
</template>

<script>
export default {
    name: 'ConteudoInicial'
}
</script>

<style scoped>
#pai {
    padding: 0 50px;
    height: calc(100vh - 95px);
}
img {
    margin-top: 40px;
    /* max-height: 400px; */
    width: 100%;
    filter: blur(2px);
}
</style>

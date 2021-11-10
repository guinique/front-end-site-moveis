<template>
    <div id="pai">
        <sui-grid :columns="3">
            <sui-grid-row>
                <sui-grid-column>
                    <img src="../assets/imgs/img (1).jpg" alt="" />
                </sui-grid-column>
                <sui-grid-column>
                    <img src="../assets/imgs/img (1).jpg" alt="" />
                </sui-grid-column>
                <sui-grid-column>
                    <img src="../assets/imgs/img (1).jpg" alt="" />
                </sui-grid-column>
            </sui-grid-row>

            <sui-grid-row>
                <sui-grid-column>
                    <img src="../assets/imgs/img (1).jpg" alt="" />
                </sui-grid-column>
                <sui-grid-column>
                    <img src="../assets/imgs/img (1).jpg" alt="" />
                </sui-grid-column>
                <sui-grid-column>
                    <img src="../assets/imgs/img (1).jpg" alt="" />
                </sui-grid-column>
            </sui-grid-row>
        </sui-grid>
    </div>
</template>

<script>
export default {
    name: 'Galeria'
}
</script>

<style scoped>
img {
    width: 100%;
}
#pai {
    padding: 30px 50px;
    height: calc(100vh - 95px);
}
</style>

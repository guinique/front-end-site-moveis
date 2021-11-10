<template>
    <div id="pai">
        <div id="txt">
            <span>Utilize o menu para visualizar os modelos 3D disponíveis</span>
            <div>{{ this.$isMobile() }}</div>
        </div>

        <div id="conteiner-modelos">
            <div v-for="(model, i) of models" :key="i" class="modelos">
                <sui-card class="conteiner-card">
                    <sui-icon class="expand-icon" name="expand" />
                    <model-viewer
                        class="modelo3D-card"
                        :skybox-image="hdr"
                        data-js-focus-visible
                        :src="model"
                        auto-rotate
                        @click="openModal(model)"
                    ></model-viewer>

                    <sui-card-content class="cards">
                        <sui-card-header>{{ filtraNome(models[i][1]) }}</sui-card-header>
                        <!-- <sui-card-meta>Joined in 2013</sui-card-meta> -->
                        <!-- <sui-card-description>Kristy is an art director living in New York.</sui-card-description> -->
                    </sui-card-content>
                </sui-card>
            </div>
        </div>

        <!-- Modal -->
        <sui-modal v-model="open">
            <sui-modal-content :style="'background-color:' + corBg">
                <div class="conteiner-modal-modelo">
                    <!-- <model-viewer 
                        :skybox-image="hdr" 
                        data-js-focus-visible 
                        style="width:100%;height:500px" 
                        :src="source" 
                        camera-controls 
                        class="modal-modelo" 
                        ar>
                    </model-viewer> -->
                    <model-viewer
                        :skybox-image="hdr"
                        data-js-focus-visible
                        style="width: 100%; height: 500px"
                        :src="source"
                        camera-controls
                        class="modal-modelo"
                        ar-mode="scene-viewer"
                        ar
                    >
                    </model-viewer>

                    <!-- <model-viewer
                        src="./Armario.glb"
                        alt="A 3D model of an astronaut"
                        auto-rotate
                        camera-controls
                        ar
                    ></model-viewer> -->
                </div>
            </sui-modal-content>
            <sui-modal-content extra>
                <div class="conteiner-hdr-fundo">
                    <sui-button class="white btn-cor" circular @click="changeBg('white')" content="White" />
                    <sui-button class="btn-cor" circular color="grey" @click="changeBg('lightgray')" content="Lightgray" />
                    <div class="btns-hdr">
                        <img class="btn-hdr mr-2" :src="iconsHDR[0]" @click="changeHDR('hdr1.hdr')" />
                        <img class="btn-hdr mr-2" :src="iconsHDR[1]" @click="changeHDR('hdr2.hdr')" />
                        <img class="btn-hdr" :src="iconsHDR[2]" @click="changeHDR('hdr3.hdr')" />
                    </div>
                </div>
            </sui-modal-content>
        </sui-modal>
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/storage'

export default {
    name: 'Visualizar3D',
    data() {
        return {
            models: [],
            open: false,
            source: null,
            corBg: 'lightgray',
            iconsHDR: [],
            hdr: null
        }
    },
    mounted() {
        this.getImg(), this.getHDR()
    },
    methods: {
        isMobile() {
            console.log(this.$isMobile())
            return this.$isMobile()
        },

        changeHDR(hdr) {
            this.hdr = hdr
        },

        filtraNome(nome) {
            return nome.replace('.glb', '').replaceAll('_', ' ')
        },

        changeBg(cor) {
            this.hdr = null
            this.corBg = cor
            console.log(this.corBg)
        },

        openModal(url) {
            this.source = url
            this.open = !this.open
        },

        async getImg() {
            var storage = firebase.storage()

            // Create a storage reference from our storage service
            var storageRef = storage.ref()

            var listRef = storageRef.child('Modelos')

            let listaItems = await listRef.listAll()
            for (let item of listaItems.items) {
                let url = await item.getDownloadURL()
                let nome = await item.name
                this.models.push([url, nome])
            }
        },

        async getHDR() {
            var storage = firebase.storage()

            // Create a storage reference from our storage service
            var storageRef = storage.ref()

            var listRef = storageRef.child('HDR/Icones')

            let listaItems = await listRef.listAll()

            for (let item of listaItems.items) {
                let imgURL = await item.getDownloadURL()
                this.iconsHDR.push(imgURL)
            }
        }
    }
}
</script>

<style scoped lang="scss">
.iconAR {
    transform: rotate(180deg);
    width: 50px;
    position: absolute;
    top: 40px;
    right: 40px;
}
.camera-icon {
    position: absolute;
    left: 85%;
    top: 10%;
}

.expand-icon {
    display: none;
}
.conteiner-card:hover > .expand-icon {
    display: block;
    transition-duration: 0.3s;
}
.expand-icon {
    position: absolute;
    left: 90%;
    top: 5%;
}

.btn-cor {
    width: 100px;
    height: 50px;
}
.white.btn-cor {
    background-color: white;
    border: 2px solid black;
    color: black;
}
.cards {
    background-color: #1b1b1b !important ;
}

.cards > * {
    color: white !important;
}

.conteiner-fundo {
    /* border:2px solid red; */
    display: flex;
    justify-content: left;
}

.conteiner-cores-fundo {
    /* border:2px solid red; */
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    line-height: 50px;
}
.modelo3D-card {
    width: 100%;
    cursor: pointer;
}

#conteiner-modelos {
    padding: 0 40px 0 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 40px;
}

.modelos {
    margin: 10px;
}

.conteiner-modal-modelo {
    display: flex;
    justify-content: center;
}

.btn-hdr {
    cursor: pointer;
    width: 50px;
    height: 50px;
    max-width: 100%;
}

.mr-2 {
    margin-right: 30px;
}

.btns-hdr {
    display: flex;
    justify-content: space-between;
}
.conteiner-hdr-fundo {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

#txt {
    margin-top: 20px;
    /* border: 2px solid red; */
    text-align: center;
    font-family: 'Kanit';
    font-weight: 400;
    font-size: 20px;
}
</style>

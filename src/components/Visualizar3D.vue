<template>
    <div id="pai">
        <div id="txt">
            <span>Utilize o menu para visualizar os modelos 3D disponíveis</span>
        </div>


        <div id="container-modelos">
            <div v-for="(model,i) of models" :key="i" class="modelos">
            <sui-card >
                <model-viewer class="modelo3D-card" data-js-focus-visible :src="model" auto-rotate @click="openModal(model)"></model-viewer>
                <sui-card-content class="cards">
                    <sui-card-header>{{filtraNome(models[i][1])}}</sui-card-header>
                    <!-- <sui-card-meta>Joined in 2013</sui-card-meta> -->
                    <!-- <sui-card-description>Kristy is an art director living in New York.</sui-card-description> -->
                </sui-card-content>
            </sui-card>

            </div>
        </div>

        <!-- Modal -->
        <sui-modal v-model="open">
            <sui-modal-content   :style="'background-color:'+corBg">
                <div class="container-modal-modelo">
                    <model-viewer :skybox-image="hdr" data-js-focus-visible style="width:100%;height:500px" :src="source" camera-controls class="modal-modelo"></model-viewer>
                </div>
            </sui-modal-content>
            <sui-modal-content extra>
                <div class="container-fundo">
                    <div class="container-cores-fundo">
                        <span>Cor fundo</span>
                        <sui-button circular color="red" @click="changeBg($event.target.innerHTML)" content="Red" />
                        <sui-button circular color="orange" @click="changeBg($event.target.innerHTML)" content="Orange" />
                        <sui-button circular color="yellow" @click="changeBg($event.target.innerHTML)" content="Yellow" />
                    </div>
                    <div class="container-hdr-fundo">
                        <span>HDR</span>
                        <img class="btn-hdr" :src="iconsHDR[0]" @click="changeHDR('hdr1.hdr')" >
                        <img class="btn-hdr" :src="iconsHDR[1]" @click="changeHDR('hdr2.hdr')" >
                        <img class="btn-hdr" :src="iconsHDR[2]" @click="changeHDR('hdr3.hdr')" >
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
    name:"Visualizar3D",
    data(){
        return {
            models:[],
            open:false,
            source: null,
            corBg: "lightgray",
            iconsHDR: [],
            hdr:null
        }
    },
    mounted(){
        this.getImg(),
        this.getHDR()
    },
    methods:{

        changeHDR(hdr){
            var storage = firebase.storage()

            var storageRef = storage.ref()


            storageRef.child('HDR/'+hdr).getDownloadURL().then((url) =>{
                console.log(url)
                this.hdr = url
            }).catch(function(e){
                console.log(e)
            })

            
        },

        filtraNome(nome){
            return nome.replace(".glb","").replaceAll("_"," ")
        },

        changeBg(cor){
            this.corBg = cor
        },

        openModal(url){
            this.source = url
            this.open = !this.open;
        },

        async getImg(){
            var storage = firebase.storage()

            // Create a storage reference from our storage service
            var storageRef = storage.ref()

            var  listRef = storageRef.child('Modelos')

            let listaItems = await listRef.listAll()
            for(let item of listaItems.items){
                let url = await item.getDownloadURL()
                let nome = await item.name
                this.models.push([url,nome])
            }
        },

        async getHDR(){
            var storage = firebase.storage()

            // Create a storage reference from our storage service
            var storageRef = storage.ref()

            var  listRef = storageRef.child('HDR/Icones')

            let listaItems = await listRef.listAll()

            for(let item of listaItems.items){
                let imgURL = await item.getDownloadURL()
                this.iconsHDR.push(imgURL)
            }
        },
    }
}
</script>

<style scoped>
    .cards{
        background-color: #1b1b1b !important ;
    }

    .cards>*{
        color:white !important;
    }

    .container-fundo{
        /* border:2px solid red; */
        display:flex;
        justify-content: left;
    }

    .container-cores-fundo{
        /* border:2px solid red; */
        width:50%;
        display: flex;
        justify-content: space-evenly;
        line-height: 50px;
    }
    .modelo3D-card{
        width: 100%;
        cursor: pointer;
    }

    #container-modelos{
        display:flex;
        flex-wrap: wrap;
        /* justify-content: space-between; */
        margin: 40px;
    }

    .modelos{
        margin:10px;
    }

    .container-modal-modelo{
        display: flex;
        justify-content: center;
    }

    .modal-modelo{
        /* border: 2px solid blue; */
    }

    .btn-hdr{
        cursor: pointer;
        width: 50px;
    }

    .container-hdr-fundo{
        line-height: 50px;
        width: 50%;
        display:flex;
        justify-content: space-evenly;
    }

    #txt{
        margin-top: 20px;
        /* border: 2px solid red; */
        text-align: center;
        font-family: 'Kanit';
        font-weight: 400;
        font-size: 20px;
    }
</style>
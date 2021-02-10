<template>
    <div id="pai">
        <div id="txt">
            <span>Utilize o menu para visualizar os modelos 3D disponíveis</span>
        </div>

        <div id="container-modelos">
            <div v-for="(model,i) of models" :key="i" class="modelos">
                <model-viewer :src="model" auto-rotate camera-controls @click="openModal(model)"></model-viewer>
            </div>
        </div>

        <!-- Modal -->
        <sui-modal v-model="open">
            <sui-modal-content class="container-modal-modelo">
                <model-viewer :src="source" auto-rotate camera-controls class="modal-modelo"></model-viewer>
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
        }
    },
    mounted(){
        this.getImg()
    },
    methods:{
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
                this.models.push(url)
            }

        }
    }
}
</script>

<style scoped>
    #container-modelos{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 40px;
    }
    .modelos{
        border:2px solid red;
        margin:5px;
    }
    .container-modal-modelo{
        display: flex;
        justify-content:center;
        border: 2px solid red;
        
    }
    .modal-modelo{
        border: 2px solid blue;
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
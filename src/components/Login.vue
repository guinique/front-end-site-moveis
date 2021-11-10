<template>
    <div id="pai">
        <div id="conteiner">
            <div id="logo">
                <img src="../assets/logo.jpg" alt="" width="80px" />
            </div>

            <div id="form-conteiner">
                <div id="user">
                    <div class="ui left icon input">
                        <input v-model="usuario" type="text" placeholder="Usuario" />
                        <i class="users icon"></i>
                    </div>
                </div>

                <div id="senha">
                    <div class="ui left icon input">
                        <input v-model="senha" type="text" placeholder="Senha" />
                        <i class="lock icon"></i>
                    </div>
                </div>
                <button @click="login" id="btn-login" class="ui button">LOGIN</button>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
    name: 'Login',
    data() {
        return {
            usuario: null,
            senha: null,
            info: null
        }
    },
    methods: {
        ...mapActions('user', ['setUser']),
        login() {
            console.log(this.usuario)
            console.log(this.senha)
            axios
                .post('http://localhost:3000/users/auth', {
                    email: this.usuario,
                    password: this.senha
                })
                .then(response => {
                    let token = response.data.token
                    console.log(response.data)
                    this.setUser({ email: this.usuario, token: token })
                })
                .catch(err => {
                    console.error(err.response)
                })
        }
    }
}
</script>

<style scoped>
#pai {
    padding-top: 20px;
    height: 100%;
    width: 100vw;
    background-color: #b8c6db;
    background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
    background-size: cover;
    display: flex;
    flex-direction: column;
    /* border: 2px solid green; */
    justify-content: center;
}

#conteiner {
    margin: 0 auto;
    border-radius: 25px;
    /* border:2px solid red; */
    background-color: #485461;
    background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);
    width: 500px;
    height: 350px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

#user,
#senha {
    width: 100%;
    margin-bottom: 20px;
    margin-top: 20px;
}

#user :first-child,
#senha :first-child {
    width: 300px;
}

#logo {
    /* border: 2px solid red; */
    margin-top: 40px;
}

#logo > img {
    border-radius: 50%;
}

#btn-login {
    width: 100%;
    background-color: lightgray;
}
</style>

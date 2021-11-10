import Vue from 'vue'
import Router from 'vue-router'
import TelaInicial from '@/components/TelaInicial'
import TelaPrincipal from '@/components/TelaPrincipal'
import Galeria from '@/components/Galeria'
import ConteudoInicial from '@/components/ConteudoInicial'
import Visualizar3D from '@/components/Visualizar3D'
import Sobre from '@/components/Sobre'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: TelaInicial
        },
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/TelaPrincipal',
            component: TelaPrincipal,
            children: [
                {
                    path: '/',
                    component: ConteudoInicial
                },
                {
                    path: '/Galeria',
                    name: 'Galeria',
                    component: Galeria
                },
                {
                    path: '/Visualizar3D',
                    name: 'Visualizar3D',
                    component: Visualizar3D
                },
                {
                    path: '/Sobre',
                    name: 'Sobre',
                    component: Sobre
                }
            ]
        }
    ]
})
// export default new Router({
//     mode: 'history',
//     routes:[
//         {
//             path:"/",
//             redirect:"/TelaInicial"
//         },
//         {
//             path:"/TelaInicial",
//             component:TelaInicial,
//             meta:{
//                 goTo:"/TelaPrincipal"
//             }
//         },
//         {
//             path:"/TelaPrincipal",
//             component:TelaPrincipal,
//             meta:{
//                 goTo:"/Galeria",
//             },
//             children: [
//                 {
//                     path:"/",
//                     component:ConteudoInicial
//                 },
//                 {
//                     path:"Galeria",
//                     component: Galeria
//                 },
//                 {
//                     path:"Visualizar3D",
//                     component: Visualizar3D
//                 }
//             ]
//         }
//     ]

// })

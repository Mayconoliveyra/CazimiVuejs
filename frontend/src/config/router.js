import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/Home"
import MaisVendidos from "../components/pages/MaisVendidos"
import Eletrica from "../components/pages/Eletrica"
import Tubos from "../components/pages/Tubos"
import Ferragens from "../components/pages/Ferragens"
import Tintas from "../components/pages/Tintas"
import ReformasConstrucao from "../components/pages/ReformasConstrucao"

Vue.use(VueRouter)

const routes = [{
    name: "home",
    path: "/",
    component: Home
},
{
    name: "maisVendidos",
    path: "/maisVendidos",
    component: MaisVendidos
},
{
    name: "eletrica",
    path: "/produtos_grupo_eletrica",
    component: Eletrica
},
{
    name: "tubos",
    path: "/produtos_grupo_tubos",
    component: Tubos
},
{
    name: "ferragens",
    path: "/produtos_grupo_ferragens",
    component: Ferragens
},
{
    name: "tintas",
    path: "/produtos_grupo_tintas",
    component: Tintas
},
{
    name: "reformasConstrucao",
    path: "/produtos_grupo_reformas_construcao",
    component: ReformasConstrucao
},
]

export default new VueRouter({
    mode: "history",
    routes
})
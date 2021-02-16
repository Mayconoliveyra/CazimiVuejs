import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/home/Home"
import MaisVendidos from "../components/pages/MaisVendidos"

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
}
]

export default new VueRouter({
    mode: "history",
    routes
})
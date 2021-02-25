<template>
  <div class="home">
    <carousel>
      <carousel-slide> 
        <a href="produtos_grupo_eletrica">
          <img src="https://bravoenergy.com.br/fotos/banner_1.jpg">
        </a>
      </carousel-slide>
      <carousel-slide> 
        <a href="produtos_grupo_reformas_construcao">
        <img src="https://banco.bradesco/assets/classic/img/produtos-servicos/imoveis/produtos/banner-cdc-material-de-construcao.jpg">
         </a>
      </carousel-slide>
      <carousel-slide> 
        <a href="produtos_grupo_tintas">
        <img src="https://www.taqi.com.br/file/general/banner-taqi-categoria-tintas-e-acessorios-desk-111220.jpg">
         </a>
      </carousel-slide>
    </carousel>
      <Secao title="Produtos que podem lhe interessar" :mercadorias="mercadorias"/>
      <Secao title="Produtos em alta" :mercadorias="mercadorias"/>
      <Secao title="Produtos que podem lhe interessar" :mercadorias="mercadorias"/>
      <Secao title="Produtos que podem lhe interessar" :mercadorias="mercadorias"/>
  </div>
</template>

<script>
import CarouselSlide from "./components/carousel/CarouselSlide.vue";
import Carousel from "./components/carousel/Carousel.vue";
import Secao from "./components/Secao.vue";

import axios from "axios";
import { baseApiUrl } from "../../../global";

export default {
  name: "home",
  components: { Carousel, CarouselSlide, Secao },
  data: function() {
    return {
      mercadorias: [],
      mercadoriasMaisVendidos: [],
      todos: [
        {
          name: "Demo",
          completed: true
        }
      ]
    };
  },
  methods: {
    loadMercadorias() {
      const urlEletrica = `${baseApiUrl}/produtos_grupo_eletrica`;
      axios.get(urlEletrica).then(res => {
        this.mercadorias = res.data;
      });
      const urlMaisVendidos = `${baseApiUrl}/`;
      axios.get(urlMaisVendidos).then(res => {
        this.mercadoriasMaisVendidos = res.data;
      });
    },
    addTodo() {
      this.todos.push({
        name: "Jean",
        completed: false
      });
    }
  },
  mounted() {
    this.loadMercadorias();
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 7vw;
  width: auto;
}
.home img {
  width: 100%;
  height: 100%;
}
</style>
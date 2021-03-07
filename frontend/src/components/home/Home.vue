<template>
  <div class="home">
    <Carousel class="container-fluid" id="Carousel">
      <CarouselSlide> 
        <a href="produtos_grupo_eletrica">
          <img src="https://bravoenergy.com.br/fotos/banner_1.jpg">
        </a>
      </CarouselSlide>
      <CarouselSlide> 
        <a href="produtos_grupo_reformas_construcao">
        <img src="https://banco.bradesco/assets/classic/img/produtos-servicos/imoveis/produtos/banner-cdc-material-de-construcao.jpg">
         </a>
      </CarouselSlide>
      <CarouselSlide> 
        <a href="produtos_grupo_tintas">
        <img src="https://www.taqi.com.br/file/general/banner-taqi-categoria-tintas-e-acessorios-desk-111220.jpg">
         </a>
      </CarouselSlide>
    </Carousel>

      <Secao title="Produtos que podem lhe interessar" :mercadorias="mercadorias"/>
      <Secao title="Produtos mais vendidos" :mercadorias="mercadorias"/>
      <Secao title="Material para construção ou reforma" :mercadorias="mercadorias"/>
      <Secao title="Farragem e armações" :mercadorias="mercadorias"/>
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
      const urlEletrica = `${baseApiUrl}/`;
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
#Carousel {
max-width: 1300px;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.home img {
  width: 100%;
  height: 100%;
}
</style>
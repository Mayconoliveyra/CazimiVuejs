<template>
  <div class="home">
   <!--  <Secao title="Produtos que podem lhe interessar" :mercadorias="mercadorias"/> -->
    <carousel>
      <carousel-slide> Salut les gens </carousel-slide>
      <carousel-slide> Aurevoir les gens </carousel-slide>
    </carousel>
    <todos v-model="todos"> </todos>>
  </div>
</template>

<script>
import CarouselSlide from "./components/carousel/CarouselSlide.vue";
import Carousel from "./components/carousel/Carousel.vue";
import Todos from "./components/Todos";

import axios from "axios";
import { baseApiUrl } from "../../../global";

export default {
  name: "home",
  components: { Carousel, Todos, CarouselSlide },
  data: function() {
    return {
      mercadorias: [],
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
      const url = `${baseApiUrl}/produtos_grupo_eletrica`;
      axios.get(url).then(res => {
        this.mercadorias = res.data;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0px 10%;
}
</style>
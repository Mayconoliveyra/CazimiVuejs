<template>
  <div class="home">
    <Secao title="Produtos que podem lhe interessar" :propsm="mercadorias"/>
    
   
  </div>
</template>

<script>
/* import  Carousel from "./components/Carousel.vue" */
import  Secao from "./components/Secao.vue"
import axios from "axios";
import { baseApiUrl } from "../../../global";

export default {
  name: "home",
  components: { Secao },
  data: function() {
    return {
      mercadorias: []
    };
  },
  methods: {
    loadMercadorias() {
      const url = `${baseApiUrl}/`;
      axios.get(url).then(res => {
        this.mercadorias = res.data;
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
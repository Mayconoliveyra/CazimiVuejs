<template>
  <div class="home">
    <MercadoriasExibir
      v-for="mercadoria in mercadorias"
      :idItem="mercadoria['Código da Mercadoria']"
      :key="mercadoria['Código da Mercadoria']"
      :descricao="mercadoria.Mercadoria"
      :precoVenda="mercadoria['Preço de Venda']"
      :urlImagemMercadoria="mercadoria.url"
    />
  </div>
</template>

<script>
import MercadoriasExibir from "../template/MercadoriasExibir";
import axios from "axios";
import { baseApiUrl } from "../../../global";

export default {
  name: "home",
  components: { MercadoriasExibir },
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
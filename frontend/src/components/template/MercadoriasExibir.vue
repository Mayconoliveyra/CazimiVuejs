<template>
  <div class="mercadoriaConteiner">
    <div class="imageMercaodira">
      <!-- <img :src="require(`@/assets/${urlImagemMercadoria}`)" alt="mercadoria" /> -->
      <img :src="urlImagemMercadoria" alt="mercadoria" />
    </div>
    <div class="descricaoMercadoria">
      {{ descricao }}
    </div>
    <div class="precoMercadoria">
      <sup>R$</sup><span class="spanMercadoriaDescricao">{{   
          precoVenda
            .toFixed(2)
            .replace(".", ",")
            .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
         }}
      </span>
    
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "mercadoriaExibir",
  props: {
    descricao: String,
    precoVenda: Number,
    urlImagemMercadoria: String,
    idItem: Number
  }
};
</script>

<style>
.mercadoriaConteiner {
  width: 215px;
  height: 385px;
  margin: 10px;
}

.mercadoriaConteiner:hover {
  border: solid 3px rgb(95, 93, 93);
}

.mercadoriaConteiner .imageMercaodira {
  padding: 10px;
}
.mercadoriaConteiner img {
  width: 100%;
  height: 100%;
}
.imageMercaodira {
  width: 100%;
  height: 67%;
}
.mercadoriaConteiner .descricaoMercadoria {
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  padding: 5px 3px;
  height: 15%;
  overflow: hidden;
}
.mercadoriaConteiner .precoMercadoria {
  text-align: center;
  font-size: 19px;
}
.mercadoriaConteiner .precoMercadoria .spanMercadoriaDescricao {
  font-weight: 500;
  font-size: 24px;
}

.comprarAddCarrinho {
  display: flex;
}
</style>
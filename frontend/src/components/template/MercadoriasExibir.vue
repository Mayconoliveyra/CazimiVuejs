<template>
  <div class="mercadoriaConteiner">
    <div class="imageMercaodira">
      <img :src="require(`@/assets/${urlImagemMercadoria}`)" alt="mercadoria" />
    </div>
    <div class="descricaoMercadoria">
      {{ descricao }}
    </div>
    <div class="precoMercadoria">
      R$
      {{
        precoVenda
          .toFixed(2)
          .replace(".", ",")
          .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
      }}
    </div>
    <div class="comprarAddCarrinho">
      <button title="comprar" id="btnComprar" >Comprar</button>
      <button title="carrinho" id="btnCarrinho">Carrinho</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "mercadoriaExibir",
  props: {
    descricao: String,
    precoVenda: String,
    urlImagemMercadoria: String,
    idItem: Number,
  },
};
</script>

<style>
.mercadoriaConteiner {
  width: 200px;
  height: 330px;
  margin: 8px;
  background-color: rgb(245, 246, 247);
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
.mercadoriaConteiner .descricaoMercadoria {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 700;
  padding: 10px;
}
.mercadoriaConteiner .precoMercadoria {
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-weight: 900;
  font-size: 18px;
}

.comprarAddCarrinho {
    display: flex;

}

#btnComprar{
    width: 100%;
    
}
#btnCarrinho{
    width: 100%;
}
</style>
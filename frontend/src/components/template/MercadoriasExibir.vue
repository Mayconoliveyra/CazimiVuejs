<template>
  <router-link to="/maisVendidos" class="routerMercadorias">
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
      </div>
  </router-link>
 
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
  height: 350px;
  margin: 10px;
  border-bottom: solid 1px #9c9e9e;
}

.mercadoriaConteiner:hover {
  border: solid 1px rgb(242, 241, 241);
}

.mercadoriaConteiner .imageMercaodira {
  padding: 15px;
}
.mercadoriaConteiner img {
  width: 100%;
  height: 100%;
}
.imageMercaodira {
  width: 100%;
  height: 70%;
}
.mercadoriaConteiner .descricaoMercadoria {
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 3px;
  height: 17%;
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

.routerMercadorias {
  color: #0f1111 !important;
}

.routerMercadorias:hover {
  text-decoration: none;
  text-decoration-color: none;
}
</style>
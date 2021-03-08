<template>
  <router-link
    to="/maisVendidos"
    id="routerMercadorias_xs"
    v-if="this.$mq !== 'xs'"
  >
    <div class="mercadoriaConteiner">
      <div class="imageMercaodira">
        <!-- <img :src="require(`@/assets/${urlImagemMercadoria}`)" alt="mercadoria" /> -->
        <img :src="urlImagemMercadoria" alt="mercadoria" />
      </div>
      <div class="descricaoMercadoria">
        {{ descricao }}
      </div>
      <div class="precoMercadoria">
        <sup>R$</sup
        ><span class="spanMercadoriaDescricao"
          >{{
            precoVenda
              .toFixed(2)
              .replace(".", ",")
              .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
          }}
        </span>
      </div>
    </div>
  </router-link>
  <router-link to="/maisVendidos" class="routerMercadorias" v-else>
    <div id="mercadoriaContainer_xs">
      <div id="img_mercadoria_xs">
        <img :src="urlImagemMercadoria" alt="mercadoria" />
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
    idItem: Number,
  },
};
</script>

<style>
#routerMercadorias_xs {

}
#mercadoriaContainer_xs {
  display: flex;
  width: 100%;
}
#img_mercadoria_xs {
  width: 130px;
  height: 100px;
  padding: 7px;
}
#img_mercadoria_xs img {
  width: 100%;
  height: 100%;
}
/* ##################### EXIBIR LG ################# */
.mercadoriaConteiner {
  width: 14.3vw;
  height: 100%;
  min-width: 265px;
  min-height: 380px;
  margin: 15px;
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
  font-size: 17px;
  font-weight: 500;
  padding: 2px 3px;
  height: 17%;
  overflow: hidden;
}
.mercadoriaConteiner .precoMercadoria {
  text-align: center;
  font-size: 20px;
}
.mercadoriaConteiner .precoMercadoria .spanMercadoriaDescricao {
  font-weight: 400;
  font-size: 27px;
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
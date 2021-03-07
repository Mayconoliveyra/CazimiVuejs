<template>
    <div class="container secao" >
        <div class="titleSecao">
                {{ title }}
        </div>
        <div class="mercadoriaSecao">
            <div id="mercadoriasExibisSecao" v-for="mercadoria in mercadorias" :key="mercadoria['Código da Mercadoria']">
              <a :href="mercadoria['Código da Mercadoria']" class="routerMercadoriasSecao">
                  <div id="imageMercaodiraSecao">
                    <img :src="mercadoria.url" alt="mercadoria" />
                  </div>
                  <div class="descricaoMercadoriaSecao">
                    {{ mercadoria.Mercadoria }}
                  </div>
                  <div class="precoMercadoriaSecao">
                    <sup>R$</sup><span class="spanMercadoriaDescricaoSecao">{{   
                    mercadoria['Preço de Venda']
                      .toFixed(2)
                      .replace(".", ",")
                      .replace(/(\d)(?=(\d{3})+\,)/g, "$1.")
                      }}
                    </span>
                  </div>
              </a>
            </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "Secao",
  props: {
    title: String,
    urlImagemMercadoria: String,
    idItem: Number,
    mercadorias: {}
  }
};
</script>
<style>
.routerMercadoriasSecao {
  display: flex;
  flex-direction: column;
  color: #0f1111 !important;
  align-content: center;
  align-items: center;
}

.routerMercadoriasSecao:hover {
  text-decoration: none;
  text-decoration-color: none;
}

.descricaoMercadoriaSecao {
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 10px;
  height: 55px;
  overflow: hidden;
  margin-top: 7px; 
}

.precoMercadoriaSecao {
  font-weight: 400;
  text-align: center;
  font-size: 22px;
  height: 32px;
  display: flex;
  align-items: center;
}

.spanMercadoriaDescricaoSecao {
  font-weight: 500;
  font-size: 24px;
}

.mercadoriaSecao {
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
}

#mercadoriasExibisSecao {
  width: 14.3vw;
  height: 100%;
  min-width: 214px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 8px;
}

#imageMercaodiraSecao {
  width: 206px;
  height: 200px;
}

#imageMercaodiraSecao img {
  width: 100%;
  height: 100%;
}

.secao {
  background: rgb(255, 255, 255);
  height: 394px;
  margin: 15px;
  border-radius: 15px;
}

.titleSecao {
  margin: 10px 20px;
  font-size: 23px;
  font-weight: 500;
  color: rgb(84, 81, 81);
}

.secao ::-webkit-scrollbar {
  height: 23px;
}
.secao ::-webkit-scrollbar-thumb {
  border-radius: 50px;
  background: rgb(255, 213, 0);
  border: 5px solid rgb(174, 173, 169);
}
.secao ::-webkit-scrollbar-track {
  margin: 8px;
  background: rgb(227, 226, 223); /* color of the tracking area */
  border-radius: 50px;
}
</style>


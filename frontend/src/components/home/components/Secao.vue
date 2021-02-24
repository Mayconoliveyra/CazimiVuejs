<template>
    <div class="secao">
        <div class="titleSecao">
                {{ title }}
        </div>
        <div class="mercadoriaSecao">
          <div id="mercadoriasExibisSecao" v-for="mercadoria in mercadorias" :key="mercadoria['Código da Mercadoria']">
            <div id="imageMercaodiraSecao">
              <img :src="mercadoria.url" alt="mercadoria" />
            </div>
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
.mercadoriaSecao {
  display: flex;
  flex-direction: row;
  color: brown;
  border: solid 1px red;
  width: 100%;
  flex-wrap: wrap;
}
#mercadoriasExibisSecao {
  width: 200px;
  height: 250px
}

#imageMercaodiraSecao {
  width: 250px;
  height: 200px;
}

#imageMercaodiraSecao img {
  width: 100%;
  height: 100%;
}

.secao {
  background: rgb(255, 251, 251);
  margin: 15px 0px;
  height: 300px;
  width: 100%;
}
.titleSecao {
  margin: 10px 20px;
  font-size: 23px;
  font-weight: 500;
  color: rgb(87, 84, 84);
}
</style>


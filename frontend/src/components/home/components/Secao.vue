<template>
    <div class="secao">
        <div class="titleSecao">
                {{ title }}
        </div>
        <div class="mercadoriaSecao">
          <div id="mercadoriasExibisSecao" v-for="mercadorias in propsm" :key="mercadorias['Código da Mercadoria']">
            <div id="imageMercaodiraSecao">
              <img :src="mercadorias.url" alt="mercadoria" />
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
    propsm: {}
  }
};
</script>
<style>
.mercadoriaSecao {
  display: flex;
  flex-direction: row;
  color: brown;
  max-width: 100vw;
}
#mercadoriasExibisSecao {
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
  width: 100%;
  height: 300px;
}
.titleSecao {
  margin: 10px 20px;
  font-size: 23px;
  font-weight: 500;
  color: rgb(87, 84, 84);
}
</style>


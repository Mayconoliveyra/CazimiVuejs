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
  overflow-x: scroll;
}

#mercadoriasExibisSecao {
  width: 14.3vw;
  height: 100%;
  min-width: 265px;
  margin: 0px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
}

#imageMercaodiraSecao {
  width: 206px;
  height: 200px;
}

#imageMercaodiraSecao img {
  width:  100%;
  height: 100%;
}

.secao {
  background: rgb(255, 251, 251);
  height: 290px;
  width: 96%;
  margin: 22px;
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
  margin: 5px; 
  background: rgb(208, 207, 204);        /* color of the tracking area */
  border-radius: 50px;
}
</style>


<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
    </div>
    <form class="inputForm">
        <input type="search" id="inputPesquisa" list="mercadorias" />
        <img src="@/assets/lupa.png" id="btnInputPesquisa" alt="logoLupa">
        <datalist id="mercadorias">
          <option v-for="mercadoria in mercadorias"  :key="mercadoria['Código da Mercadoria']" :value="mercadoria.Mercadoria"></option>
        </datalist>
    </form>
    <div class="utilitario">
      <div class="meuCarrinho">
        <i class="fa fa-shopping-bag fa-3x"></i>
      </div>
      <div class="usuario">
        <i class="fa fa-user-circle-o fa-3x"></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../../../global";
export default {
  name: "Header",
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
.header {
  grid-area: header;
  display: flex;
  flex-direction: row;
  background-color: #263550;
}
/* #############  ############# */

.logo {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo img {
  width: 100%;
  height: 100%;
  padding: 7px;
}
/* #############  ############# */

.inputForm {
  width: 100%;
  padding: 0px 50px;
  display: flex;
  align-items: center;
}

#inputPesquisa {
  height: 45px;
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  background-color: rgb(250, 250, 249);
}

#btnInputPesquisa {
  background-color: rgb(242, 180, 88);
  height: 44px;
  width: 55px;
  padding: 7px 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}

/* #inputPesquisa:focus {
  border: solid 8px rgb(191, 54, 13);
} */

/* #############  ############# */

.utilitario {
  display: flex;
  flex-direction: row;
  width: 270px;
  height: 100%;
}
.meuCarrinho {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(228, 220, 220);
}
.usuario {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(228, 220, 220);
}
</style>
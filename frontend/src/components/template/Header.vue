<template>
  <div class="header" v-if="this.$mq !== 'xs'">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
    </div>
    <form class="inputForm">
      <input type="search" id="inputPesquisa" list="mercadorias" />
      <img src="@/assets/lupa.png" id="btnInputPesquisa" alt="logoLupa" />
      <datalist id="mercadorias">
        <option
          v-for="mercadoria in mercadorias"
          :key="mercadoria['Código da Mercadoria']"
          :value="mercadoria.Mercadoria"
        ></option>
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
  <div class="header" v-else>
    <div id="header_xs">
      <div class="" id="logo_utiliti">
        <a href="/" id="toggle">
          <i class="fa fa-bars fa-2x"></i>
        </a>
        <div id="logo_xs">
          <router-link to="/">
            <img src="@/assets/logo.png" alt="Logo" />
          </router-link>
        </div>
        <div id="utilitario_xs">
          <div id="usuario_xs">
            <i class="fa fa-user-circle-o fa-2x"></i>
          </div>
          <div id="meuCarrinho_xs">
            <i class="fa fa-shopping-bag fa-2x"></i>
          </div>
        </div>
      </div>
      <div id="inputPesq_xs">
        <form class="inputForm">
          <input type="search" id="inputPesquisa_xs" list="mercadorias" />
          <img
            src="@/assets/lupa.png"
            id="btnInputPesquisa_xs"
            alt="logoLupa"
          />
          <datalist id="mercadorias">
            <option
              v-for="mercadoria in mercadorias"
              :key="mercadoria['Código da Mercadoria']"
              :value="mercadoria.Mercadoria"
            ></option>
          </datalist>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../../../global";
export default {
  name: "Header",
  data: function () {
    return {
      mercadorias: [],
    };
  },
  methods: {
    loadMercadorias() {
      const url = `${baseApiUrl}/`;
      axios.get(url).then((res) => {
        this.mercadorias = res.data;
      });
    },
  },
  mounted() {
    this.loadMercadorias();
  },
};
</script>

<style>
/* ####################################  HEADER XS ##################################### */
#toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 100%;
  color: black;
}
#inputPesquisa_xs {
  height: 33px;
  width: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  background-color: rgb(250, 250, 249);
  border: none;
}
#btnInputPesquisa_xs {
  background-color: rgb(242, 180, 88);
  height: 33.9px;
  width: 70px;
  padding: 4px 18px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  cursor: pointer;
}
#inputPesq_xs {
  padding-top: 7px;
}
#logo_utiliti {
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header_xs {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
#logo_xs {
  display: flex;
  flex-grow: 1;
  height: 100%;
}
#logo_xs img {
  width: 170px;
  height: 100%;
  padding: 7px 3px;
}
#utilitario_xs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 100%;
}
#usuario_xs {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: solid 2px rgb(125, 124, 124);
  border-radius: 15px;
  margin-right: 2px;
}
#meuCarrinho_xs {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: solid 2px rgb(125, 124, 124);
  border-radius: 15px;
}

/* ####################################  HEADER ##################################### */
.header {
  grid-area: header;
  display: flex;
  flex-direction: row;
  background-color: #8c8d8e;
}
/* #############  ############# */
.logo {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
}
.logo img {
  width: 220px;
  padding: 11px;
}

.logo img:hover {
  border: 1px solid rgb(165, 163, 163);
}
/* #############  ############# */

.inputForm {
  width: 100%;
  padding: 0px 30px;
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
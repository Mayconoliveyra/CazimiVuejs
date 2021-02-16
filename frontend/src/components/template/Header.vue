<template>
  <div class="header">
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/logo.png" alt="Logo" />
      </router-link>
    </div>
    <div class="input">
      <b-input-group class="mt-3">
        <b-form-input></b-form-input>
      </b-input-group>
    </div>
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
export default {
  name: "Header",
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

.input {
  width: 100%;
  padding: 0px 50px;
}
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
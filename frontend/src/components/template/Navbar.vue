<template>
  <div class="navbarr">
      <router-link to="/maisVendidos" class="itemNav">
         Mais Vendidos
      </router-link>
      <router-link to="/" class="itemNav">
         Elétrica
      </router-link>
      <router-link to="/" class="itemNav">
         Tubos
      </router-link>
      <router-link to="/" class="itemNav">
         Ferragens
      </router-link>
      <router-link to="/" class="itemNav">
         Titas
      </router-link>
      <router-link to="/" class="itemNav">
         Reformas e Construção
      </router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
.navbarr {
  grid-area: navbarr;
  background-color: rgb(20, 35, 56);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 3px;
}
/* #############  ############# */

.navbarr .itemNav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  text-decoration: none;
  text-decoration-color: none;
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size:  15px;
  border-left: 1px solid rgb(33, 51, 75);
  border-right: 1px solid rgb(33, 51, 75);
}

.navbarr .itemNav:hover {
  border: 1px solid rgb(165, 163, 163);
  border-radius: 7px;
}
</style>
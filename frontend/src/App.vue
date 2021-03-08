<template>
  <div id="app">
    <Header />
    <Navbar />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/template/Header";
import Navbar from "./components/template/Navbar";
import Content from "./components/template/Content";
import Footer from "./components/template/Footer";

export default {
  name: "App",
  components: {
    Header,
    Navbar,
    Content,
    Footer,
  },
};
</script>

<style>
* {
  font-family: inherit, "Lato", sans-serif;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 88px 35px 1fr 80px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "navbarr"
    "content"
    "footer";
}
</style>

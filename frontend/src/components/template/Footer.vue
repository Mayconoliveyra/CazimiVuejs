<template>
  <footer class="footer">
    <span>OLIVERA<strong background="red">DEV</strong><sup>@</sup>{{anoAtual()}}</span>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    anoAtual() {
      const data = new Date();
      return data.getFullYear();
    }
  }
};
</script>

<style>
.footer {
  grid-area: footer;
  background-color: #232f3e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ddd;
}
</style>
<template>
  <div class="content">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style>
.content {
  grid-area: content;
  background: rgb(255, 251, 251);
  padding: 10px;
  
}
</style>
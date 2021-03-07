<template>
    <div class="container-fluid carouselSlide" v-show="visible">
         <slot id="imgSlid"></slot>
    </div>
</template>
<script>
export default {
  name: "carouselSlide",
  data() {
    return {
      index: 0
    };
  },
  computed: {
    visible() {
      return this.index === this.$parent.index;
    }
  }
};
</script>
<style>
.carouselSlide {
  height: 300px;
  max-width: 1300px;
}

</style>



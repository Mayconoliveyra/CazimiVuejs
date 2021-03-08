<template>
    <div class="carouselSlideXS" v-show="visible">
         <slot id="imgSlid"></slot>
    </div>
</template>
<script>
export default {
  name: "carouselSlideXS",
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
.carouselSlideXS {
  height: 150px;
  width: 100%;
}

</style>



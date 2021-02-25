<template>
    <div class="carouselSlide" v-show="visible">
         <slot></slot>
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
  width: 100%;
}

</style>



<template>
    <div class="carouselSlide" v-show="visible">
        Index: {{ index }}
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
</style>



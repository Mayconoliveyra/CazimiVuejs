<template>
     <div class="carouselXS">
        <slot></slot>
        <button class="carouselXS__nav carouselXS__next" @click.prevent="next"><i class="fa fa-angle-right fa-3x" aria-hidden="true"></i></button>
        <button class="carouselXS__nav carouselXS__prev" @click.prevent="prev"><i class="fa fa-angle-left fa-3x" aria-hidden="true"></i></button>
      </div>  
</template>
<script>
export default {
  name: "carouselXS",
  data() {
    return {
      index: 0,
      slides: []
    };
  },
  mounted() {
    this.slides = this.$children;
    this.slides.forEach((slide, i) => {
      slide.index = i;
    });
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    }
  },
  methods: {
    next() {
      this.index++;
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    }
  }
};
</script>
<style>
.carouselXS {
  position: relative;
}

.carouselXS__nav {
  position: absolute;
  padding-bottom: 13px ;
  top: 4%;
  height: 91%;
  background: transparent;
  width: 60px;
}

.carouselXS__nav.carouselXS__next {
  right: 1px;
  left: auto;
}
.carouselXS button {
border: none;
}
.carouselXS button:focus {
  outline-style: none;
}

</style>




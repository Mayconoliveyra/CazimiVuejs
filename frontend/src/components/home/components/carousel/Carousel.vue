<template>
     <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__next" @click.prevent="next"><i class="fa fa-angle-right fa-5x" aria-hidden="true"></i></button>
        <button class="carousel__nav carousel__prev" @click.prevent="prev"><i class="fa fa-angle-left fa-5x" aria-hidden="true"></i></button>
      </div>  
</template>
<script>
export default {
  name: "carousel",
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
.carousel {
  position: relative;
}

.carousel__nav {
  position: absolute;
  top: 6%;
  left: 30px;
  height: 91%;
  background: transparent;
  width: 60px;
}

.carousel__nav.carousel__next {
  right: 30px;
  left: auto;
}
.carousel button {
border: none;
}
.carousel button:focus {
  outline-style: none;
}

</style>




<template>
  <div class="navigation">
    <div
      v-for="n in storiesCount"
      :key="n"
      ref="stories"
      :v-bind:ref="'nav-' + n"
      class="navigation-element"
      :style="{ width: 'calc(95% / ' + storiesCount + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    storiesCount: Number
  },
  mounted() {
    this.$root.$on('ActiveNavigation', currentIndex => {
      for (let _i = 0; _i < this.storiesCount; _i++) {
        this.$refs.stories[_i].style.backgroundColor = '#9e9e9e'
      }

      this.$refs.stories[currentIndex].style.backgroundColor = '#fff'
    })
  }
}
</script>

<style>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 95vw;
  top: 15px;
  align-self: center;
  z-index: 2;
}

.navigation-element {
  border-radius: 2px;
  height: 3px;
  background: #9e9e9e;
}

.navigation-active {
  background: #fff;
}

@media only screen and (min-width: 600px) {
  .navigation {
    width: 405px;
    top: 11px;
  }
}
</style>

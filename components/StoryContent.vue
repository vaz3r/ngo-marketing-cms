<template>
  <div v-touch:swipe="swipeHandler" class="story-parent">
    <div
      v-touch:swipe="swipeHandler"
      class="story-content"
      :style="{
        'background-image': 'url(' + storyImage + ')'
      }"
    ></div>
    <div class="info-block">
      <h1>{{ storyHeadline }}</h1>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

let currentIndex = 0

export default {
  props: {
    rawData: Object
  },
  data: function() {
    return {
      storyImage: this.rawData.stories[currentIndex].image,
      storyHeadline: this.rawData.stories[currentIndex].content
    }
  },
  mounted() {
    this.$root.$emit('ActiveNavigation', currentIndex)
  },
  methods: {
    swipeHandler(direction) {
      if (direction !== undefined) {
        switch (direction) {
          case 'left':
            currentIndex += 1
            this.$root.$emit('ActiveNavigation', currentIndex)
            this.storyImage = this.rawData.stories[currentIndex].image
            this.storyHeadline = this.rawData.stories[currentIndex].content
            break
          case 'right':
            currentIndex -= 1
            this.$root.$emit('ActiveNavigation', currentIndex)
            this.storyImage = this.rawData.stories[currentIndex].image
            this.storyHeadline = this.rawData.stories[currentIndex].content
            break
          case 'top':
            this.storyHeadline = 'top'
            break
          case 'bottom':
            this.storyHeadline = 'bottom'
            break
        }
      }
    },
    next: function(event) {
      this.storyImg = '/rehash-trash/3.jpeg'
    }
  }
}
</script>

<style>
.story-content {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  background-position: center;
  background-size: cover;
  animation: zoomin 10s ease-in infinite;
  transition: all 0.5s ease-in-out;
  z-index: 1;
}

.story-parent {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.story-content img {
  width: 100%;
  height: 100%;
}

.info-block {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  justify-content: center;
  align-items: center;
}

.info-block h1 {
  text-align: center;
  margin: 0;
  background-color: #00bcd4ad;
  padding: 25px 5px;
}
@media only screen and (min-width: 600px) {
  .story-content {
    width: 420px;
  }
}

/* Zoom in Keyframes */
@-webkit-keyframes zoomin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes zoomin {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
} /*End of Zoom in Keyframes */
</style>

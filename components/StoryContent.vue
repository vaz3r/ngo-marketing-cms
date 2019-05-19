<template>
  <div v-touch:swipe="swipeHandler" class="story-parent">
    <div
      class="story-content"
      :style="{
        'background-image': 'url(' + storyImage + ')'
      }"
    ></div>
    <div class="info-block">
      <h1 ref="Headline">{{ storyHeadline }}</h1>
    </div>
    <div ref="ctaBlock" class="cta-block" @click="ctaClick">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="284.929px"
        height="284.929px"
        viewBox="0 0 284.929 284.929"
        style="enable-background:new 0 0 284.929 284.929;"
        xml:space="preserve"
      >
        <g>
          <path
            d="M282.082,195.285L149.028,62.24c-1.901-1.903-4.088-2.856-6.562-2.856s-4.665,0.953-6.567,2.856L2.856,195.285
		C0.95,197.191,0,199.378,0,201.853c0,2.474,0.953,4.664,2.856,6.566l14.272,14.271c1.903,1.903,4.093,2.854,6.567,2.854
		c2.474,0,4.664-0.951,6.567-2.854l112.204-112.202l112.208,112.209c1.902,1.903,4.093,2.848,6.563,2.848
		c2.478,0,4.668-0.951,6.57-2.848l14.274-14.277c1.902-1.902,2.847-4.093,2.847-6.566
		C284.929,199.378,283.984,197.188,282.082,195.285z"
          />
        </g>
      </svg>

      <span>{{ buttonLabel }}</span>
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
      storyHeadline: this.rawData.stories[currentIndex].headline,
      ctaEnabled: this.rawData.stories[currentIndex].ctaEnabled,
      buttonLabel: this.rawData.stories[currentIndex].button.label
    }
  },
  mounted() {
    this.$root.$emit('ActiveNavigation', currentIndex)
  },
  methods: {
    ctaClick() {
      const ctaButton = this.rawData.stories[currentIndex].button

      if (ctaButton !== undefined) {
        switch (ctaButton.action) {
          case 'webpage':
            const win = window.open(ctaButton.result, '_blank')
            win.focus()
            break
        }
      }
    },
    swipeHandler(direction) {
      if (direction !== undefined) {
        switch (direction) {
          case 'left':
            if (currentIndex < this.rawData.stories.length - 1) {
              currentIndex += 1
              this.changeStory()
            }
            break
          case 'right':
            if (currentIndex > 0) {
              currentIndex -= 1
              this.changeStory()
            }
            break
          case 'top':
            break
          case 'bottom':
            break
        }
      }
    },
    convertHex(hex, opacity) {
      hex = hex.replace('#', '')
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)

      const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
      return result
    },
    changeStory() {
      this.$root.$emit('ActiveNavigation', currentIndex)
      this.$root.$emit('BaseImage', this.rawData.stories[currentIndex].image)
      this.storyImage = this.rawData.stories[currentIndex].image
      this.storyHeadline = this.rawData.stories[currentIndex].headline

      if (this.rawData.stories[currentIndex].ctaEnabled === 'true') {
        this.$refs.ctaBlock.style.display = 'flex'
        this.buttonLabel = this.rawData.stories[currentIndex].button.label
      } else {
        this.$refs.ctaBlock.style.display = 'none'
      }

      this.$refs.Headline.style.backgroundColor = this.convertHex(
        this.rawData.stories[currentIndex].headlineColor,
        this.rawData.stories[currentIndex].headlineOpacity
      )
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
  background-color: rgba(0, 188, 212, 0.7);
  padding: 25px 20px;
  font-size: 2rem;
}

.cta-block {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: 1;
  position: absolute;
  justify-content: flex-end;
  align-items: center;
  bottom: 0;
  background-image: linear-gradient(#00000008, #151515);
  cursor: pointer;
}

.cta-block svg {
  width: 35px;
  height: 35px;
  fill: #fff;
}

.cta-block span {
  margin-bottom: 20px;
  margin-top: 2px;
  font-size: 1.2rem;
  font-weight: 600;
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

<template>
  <div class="story-parent">
    <div
      class="story-content"
      :style="{ 'background-image': 'url(' + storyImg + ')' }"
    ></div>
    <div class="info-block">
      <h1>{{ storyHeadline }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    storyImg: String,
    storyHeadline: String
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
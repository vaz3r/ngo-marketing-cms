<template>
  <div ref="baseContainer" class="base">
    <section>
      <BaseStory v-if="isValid" :raw-data="rawData" />
      <StoryException v-else />
    </section>
  </div>
</template>

<style>
.base {
  background-position: center;
  background-size: cover;
}
section {
  background: #262626fa;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;
}
</style>

<script>
import BaseStory from '~/components/BaseStory.vue'
import StoryException from '~/components/StoryException.vue'
import axios from 'axios'

export default {
  components: {
    BaseStory,
    StoryException
  },
  data: function() {
    return {
      query: String
    }
  },
  async asyncData({ route }) {
    const response = await axios
      .get('http://www.mocky.io/v2/5cdfd16a3300001212608b2f')
      .catch(e => {
        return { isValid: false }
      })

    if (response.data !== undefined) {
      return {
        rawData: response.data,
        isValid: true
      }
    } else {
      return { isValid: false }
    }
  },
  created() {
    this.query = this.$route.query.id
    this.$root.$on('BaseImage', baseImage => {
      this.$refs.baseContainer.style.backgroundImage =
        "url('" + baseImage + "')"
    })
  }
}
</script>

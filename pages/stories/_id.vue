<template>
  <section>
    <BaseStory v-if="isValid" :raw-data="rawData" />
    <StoryException v-else />
  </section>
</template>

<style>
section {
  background: #262626;
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
  async asyncData({ route }) {
    const response = await axios
      .get('http://www.mocky.io/v2/5cde98713000002b00430a39')
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
  }
}
</script>

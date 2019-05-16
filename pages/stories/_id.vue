<template>
  <section>
    <BaseStory :raw-data="rawData" />
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
import axios from 'axios'

export default {
  components: {
    BaseStory
  },
  async asyncData() {
    const res = await axios.get(
      'http://www.mocky.io/v2/5cdd13d23000000426e23493'
    )

    return {
      rawData: res.data
    }
  }
}
</script>

<template>
  <section>
    <BaseStory />
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

export default {
  components: {
    BaseStory
  }
}
</script>

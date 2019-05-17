<template>
  <div class="container">
    <StoryHeader :brand-logo="rawData.logo" :brand-name="rawData.brand" />
    <StoryNavigation :stories-count="rawData.stories.length" />
    <StoryContent :raw-data="rawData" />
  </div>
</template>

<style>
.container {
  display: flex;
  width: 100vw;
  flex-direction: column;
}

@media only screen and (min-width: 600px) {
  .container {
    width: 420px;
    margin-bottom: 0px;
  }
}
</style>

<script>
import StoryHeader from '~/components/StoryHeader.vue'
import StoryNavigation from '~/components/StoryNavigation.vue'
import StoryContent from '~/components/StoryContent.vue'

export default {
  components: {
    StoryHeader,
    StoryNavigation,
    StoryContent
  },
  props: {
    rawData: Object
  }
}
</script>

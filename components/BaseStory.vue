<template>
  <div class="container">
    <StoryHeader />
    <StoryNavigation />
    <StoryContent />
  </div>
</template>

<style>
.container {
  display: flex;
  width: 363.375px;
  flex-direction: column;
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
  }
}
</script>

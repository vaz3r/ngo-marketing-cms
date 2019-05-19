<template>
  <div>
    <script src="http://localhost:8098"></script>
    <h1>{{ query }}</h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      query: String
    }
  },
  mounted() {
    this.query = this.$route.query.id
  }
}
</script>

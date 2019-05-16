<template>
  <div class="header">
    <img src="/rehash-trash/logo.jpeg" />
    <a>Rehash Trash {{ id }}</a>
  </div>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 26px;
}

.header img {
  border-radius: 50%;
  height: 40px;
  margin-right: 3%;
}

.header a {
  font-weight: 700;
  font-size: 1rem;
}
</style>

<script>
export default {
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

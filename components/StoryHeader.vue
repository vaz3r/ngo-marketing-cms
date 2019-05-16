<template>
  <div class="header">
    <img :src="brandLogo" />
    <a>{{ brandName }}</a>
  </div>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-left: 9px;
  position: absolute;
  top: 30px;
  width: 95vw;
  z-index: 2;
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

@media only screen and (min-width: 600px) {
  .header {
    margin-left: 10px;
    width: 405px;
    top: 25px;
  }
}
</style>

<script>
export default {
  props: {
    brandLogo: String,
    brandName: String
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  }
}
</script>

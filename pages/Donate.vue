<template>
  <div ref="baseContainer" class="base">
    <script src="http://localhost:8098"></script>
    <section>
      <div class="container">
        <Donate />
      </div>
    </section>
  </div>
</template>

<style>
.base {
  background-position: center;
  background-size: cover;
}

section {
  background: #eeeeee;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100%;
}

.container {
  display: flex;
  width: 100vw;
  flex-direction: column;
  background-color: #fff;
}

@media only screen and (min-width: 600px) {
  .container {
    width: 420px;
    margin: 20px 0;
  }
}
</style>
<script>
import Donate from '~/components/Donate.vue'

export default {
  components: {
    Donate
  }
}
</script>

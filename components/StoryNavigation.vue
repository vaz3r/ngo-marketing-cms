<template>
  <div class="navigation">
    <div class="navigation-element"></div>
    <div class="navigation-element"></div>
    <div class="navigation-element"></div>
  </div>
</template>
<style>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
}

.navigation-element {
  border-radius: 2px;
  height: 3px;
  width: calc(95% / 3);
  background: #fff;
}
</style>

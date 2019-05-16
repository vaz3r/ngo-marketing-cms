<template>
  <div class="navigation">
    <div class="navigation-element navigation-active"></div>
    <div class="navigation-element"></div>
    <div class="navigation-element"></div>
  </div>
</template>
<style>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  width: 95vw;
  top: 15px;
  align-self: center;
  z-index: 2;
}

.navigation-element {
  border-radius: 2px;
  height: 3px;
  width: calc(95% / 3);
  background: #9e9e9e;
}

.navigation-active {
  background: #fff;
}

@media only screen and (min-width: 600px) {
  .navigation {
    width: 405px;
    top: 11px;
  }
}
</style>

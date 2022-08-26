<template>
  <footer>
    <p>© 2022 Mirko Fasoli. Tutti i diritti riservati</p>
  </footer>
</template>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

footer{
  height: 60px;
  @include flex();
  font-weight: 300;
  font-size: 12px;
}

</style>

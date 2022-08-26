<template>
  <section :class="{ colorReverse: isColorReverse }">
    <i></i>
    <i></i>
    <i></i>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IconMenuMobileClose",
  data: () => ({
    isColorReverse: false,
  }),
  watch: {
    $route() {
      this.$route.name == "contacts"
        ? (this.isColorReverse = true)
        : (this.isColorReverse = false);
    },
  },
  created() {
    this.$route.name == "contacts"
      ? (this.isColorReverse = true)
      : (this.isColorReverse = false);
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

.IconMenuMobileClose {
  z-index: -10;
  width: 24px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  &:hover {
    i:first-child {
      transform: translate(-50%, -50%);
      left: 50%;
    }
    i:last-child {
      transform: translate(50%, -50%);
      right: 50%;
    }
  }
}

.IconMenuMobileClose.visible {
  z-index: 10;
}

i {
  display: block;
  width: 5px;
  height: 5px;
  background-color: $white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transition: all 0.3s;
  transform: translate(0, -50%);
  &:first-child {
    left: 0;
  }
  &:nth-child(2) {
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:last-child {
    right: 0;
  }
}

.colorReverse {
  i {
    background-color: $background;
  }
}
</style>

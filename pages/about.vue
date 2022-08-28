<template>
  <div class="container">
    <h1>About</h1>
    <i @click="en = rue">🇬🇧</i><i @click="en = false">🇮🇹</i>
    <div v-if="en" class="text" v-html="bio.en"></div>
    <div v-else class="text" v-html="bio.ita"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AboutPage",
  data() {
    return {
      en: true,
      bio: {},
    };
  },
  async fetch() {
    this.bio = await fetch(`${process.env.BASE_URL}/api/getBiographies`).then(
      res => res.json()
    );
    console.log(this.bio);
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

.container {
  min-height: 100vh;
  padding-bottom: 40px;
}
i {
  font-size: 30px;
  margin-right: 10px;
  display: inline-block;
  cursor: pointer;
  &:hover {
    animation: bounce 0.8s;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  }
}

.text {
  height: 500px;
  margin-top: 20px;
  font-size: 20px;
  line-height: 136%;
  column-count: 2;
  column-gap: 50px;
  @media screen and (max-width: 750px) {
    column-count: 1;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 146%;
  }
}
</style>

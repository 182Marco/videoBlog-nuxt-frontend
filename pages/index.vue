<template>
  <div class="container">
    <h1>Works</h1>
    <!-- <i class="input-box">
      <i class="fa-solid fa-magnifying-glass" @click="putFocus()"></i>
      <input
        ref="input"
        :class="{ visible: searchInput }"
        type="text"
        placeholder="Search a work"
        @keyup="search"
        v-model="searchedText"
    /></i> -->
    <section v-for="category in categories" :key="`v_${category.id}`">
      <figure
        v-if="category.img"
        @click="$router.push({ path: `/works/${category.slug}` })"
      >
        <nuxt-img
          :src="category.img"
          :alt="`${category.name} image`"
          fit="cover"
        />
        <!-- <div class="layer"></div> -->
        <h2>{{ category.name }}</h2>
        <div class="frame"></div>
      </figure>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "IndexPage",
  data: () => ({
    searched: [],
    searchedText: "",
    searchInput: false,
    categories: [],
  }),
  async fetch() {
    this.categories = await fetch(
      `${process.env.BASE_URL}/api/getCategories`
    ).then(res => res.json());
  },
  head: () => {
    return {
      title: "regista Fasoli-Homepage",
      meta: [
        {
          hid: "Homepage sito regista Mirko Fasoli",
          name: "Homepage sito regista Mirko Fasoli",
          description: "Esposizizone dei lavori principali",
          content: "Esposizizone dei lavori principali",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

template {
  background-color: $background;
}

.container {
  min-height: 100vh;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}

section {
  @include flex(column, flex-start);
  width: 100%;
  margin-bottom: 60px;
  padding: 1px solid $background;
  figure {
    cursor: pointer;
    width: 100%;
    position: relative;
    background-color: $background;
    transition: all 0.3s;
    @include flex();
    img {
      width: 100%;
    }
    h2,
    .layer,
    .frame {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h2 {
      opacity: 0;
      transition: opacity 0.3s ease-out;
      white-space: nowrap;
      font-size: 43px;
      font-weight: 700;
      @media screen and (max-width: 740px) {
        font-size: 37px;
      }
      @media screen and (max-width: 620px) {
         opacity: 1;
      }
      @media screen and (max-width: 570px) {
        font-size: 6vw;
      }
    }
    .frame {
      width: 101%;
      height: 101%;
      clip-path: polygon(
        0 0,
        0% 100%,
        1.5% 100%,
        1.5% 1.5%,
        98.5% 1.5%,
        98.5% 98.5%,
        0 98.5%,
        0 100%,
        100% 100%,
        100% 0
      );
      transition: 0.4s ease-out;
      background-color: $background;
    }
    &:hover h2 {
      opacity: 1;
    }
    &:hover .frame {
      clip-path: polygon(
        0% 0%,
        0% 100%,
        0 100%,
        0 0,
        100% 0,
        100% 100%,
        0 100%,
        0 100%,
        100% 100%,
        100% 0%
      );
    }
    // .layer {
    //   width: 100%;
    //   height: 100%;
    //   background-color: #14141445;
    // }
  }
}
</style>

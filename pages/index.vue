<template>
  <div class="container">
    <h1>Works</h1>
    <i class="input-box">
      <i class="fa-solid fa-magnifying-glass" @click="putFocus()"></i>
      <input
        ref="input"
        :class="{ visible: searchInput }"
        type="text"
        placeholder="Search a work"
        @keyup="search"
        v-model="searchedText"
    /></i>
    <section v-if="!searchedText">
      <figure v-for="category in categories" :key="`v_${category.id}`">
        <NuxtLink :to="`/works/${category.slug}`"><h2>{{ category.name }}</h2></NuxtLink>  
      </figure>
    </section>
    <section v-else>
      <figure v-if="`${searched !== 'not found'}`">
        <div v-for="s in searched" :key="`s_${s.id}`">
          <iframe :src="s.url">{{ s.title }}</iframe>
          <h2>{{ s.title }}</h2>
          <p>{{ s.credits }}</p>
        </div>
      </figure>
      <div v-else>Nessun video ha un match con la ricerca</div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
    async asyncData({ $axios }: any) {
    const categories = await $axios.$get(`${process.env.BASE_URL}/api/getCategories`);
    return { categories };
  },
  name: "IndexPage",
  data: () => ({
    searched: [],
    searchedText: "",
    searchInput: false,
  }),
  head: () => {
    return {
      title: "Homepage sito regista Mirko Fasoli",
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
  created() {
  },
  methods: {
    async search() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/api/getVideos/${this.searchedText}`
        );
        this.searched = res.data;
      } catch (er) {
        console.log("this is the error calling getVideos/${searched}", er);
      }
    },
    async getCategoies() {
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/api/getCategories/`
        );
      } catch (er) {
        console.log("this is the error calling categories", er);
      }
    },
    putFocus() {
      this.searchInput = !this.searchInput;
      setTimeout(
        () =>
          //@ts-ignore
          this.$refs.input.focus(),
        10
      );
    },
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/utility.scss";

template {
  background-color: $background;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}
h2 {
  font-size: 20px;
}

.input-box {
  margin-bottom: 20px;
  @include flex(row, flex-start);
}

.fa-magnifying-glass {
  font-size: 25px;
  cursor: pointer;
  margin-right: 12px;
}

input {
  width: 0;
  padding: 0;
  transition: all 0.3s;
  border: 1px solid $background;
  font-size: 20px;
  font-weight: 300;
  &.visible {
    border-color: $white;
    padding: 10px 20px;
    width: 230px;
  }
}
section {
  @include flex(column, flex-start);
  width: 100%;
  figure {
    &:hover {
      transform: scale(1.01);
    }
    iframe {
      cursor: pointer;
      border: none;
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

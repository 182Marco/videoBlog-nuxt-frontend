<template>
  <div class="work">
    <div class="container">
      <h1>Works user view</h1>
      <input
        type="text"
        placeholder="search a work"
        @keyup="search"
        v-model="searchedText"
      />
      <section v-if="!hasSearched">
        <div v-for="video in videos" :key="`v_${video.id}`">
          <iframe :src="video.url">{{ video.title }}</iframe>
          <h2>{{ video.title }}</h2>
          <p>{{ video.credits }}</p>
        </div>
      </section>
      <section v-else>
        <div v-if="`${searched !== 'not found'}`">
          <div v-for="s in searched" :key="`s_${s.id}`">
            <iframe :src="s.url">{{ s.title }}</iframe>
            <h2>{{ s.title }}</h2>
            <p>{{ s.credits }}</p>
          </div>
        </div>
        <div v-else>Nessun video ha un match con la ricerca</div>
      </section>
    </div>
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
    hasSearched: false,
  }),
  head: () => {
  return {
    title: 'Homepage sito regista Mirko Fasoli',
    meta: [
      {
        hid: 'Homepage sito regista Mirko Fasoli',
        name: 'Homepage sito regista Mirko Fasoli',
        description: 'Esposizizone dei lavori principali',
        content: 'Esposizizone dei lavori principali'
      }
    ]
  }
},
  async asyncData({ $axios }: any) {
    const videos = await $axios.$get(
      `${process.env.BASE_URL}/api/getVideos`
    );
    return { videos };
  },
  methods: {
    async search() {
      this.hasSearched = true;
      console.log(this.hasSearched);
      console.log("this searched: ", this.searched);
      try {
        const res = await axios.get(
          `${process.env.BASE_URL}/api/getVideos/${this.searchedText}`
        );
        this.searched = res.data;
      } catch (er) {
        console.log("this is the error calling getVideos/${searched}", er);
      }
    },
  },
});
</script>

<style scoped lang="scss">

 @import "~assets/scss/vars.scss";


template {
  background-color: $background;
}

.work {
  padding-top: 150px;
}

h1,
input {
  margin-bottom: 20px;
  color: red;
}
h2 {
  font-size: 20px;
}
input {
  padding: 10px 20px;
}
section {
  display: grid;
  gap: 50px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
}
iframe {
  width: 100%;
}
</style>

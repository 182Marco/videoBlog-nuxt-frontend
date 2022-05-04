<template>
  <div class="container">
    <h1>Works user view</h1>
    <input
      type="text"
      placeholder="search a work"
      @keyup="search"
      v-model="searchedText"
    />
    <section v-if="!searched.length">
      <div v-for="video in videos" :key="`v_${video.id}`">
        <iframe :src="video.url">{{ video.title }}</iframe>
        <h2>{{ video.title }}</h2>
        <p>{{ video.credits }}</p>
      </div>
    </section>
    <section v-else>
      <div v-for="s in searched" :key="`s_${s.id}`">
        <iframe :src="s.url">{{ s.title }}</iframe>
        <h2>{{ s.title }}</h2>
        <p>{{ s.credits }}</p>
      </div>
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
  }),

  async asyncData({ $axios }: any) {
    const videos = await $axios.$get(`${process.env.BASE_URL}/api/getVideos`);
    return { videos };
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
  },
});
</script>

<style scoped lang="scss">
h1,
input {
  margin-bottom: 20px;
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

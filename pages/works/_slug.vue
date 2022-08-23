<template>
  <div class="container">
    <h1>{{slug}}</h1>
    <ul>
        <li v-for="video in categoryVideos" :key="`vid_${video.id}`">{{video.title}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "WorksSlugPage",
  async asyncData({ params, $axios } : any) {
    const slug = params.slug;
    const categoryVideos = await $axios.$get(`${process.env.BASE_URL}/api/getVideosByCategory/${slug}`);
    return { categoryVideos, slug };
  },
  data: () => ({}),
  created() {},
  head: () => {
    return {
      title: "Pagina che mostra i lavori del regista Mirko Fasoli",
      meta: [
        {
          hid: "Esposizizone dei lavori principali del regista Mirko Fasoli",
          name: "Esposizizone dei lavori principali del regista Mirko Fasoli",
          description: "Esposizizone dei lavori principali",
          content: "Esposizizone dei lavori principali",
        },
      ],
    };
  },
  methods: {},
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/utility.scss";
</style>

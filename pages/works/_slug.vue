<template>
  <div class="container">
    <h1 v-html="formatPageCategory()"></h1>
    <div v-for="(videolist, i) in videos" :key="i">
      <ul v-if="videolist.length">
        <li v-for="video in videolist" :key="`_${video.id}`">
          <figure :style="{ paddingTop: getPaddingTop(video.aspect_ratio) }">
            <iframe
              :src="video.url"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </figure>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export interface Category {
  slug: string;
  name: string;
  id: number;
  img: string;
}

export interface Video {
  slug: string;
  title: string;
  aspect_ratio: string;
  id: number;
}

export default Vue.extend({
  name: "WorksSlugPage",
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  head: () => {
    return {
      title: "Pagina che mostra i lavori del regista Mirko Fasoli",
      meta: [
        {
          hid: "Esposizizone dei lavori principali del regista Mirko Fasoli",
          name: `Regista Fasoli lavori per categoria`,
          description: "Esposizizone dei lavori principali",
          content: "Esposizizone dei lavori principali",
        },
      ],
    };
  },
  data() {
    return {
      categoryVideos: [] as Video[],
      videos: [] as Video[][],
      categories: [] as Category[],
      ClientSideSlug: this.$route.params.slug,
      pageCategory: "",
    };
  },
  async fetch() {
    this.categoryVideos = await fetch(
      `${process.env.BASE_URL}/api/getVideosByCategory/${this.ClientSideSlug}`
    ).then(res => res.json());
    this.categories = await fetch(
      `${process.env.BASE_URL}/api/getCategories`
    ).then(res => res.json());
    this.pageCategory = this.categories.filter(
      c => c.slug == this.ClientSideSlug
    )[0].name;
  },
  watch: {
    categoryVideos() {
      this.videos = [
        this.getVideos(`16:9`),
        this.getVideos(`9:16`),
        this.getVideos(`4:5`),
        this.getVideos(`1:1`),
      ];
    },
  },
  mounted() {},
  methods: {
    getPageCategory() {
      if (this.categories && this.ClientSideSlug) {
        this.pageCategory = this.categories.filter(
          c => c.slug == this.ClientSideSlug
        )[0].name;
        console.log(this.pageCategory);
      }
    },
    asAspectRatio(aspectRatio: string) {
      this.categoryVideos.find(v => v.aspect_ratio == aspectRatio);
    },
    getVideos(ratio: string) {
      const videos: Video[] = this.categoryVideos.filter(
        v => v.aspect_ratio == ratio
      );
      return videos;
    },
    getPaddingTop(ratio: string) {
      const numerator = parseInt(ratio.split(":")[0]);
      const denominator = parseInt(ratio.split(":")[1]);
      return `${(denominator / numerator) * 100}%`;
    },
    formatPageCategory() {
      if (this.pageCategory.includes("/")) {
        return this.pageCategory
          .split("/")
          .map(e => `<span>${e}</span>`)
          .toString()
          .replace(",", "/");
      }
      return this.pageCategory;
    },
  },
});
</script>

<style scoped lang="scss">
@import "~assets/scss/vars.scss";
@import "~assets/scss/mixins.scss";
@import "~assets/scss/utility.scss";
@import "~assets/scss/animations.scss";

h1 {
  height: 301px;
  opacity: 0;
  animation: fade-in 0.5s ease-out forwards;
  @include flex();
  flex-wrap: wrap;
  max-width: 100%;
  @media screen and (max-width: 560px) {
    font-size: 40px;
  }
}

.container {
  min-height: 100vh;
}

ul {
  list-style: none;
  display: grid;
  grid-gap: 30px;
  margin-bottom: 30px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  figure {
    position: relative;
    overflow: hidden;
    width: 100%;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.007);
    }
  }
  li {
    width: 100%;
  }
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>

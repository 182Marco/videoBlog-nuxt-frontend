require("dotenv").config();

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "videoBlog-nuxt-frontend",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "Sito di Mirko Fasoli con esposizione dei lavori più importanti e contatti", name: "VideoBlog Mirko Fasoli", content: "Sito di Mirko Fasoli con esposizione dei lavori più importanti e contatti" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/kFavicon32.ico" },
      { rel:"stylesheet", href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css", integrity:"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==", crossorigin:"anonymous", referrerpolicy:"no-referrer" }
     ],
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/scss/vars.scss",
    "~assets/scss/resets.scss",
    "~assets/scss/utility.scss",
    "~assets/scss/globals.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  vue: {
    config: {
      productionTip: false,
      devtools: false,
    },
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/typescript-build", 
    "@nuxt/image",
    "@nuxtjs/fontawesome",
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faEnvelope'],
      brands: [],
    }
  },

  types: ["@types/node", "@nuxt/types", "@nuxtjs/axios"],

  publicRuntimeConfig: {
    axios: {
      baseURL: "https://api.nuxtjs.dev",
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/dotenv",
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL,
    // || "http://localhost:3000",
  },
};

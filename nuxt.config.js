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
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
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
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  types: ["@types/node", "@nuxt/types", "@nuxtjs/axios"],

  publicRuntimeConfig: {
    axios: {
      baseURL: "https://api.nuxtjs.dev",
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules

  modules: ["@nuxtjs/axios", "@nuxtjs/dotenv"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    baseUrl: process.env.BASE_URL,
    // || "http://localhost:3000",
  },
};

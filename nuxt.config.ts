export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      script: [
        {
          src: "https://platform-api.sharethis.com/js/sharethis.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    // public: {
    //   apiBase: "https://localhost:7012/website/api",
    //   apiMaster: "https://localhost:7049/api/website",
    // },

    public: {
      apiBase: "https://ngo.jazeel.net.sa/website/api",
      apiMaster: "https://master.jazeel.net.sa/api/website",
    },
  },

  devtools: { enabled: true },
  css: [
    "./app/assets/css/main.css",
    "@emran-alhaddad/saudi-riyal-font/index.css",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vueuse/nuxt"],
});

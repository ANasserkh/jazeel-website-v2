export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr:false,
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
    public: {
      apiBase: "https://localhost:7012/website/api",
    },
  },

  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@vueuse/nuxt"],
});

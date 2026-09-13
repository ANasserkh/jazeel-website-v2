export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/moyasar-payment-form@2.2.13/dist/moyasar.css",
          crossorigin: "anonymous",
        },
      ],
      script: [
        {
          hid: "zoho-salesiq",
          innerHTML: `
          			window.$zoho = window.$zoho || {};
	          		$zoho.salesiq = $zoho.salesiq || { ready: function () {} };
        `,
          type: "text/javascript",
        },
        {
          src: "https://salesiq.zohopublic.com/widget?wc=siqff50887ec5f028d14b4dd7b74ac32e65",
          defer: true,
          id: "zsiqscript",
        },
        {
          src: "https://platform-api.sharethis.com/js/sharethis.js",
          async: true,
          defer: true,
        },

        {
          src: "https://platform-api.sharethis.com/js/sharethis.js",
          async: true,
          defer: true,
        },

        {
          src: "https://cdn.jsdelivr.net/npm/moyasar-payment-form@2.2.13/dist/moyasar.umd.min.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      apiMaster: process.env.NUXT_PUBLIC_API_MASTER,
      moyasarPublishableKey: process.env.NUXT_PUBLIC_MOYASAR_PUBLISHABLE_KEY,
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

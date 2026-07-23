export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  app: {
    head: {
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

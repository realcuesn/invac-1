// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  css: ["~/assets/fonts/stylesheet.css", "~/assets/css/main.css"],
  app: {
    head: {
      title: "Invac",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

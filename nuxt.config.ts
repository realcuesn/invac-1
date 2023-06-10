// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: "Invac",
      meta: [
        {
          name: "description",
          content:
            "Central vacuum systems clean dust, allergens, viruses, and pollutants invisible to the naked eye.",
        },
      ],
    },
  },
  css: ["~/assets/css/main.css", "~/assets/fonts/stylesheet.css"],
  modules: ["@vueuse/nuxt", "@nuxt/image-edge", "@nuxtjs/robots"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: true,
});

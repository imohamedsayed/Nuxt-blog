// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt Learning",
      meta: [
        {
          name: "description",
          content: "This is a dummy project to learn nuxt3",
        },
        {
          name: "keywords",
          content: "nuxt, vue, app, learn, website, front-end",
        },
      ],
      link: [
        { rel: "icon", href: "favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});

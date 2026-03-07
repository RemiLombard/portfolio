// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase", "@nuxtjs/google-fonts"],

  components: [
    { path: "~/components/sections", pathPrefix: false },
    "~/components",
  ],

  css: ["~/assets/css/main.css"],

  supabase: {
    redirect: false,
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
  },

  googleFonts: {
    families: {
      Anton: [400],
      Lato: [300, 400, 700],
    },
  },

  app: {
    head: {
      title: "Rémi Lombard | Portfolio",
      meta: [
        {
          name: "description",
          content:
            "Portfolio de Rémi Lombard - Étudiant en BUT MMI, spécialité DWDI",
        },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});

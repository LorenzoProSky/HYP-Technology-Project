// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'Centro MiLA'
    }
  },
  css: ['~/assets/styles/general.css'],

  modules: ['nuxt-icon']
  // modules: ['@nuxtjs/supabase']
})

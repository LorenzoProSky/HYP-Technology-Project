// https://nuxt.com/docs/api/configuration/nuxt-config
export default{
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'Centro MiLA',
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: ['~/assets/styles/general.css'],

  runtimeConfig: {
    public: {
      openaiApiKey: process.env.OPENAI_API_KEY,
    }
  },

  buildModules: [
    '@nuxtjs/dotenv',
  ],

  modules: ['nuxt-icon'],
  // modules: ['@nuxtjs/supabase']

  plugins: ['~/plugins/openai'],
}

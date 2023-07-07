// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  devtools: { enabled: true },
  css: [`assets/globals.css`],
  content: {
    documentDriven: true
  }
})

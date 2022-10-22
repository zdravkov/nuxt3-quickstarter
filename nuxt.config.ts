import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/supabase'],
  pages:true,
  css: [
    '@progress/kendo-theme-default/dist/all.css',
  //  '@/assets/main.css'
  ]
})

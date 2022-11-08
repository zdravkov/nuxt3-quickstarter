import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/content'
  ],
  pages:true,
  css: [
    '@progress/kendo-theme-default/dist/all.css',
  //  '@/assets/main.css'
  ],
  content: {  
      // https://content.nuxtjs.org/api/configuration 
  }
})

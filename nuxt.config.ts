// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1', 
      title: 'My App',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
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

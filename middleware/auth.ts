export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.id === 'test') {
     // return abortNavigation()
      return navigateTo('/')
    }
  })
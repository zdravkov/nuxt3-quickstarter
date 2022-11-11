export default defineNuxtRouteMiddleware((to, from) => {
    console.log(111, to)
    if (to.params.id === 'test') {
     // return abortNavigation()
      return navigateTo('/')
    }
  })
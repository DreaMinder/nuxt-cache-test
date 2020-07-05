module.exports = {
  head: {
    title: 'test'
  },
  target: 'static',
  ssr: true,
  // modules: ['nuxt-netlify-cache'],
  modules: ['@nuxtjs/pwa'],
  generate: {
    routes() {
      return ['/nested', '/nested/index2']
    }
  }
}

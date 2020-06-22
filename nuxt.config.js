module.exports = {
  head: {
    title: 'test'
  },
  target: 'static',
  ssr: true,
  // modules: ['nuxt-netlify-cache'],
  generate: {
    routes() {
      return ['/nested', '/nested/index2']
    }
  }
}

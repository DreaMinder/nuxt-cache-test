const vars = process.env
const keys = Object.keys(process.env).filter(k => !k.includes('npm'))


keys.forEach(k => {
  console.log(vars[k])
})


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

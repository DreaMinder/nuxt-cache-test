module.exports = {
  head: {
    title: 'test'
  },
  hooks: {
    generate: {
      routeFailed ({route, errors}) {
        throw new Error(`Build failed with "${errors[0].error}" on route ${route}. Stopping build.`)
      }
    }
  }
}

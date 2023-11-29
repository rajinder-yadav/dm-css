const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fileServerFolder: 'test',
  fixturesFolder: 'test/fixtures',
  screenshotsFolder: 'test/screenshots',
  videosFolder: 'test/videos',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./test/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
    specPattern: 'test/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})

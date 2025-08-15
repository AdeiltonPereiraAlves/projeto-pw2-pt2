// eslint-disable-next-line @typescript-eslint/no-require-imports
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // node event listeners
    },
    baseUrl: 'http://localhost:5173',
  },
});

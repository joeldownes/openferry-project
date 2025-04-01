import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://openferry.com/',
    viewportWidth: 1280,
    viewportHeight: 800,
    env: {
    },
    setupNodeEvents(on, config) {
      // Your setup code here
    },
  },
});
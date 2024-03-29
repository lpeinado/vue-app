import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

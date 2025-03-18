const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({

  viewportWidth: 1920,
  viewportHeight: 1080,

  e2e: {
    env: {},
    specPattern: "**/**/*.feature",
    supportFile: 'cypress/support/index.js',
    fixture:'cypress/fixtures/*.json',
    "baseUrl": "http://localhost:8080",
    chromeWebSecurity: false,
    modifyObstructiveCode:false,
    "video":true,
    "videoCompression": 0,
    "animationDistanceThreshold": 50,
    "pageLoadTimeout": 120000,
    "defaultCommandTimeout": 60000,
    "requestTimeout": 30000,
    setupNodeEvents,
  },
});
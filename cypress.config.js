const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false,
  pageLoadTimeout:12000,
  watchForFileChanges:false,
  projectId: "ejywtr",
  e2e: {
    baseUrl : "https://www.way2automation.com/angularjs-protractor/banking/#/login",
    reporter: 'mochawesome',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "reportFilename":"testresults",
    "overwrite":"true",
    "html":true,
    "json":true,
    "charts":true,
    quiet: true,
  },

    setupNodeEvents(on, config) {
      
    },
  },
});

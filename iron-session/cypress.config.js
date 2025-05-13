const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // This part it wasn't included from WEB422 page. I just made video: true, in order to show how to;
    //run the code headless which is npm run cypress:headless that do not pop up the cypress prompt to run it
    //therefore it'll run headless in console, and it'll show the video link after compiling it in videos/spec.cy.js.mp4
    //that how to it compiled as a prove or output
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
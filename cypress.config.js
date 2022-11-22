const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.hudl.com/',
    HelpLink: "https://www.hudl.com/login/help",
  },
  screenshotsFolder: "screenshots",
  videosFolder: "videos",
  viewportWidth: 1920,
  viewportHeight: 1080,
});

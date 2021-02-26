module.exports = (wallaby) => {
  // process.env.VUE_CLI_BABEL_TRANSPILE_MODULES = true
  return {
    autoDetect: true,
    reportConsoleErrorAsError: true,
    setup: () => {
      const jestConfig = require('./jest.config.js')
      jestConfig.setupFiles = jestConfig.projects[2].setupFiles
      wallaby.testFramework.configure(jestConfig)
    },
  }
}

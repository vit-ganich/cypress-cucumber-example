/// <reference types="cypress" />

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

const dotenvPlugin = require('cypress-dotenv');
const resolve = require('resolve');
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');

module.exports = (
  on: (event: string, callback: any) => void,
  config: Cypress.PluginConfigOptions,
) => {
  // Cucumber preprocessor
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', {
      basedir: config.projectRoot,
    }),
  };
  on('file:preprocessor', cucumber(options));

  // Dotenv config loading
  config = dotenvPlugin(config);
  return config;
};

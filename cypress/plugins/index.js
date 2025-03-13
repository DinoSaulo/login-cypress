/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const cucumber = require('cypress-cucumber-preprocessor').default;
const browserify = require('@cypress/browserify-preprocessor');
module.exports = (on, config) => {
    const options = {
        ...browserify.defaultOptions,
        typescript: require.resolve('typescript'),
    };

    on('file:preprocessor', cucumber(options));
    on('task', {
        log(message) {
            console.log(message)

            return null
        },
    })
}
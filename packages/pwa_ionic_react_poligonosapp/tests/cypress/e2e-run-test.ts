// e2e-run-tests.js
const cypress = require('cypress');

cypress.run({
    reporter: 'junit',
    browser: 'chrome',
    config: {
        baseUrl: 'http://localhost:8080',
        video: true,
    },
    env: {
        login_url: '/api/login',
        poligonos_url: '/api/v1/poligonos',
    },
})

import { getGreeting } from '../support/app.po';

// require('isomorphic-fetch');

const gqlEndpoint = 'https://poligonosapp-nextjs.netlify.app/v1/polygons';

const gqlEndpointLocalhost = '//localhost:3000/v1/polygons';

describe('poligonosapp-nx-cloud-demo', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome to poligonosapp-nx-cloud-demo!');
  });
});


/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('Pokedex', () => {
  let fetchPolyfill;
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const LOCAL_URL = 'http://127.0.0.1:8080';

  before(() => {
    const polyfillUrl = 'https://unpkg.com/unfetch/dist/unfetch.umd.js';

    cy.request(polyfillUrl)
      .then((response) => {
        fetchPolyfill = response.body;
      });

    cy.server();
    cy.route(`${BASE_URL}1`, 'fixture:bulbasaur')
      .as('callForBulbaInfo');

    cy.visit(LOCAL_URL, {
      onBeforeLoad(contentWindow) {
        // eslint-disable-next-line no-param-reassign
        delete contentWindow.fetch;
        contentWindow.eval(fetchPolyfill);
        // eslint-disable-next-line no-param-reassign
        contentWindow.fetch = contentWindow.unfetch;
      },
    });
  });
});

it('loads the default pokemon', () => {
  const LOCAL_URL = 'http://127.0.0.1:8080';

  cy.visit(LOCAL_URL);

  expect(cy.get('img')).not.to.be.null;

  cy.get('.primary-info')
    .should('contain.text', '#1 Bulbasaur');
  cy.get('.primary-info span')
    .should('have.length', 2);

  cy.get('#info-poke')
    .should('contain.text', '-Weight: 69');
  cy.get('#info-poke')
    .should('contain.text', '-Height: 7');

  cy.get('#abilities-poke')
    .should('contain.text', '-Chlorophyll');
  cy.get('#abilities-poke')
    .should('contain.text', '-Overgrow');

  cy.get('.bar-speed')
    .should('contain.text', 'speed 45');
  cy.get('.bar-sp-def')
    .should('contain.text', 'special-defense 65');
  cy.get('.bar-sp-att')
    .should('contain.text', 'special-attack 65');
  cy.get('.bar-defense')
    .should('contain.text', 'defense 49');
  cy.get('.bar-attack')
    .should('contain.text', 'attack 49');
  cy.get('.bar-hp')
    .should('contain.text', 'hp 45');
});

it('uses navigation buttons to switch pokemons', () => {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const LOCAL_URL = 'http://127.0.0.1:8080';
  const POKEMON = 'Bulbasaur';
  const POKEMON2 = 'Ivysaur';

  cy.server();
  cy.route(`${BASE_URL}1`, 'fixture:bulbasaur')
    .as('callForBulbaInfo');
  cy.route(`${BASE_URL}2`, 'fixture:ivysaur')
    .as('callForIvyInfo');

  cy.visit(LOCAL_URL);
  cy.get('.primary-info').should('contain', POKEMON);

  cy.get('#btn-forw').click();
  cy.get('.primary-info').should('contain', POKEMON2);

  cy.get('#btn-backw').click();
  cy.get('.primary-info').should('contain', POKEMON);
});

it('uses the sprite buttons to change the image displayed', () => {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const LOCAL_URL = 'http://127.0.0.1:8080';

  cy.server();
  cy.route(`${BASE_URL}1`, 'fixture:bulbasaur')
    .as('callForBulbaInfo');
  cy.route(`${BASE_URL}322`, 'fixture:numel')
    .as('callForNumelInfo');

  cy.visit(LOCAL_URL);
  cy.get('#search-input').type('322');
  cy.get('#search-button').click();

  cy.get('img').then(($img) => {
    cy.get('#female').click();
    cy.get('img').then(($newimg) => {
      expect($img).to.not.equal($newimg);
    });
  });

  cy.get('img').then(($img) => {
    cy.get('#shiny').click();
    cy.get('img').then(($newimg) => {
      expect($img).to.not.equal($newimg);
    });
  });

  cy.get('img').then(($img) => {
    cy.get('#male').click();
    cy.get('img').then(($newimg) => {
      expect($img).to.not.equal($newimg);
    });
  });

  cy.get('img').then(($img) => {
    cy.get('#normal').click();
    cy.get('img').then(($newimg) => {
      expect($img).to.not.equal($newimg);
    });
  });
});

it('uses the key shortcuts', () => {
  const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
  const LOCAL_URL = 'http://127.0.0.1:8080';

  cy.server();
  cy.route(`${BASE_URL}1`, 'fixture:bulbasaur')
    .as('callForBulbaInfo');
  cy.route(`${BASE_URL}658`, 'fixture:greninja')
    .as('callForGreninjaInfo');

  cy.visit(LOCAL_URL);

  cy.get('body').type(' ');
  cy.get('#search-input')
    .should('have.focus')
    .type('greninja')
    .type('{enter}');

  cy.get('.primary-info').should('contain', 'Greninja');
});

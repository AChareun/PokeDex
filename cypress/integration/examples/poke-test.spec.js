// eslint-disable-next-line spaced-comment
/// <reference types="cypress" />

context('PokeDex-test', () => {
  beforeEach(() => {
    cy.visit('http://192.168.0.13:8080/');
  });

  it('randoms a pokemon', () => {
    cy.get('#boton-random').click();
    cy.get('img').then(($img) => {
      cy.get('#boton-random').click();
      cy.get('img').then(($newimg) => {
        expect($img).to.not.equal($newimg);
      });
    });
  });
  it('searchs for a specific pokemon', () => {
    cy.get('#input-buscar').type('1');
    cy.get('#boton-buscar').click();
    cy.get('#nombre-pokemon').should('contain', '#1 bulbasaur');
    cy.get('.tipos-pokemon').should('contain', 'Grass');
    cy.get('.tipos-pokemon').should('contain', 'Poison');
  });
  it('plays with the img buttons', () => {
    cy.get('#input-buscar').type('322');
    cy.get('#boton-buscar').click();
    cy.get('img').then(($img) => {
      cy.get('#femenino').click();
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
  });
});

// <reference types="cypress" />

import '../support/commands';

describe('Transaction Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/');
    cy.login();
    cy.visit('http://localhost:3001/');
  });

  it('creates a new transaction', () => {
    cy.get('a[href="/transaction/new"]').click();
  });

  it('search for a user to transact with', () => {
    cy.get('a[href="/transaction/new"]').click();
    cy.get('input#user-list-search-input').type('Darrel Ortiz', { force: true });

    cy.get('ul[data-test="users-list"] > :nth-child(1)').should('contain.text', 'Darrel Ortiz');
    cy.get('ul[data-test="users-list"] > :nth-child(1)').click();
  });

  it('enter amount and pay', () => {
    cy.get('a[href="/transaction/new"]').click();
    cy.get('input#user-list-search-input').type('Darrel Ortiz', { force: true });

    cy.get('ul[data-test="users-list"] > :nth-child(1)').should('contain.text', 'Darrel Ortiz');
    cy.get('ul[data-test="users-list"] > :nth-child(1)').click();

    cy.get('input#amount').type('100');
    cy.get('input#transaction-create-description-input').type('Test Payment');
    cy.get('button[data-test="transaction-create-submit-payment"]').click();

    //cy.get('a[data-test="new-transaction-return-to-transactions]').click();
    cy.get('[data-test="new-transaction-return-to-transactions"]').click();

    //verify
    cy.get('a[href="/personal"]').click();
    cy.get(
      '[data-test="transaction-item-EvxSsr-Ic"] > .MuiPaper-root > .css-mhc70k-MuiGrid-root > .MuiGrid-grid-xs-12 > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-true',
    ).should('contain.text', 'Test Payment');
    cy.get(
      '[data-test="transaction-item-EvxSsr-Ic"] > .MuiPaper-root > .css-mhc70k-MuiGrid-root > .MuiGrid-grid-xs-12 > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-true',
    ).should('contain.text', 'John Doe paid Darrel Ortiz');
  });
});

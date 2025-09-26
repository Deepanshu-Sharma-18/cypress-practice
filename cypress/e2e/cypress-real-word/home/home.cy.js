// <reference types="cypress" />

import '../support/commands';

describe('Home Test', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('http://localhost:3001/');
  });

  it('loads the homepage', () => {
    cy.url().should('include', '/');
  });

  it('toggles navigation menu', () => {
    cy.get('button[aria-label="open drawer"]').click();

    cy.get('[data-test="sidenav"] > .MuiPaper-root > :nth-child(2)').should('not.be.visible');

    cy.get('button[aria-label="open drawer"]').click();

    cy.get('[data-test="sidenav"').should('be.visible');
  });

  it('navigates to notification page', () => {
    cy.get('a[data-test="nav-top-notifications-link"]').click();

    cy.url().should('include', '/notifications');
  });

  it('navigates to home page', () => {
    cy.get('h1[data-test="app-name-logo"').find('a[href="/"]').click();

    cy.url().should('include', '/');
  });

  it('navigates to friends section', () => {
    cy.get('a[href="/contacts"]').click();

    cy.url().should('include', '/contacts');
  });

  it('navigates to mine section', () => {
    cy.get('a[href="/personal"]').click();

    cy.url().should('include', '/personal');
  });
});

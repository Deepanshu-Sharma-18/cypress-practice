import '../support/commands';
import HomePage from '../pages/HomePage';

describe('Home Test', () => {
  beforeEach(() => {
    cy.login();
    HomePage.visit();
  });

  it('loads homepage', () => {
    cy.url().should('include', '/');
  });

  it('toggles navigation menu', () => {
    HomePage.toggleNavigation();
    cy.get('[data-test="sidenav"] > .MuiPaper-root > :nth-child(2)').should('not.be.visible');
    HomePage.toggleNavigation();
    cy.get('[data-test="sidenav"]').should('be.visible');
  });

  it('navigates to notification page', () => {
    HomePage.navigateToNotifications();
    cy.url().should('include', '/notifications');
  });

  it('navigates to home page', () => {
    HomePage.navigateToHome();
    cy.url().should('include', '/');
  });

  it('navigates to friends section', () => {
    HomePage.navigateToContacts();
    cy.url().should('include', '/contacts');
  });

  it('navigates to mine section', () => {
    HomePage.navigateToPersonal();
    cy.url().should('include', '/personal');
  });
});

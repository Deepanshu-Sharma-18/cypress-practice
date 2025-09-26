// <reference types="cypress" />

describe('Login Test', () => {
  //optimized approach
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('valid login', () => {
    //cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input#username').type('tomsmith');
    cy.get('input#password').type('SuperSecretPassword!');

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
  });

  it('invalid login', () => {
    //cy.visit('https://the-internet.herokuapp.com/login');

    cy.get('input#username').type('invalidusername');
    cy.get('input#password').type('invalidpassword!');

    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('contain.text', 'invalid');
  });

  it('parameterized test', () => {
    //cy.visit('https://the-internet.herokuapp.com/login');

    cy.fixture('credentials').then((users) => {
      users.forEach((user) => {
        cy.get('input#username').type(user.username);
        cy.get('input#password').type(user.password);

        cy.get('button[type="submit"]').click();

        if (user.valid) {
          cy.get('#flash').should('contain.text', 'You logged into a secure area!');
        } else {
          cy.get('#flash').should('contain.text', 'invalid');
        }
      });
    });
  });
});

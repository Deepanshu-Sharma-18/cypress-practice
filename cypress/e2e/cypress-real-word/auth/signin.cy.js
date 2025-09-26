// <reference types="cypress" />

import '../support/commands';

describe('Auth Sign In Test', () => {
  it("sign's in page correction", () => {
    cy.visit('http://localhost:3001/signin');

    cy.contains('Sign Up').should('be.visible');
  });

  it('signs in an existing user', () => {
    //   cy.visit('http://localhost:3001/signin');

    //   cy.get('input#username').type('johndoe@example.com');
    //   cy.get('input#password').type('Password123');

    //   cy.get('input[data-indeterminate="false"]').check();
    //   cy.get('button[type="submit"]').click();

    //   completeOnboarding();
    cy.login();
  });

  function completeOnboarding() {
    cy.get('body').then(($body) => {
      if ($body.find('button[data-test="user-onboarding-next"]').length) {
        cy.get('button[data-test="user-onboarding-next"]').click();

        cy.get('input#bankaccount-bankName-input').type('Bank of America');
        cy.get('input#bankaccount-routingNumber-input').type('123456789');
        cy.get('input#bankaccount-accountNumber-input').type('1234567890');

        cy.get('button[data-test="bankaccount-submit"]').click();

        cy.get('button[data-test="user-onboarding-next"]').click();
      }
    });
  }
});

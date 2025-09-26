// <reference types="cypress" />

describe('Auth Test', () => {
  beforeEach(() => {
    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/');
    cy.get('body').then(($body) => {
      if ($body.find('form#logout-form button[type="submit"]:visible').length) {
        cy.get('form#logout-form button[type="submit"]').click();
      }
    });

    cy.visit('https://hotel-example-site.takeyaqa.dev/en-US');
    cy.get('a.nav-link').contains('Sign up').click();
  });

  it('signup', () => {
    //cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/signup.html');

    cy.get('input#email').type('testuser@example.com');
    cy.get('input#password').type('TestPassword123');
    cy.get('input#password-confirmation').type('TestPassword123');
    cy.get('input#username').type('testuser');

    cy.get('#rank-premium').check();
    cy.get('input#address').type('123 Main Street');

    cy.get('input#tel').type('11234567890');
    cy.get('select#gender').select('male');

    cy.get('input#birthday').type('2000-01-01');

    cy.get('button[type="submit"]').click();

    cy.wait(2000);

    cy.get('.col-lg-9 > .my-3').should('contain.text', 'MyPage');
  });

  it('signup', () => {
    //cy.visit('https://hotel-example-site.takeyaqa.dev/en-US/signup.html');

    cy.get('input#email').type('testuser@example.com');
    cy.get('input#password').type('TestPassword123');
    cy.get('input#password-confirmation').type('TestPassword123');
    cy.get('input#username').type('testuser');

    cy.get('#rank-premium').check();
    cy.get('input#address').type('123 Main Street');

    cy.get('input#tel').type('11234567890');
    cy.get('select#gender').select('male');

    cy.get('input#birthday').type('2000-01-01');

    cy.get('button[type="submit"]').click();

    cy.wait(2000);

    cy.get('.col-lg-9 > .my-3').should('contain.text', 'MyPage');
  });
});

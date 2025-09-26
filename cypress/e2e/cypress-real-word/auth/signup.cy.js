// <reference types="cypress" />

describe('Auth SignUp Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/signup');
  });

  it("sign's up page correction", () => {
    cy.get('[data-test="signup-title"]').should('contain.text', 'Sign Up');
  });

  it('signs up a new user', () => {
    cy.get('input#firstName').type('John');
    cy.get('input#lastName').type('Doe');
    cy.get('input#username').type('johndoe@example.com');
    cy.get('input#password').type('Password123');
    cy.get('input#confirmPassword').type('Password123');

    cy.get('button[data-test="signup-submit"]').click();

    cy.url().should('include', '/signin');
  });
});

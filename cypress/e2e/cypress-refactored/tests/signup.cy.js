import '../support/commands';
import AuthPage from '../pages/AuthPage';
import users from '../../../fixtures/credentials.json';

describe('Auth Sign Up Test', () => {
  it("sign's up page correction", () => {
    AuthPage.visitSignUp();
    cy.get('[data-test="signup-title"]').should('contain.text', 'Sign Up');
  });

  it('signs up a new user', () => {
    cy.signup(users.newUser);
    cy.url().should('include', '/signin');
  });
});

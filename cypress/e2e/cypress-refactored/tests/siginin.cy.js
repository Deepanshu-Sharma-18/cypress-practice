import AuthPage from '../pages/AuthPage';
import '../support/commands';

describe('Auth Sign In Test', () => {
  it("sign's in page correction", () => {
    AuthPage.visitSignIn();
    cy.contains('Sign Up').should('be.visible');
  });

  it('signs in an existing user', () => {
    cy.login(); // uses custom command
  });
});

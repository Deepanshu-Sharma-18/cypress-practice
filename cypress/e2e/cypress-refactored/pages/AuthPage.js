class AuthPage {
  visitSignIn() {
    cy.visit('/signin');
  }

  visitSignUp() {
    cy.visit('/signup');
  }

  fillSignIn(username, password) {
    cy.get('input#username').type(username);
    cy.get('input#password').type(password);
    cy.get('input[data-indeterminate="false"]').check();
  }

  submitSignIn() {
    cy.get('button[type="submit"]').click();
  }

  fillSignUp(user) {
    cy.get('input#firstName').type(user.firstName);
    cy.get('input#lastName').type(user.lastName);
    cy.get('input#username').type(user.username);
    cy.get('input#password').type(user.password);
    cy.get('input#confirmPassword').type(user.password);
  }

  submitSignUp() {
    cy.get('button[data-test="signup-submit"]').click();
  }

  completeOnboarding() {
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
}

export default new AuthPage();

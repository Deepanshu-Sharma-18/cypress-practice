import AuthPage from '../pages/AuthPage';

Cypress.Commands.add('login', (username = 'johndoe@example.com', password = 'Password123') => {
  AuthPage.visitSignIn();
  AuthPage.fillSignIn(username, password);
  AuthPage.submitSignIn();
  AuthPage.completeOnboarding();
});

Cypress.Commands.add('signup', (user) => {
  AuthPage.visitSignUp();
  AuthPage.fillSignUp(user);
  AuthPage.submitSignUp();
});

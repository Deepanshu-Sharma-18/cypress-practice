class HomePage {
  visit() {
    cy.visit('/');
  }

  toggleNavigation() {
    cy.get('button[aria-label="open drawer"]').click();
  }

  navigateToNotifications() {
    cy.get('a[data-test="nav-top-notifications-link"]').click();
  }

  navigateToHome() {
    cy.get('h1[data-test="app-name-logo"] a[href="/"]').click();
  }

  navigateToContacts() {
    cy.get('a[href="/contacts"]').click();
  }

  navigateToPersonal() {
    cy.get('a[href="/personal"]').click();
  }
}

export default new HomePage();

class TransactionPage {
  visitNewTransaction() {
    cy.get('a[href="/transaction/new"]').click();
  }

  searchUser(username) {
    cy.get('input#user-list-search-input').type(username, { force: true });
    cy.get('ul[data-test="users-list"] > :nth-child(1)').click();
  }

  enterPayment(amount, description) {
    cy.get('input#amount').type(amount);
    cy.get('input#transaction-create-description-input').type(description);
    cy.get('button[data-test="transaction-create-submit-payment"]').click();
  }

  returnToTransactions() {
    cy.get('[data-test="new-transaction-return-to-transactions"]').click();
  }
}

export default new TransactionPage();

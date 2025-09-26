import '../support/commands';
import TransactionPage from '../pages/TransactionPage';

describe('Transaction Test', () => {
  beforeEach(() => {
    cy.login();
    cy.visit('/');
  });

  it('creates a new transaction', () => {
    TransactionPage.visitNewTransaction();
  });

  it('searches for a user to transact', () => {
    TransactionPage.visitNewTransaction();
    TransactionPage.searchUser('Darrel Ortiz');
  });

  it('enter amount and pay', () => {
    TransactionPage.visitNewTransaction();
    TransactionPage.searchUser('Darrel Ortiz');
    TransactionPage.enterPayment('100', 'Test Payment');
    TransactionPage.returnToTransactions();
  });
});

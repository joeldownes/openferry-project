import { searchAndSelectRoute, acceptCookies } from '../support/homepageUtils';
import { verifySelectedRoute} from '../support/ticketPageUtils';
import {selectFerry}from '../support/searchResultsUtils';

describe('Ferry Ticket Search Tests', () => {
    beforeEach(() => {
      cy.visit('/'); 
      cy.intercept('GET', 'https://m-api.openferry.com/**').as('apiRequest');  // Can add more requests if needed to check status codes
      cy.wait('@apiRequest').its('response.statusCode').should('eq', 200);
      acceptCookies();
  });

  it('Searches for a ferry from Dover to Calais with P&O Ferries and confirms the route on the ticket page', () => {
    searchAndSelectRoute('Dover', 'Calais');
    selectFerry('P&O Ferries');
    verifySelectedRoute('Dover', 'Calais');
  });

  it('Searches for a ferry from Calais to Dover with DFDS Seaways Ferries and confirms the route on the ticket page', () => {
    searchAndSelectRoute('Calais', 'Dover');
    selectFerry('DFDS Seaways');
    verifySelectedRoute('Calais', 'Dover');
  });
});
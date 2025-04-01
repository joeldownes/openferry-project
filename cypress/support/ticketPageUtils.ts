export const ticketPageSelectors = {
  outBoundText: 'span:contains("Outbound")',
  routeText: (route: string) => `span:contains("${route}")`, // Dynamic route
};

export const verifySelectedRoute = (fromRoute: string, toRoute: string) => {
  cy.get(ticketPageSelectors.outBoundText).should("be.visible");
  // Checks the routes are displaying the correct text
  cy.get(ticketPageSelectors.routeText(fromRoute)).should("be.visible");
  cy.get(ticketPageSelectors.routeText(toRoute)).should("be.visible");
};

export const searchResultSelectors = {
  selectButton: 'span:contains("Select")',
};

export const selectFerry = (ferryOperator: string) => {
  // Wait for the search results to load
  cy.get("span")
    .contains(ferryOperator, { timeout: 10000 })
    .should("be.visible");
  // Click "Select" for the first available ferry of the chosen operator
  cy.get("span")
    .contains(ferryOperator)
    .first()
    .parents("div") // Move up to the parent container
    .siblings() // Find the sibling container with the "Select" button
    .find(searchResultSelectors.selectButton)
    .first()
    .click();
};

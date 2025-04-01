export const homepageSelectors = {
  acceptButton: "button.cky-btn-accept",
  fromSearchField: 'input[placeholder="From"]',
  searchButton: '[data-testid="search-submit-button"]',
  searchDropdown: "li span",
  toSearchField: 'input[placeholder="From"]',
};

export const searchAndSelectRoute = (fromRoute: string, toRoute: string) => {
  // Type into the "From" input field
  cy.get(homepageSelectors.fromSearchField)
    .should("be.visible")
    .click()
    .clear()
    .type(fromRoute);
  // Select the correct "From" route from the dropdown
  cy.get(homepageSelectors.searchDropdown).contains(fromRoute).click();
  // Select the correct "To" route from the dropdown
  cy.get(homepageSelectors.searchDropdown).contains(toRoute).click();
  // Click the search button
  cy.get(homepageSelectors.searchButton).should("be.visible").click();
};

export const acceptCookies = () => {
  cy.get(homepageSelectors.acceptButton).then(
    ($btns: JQuery<HTMLButtonElement>) => {
      if ($btns.length > 0) {
        cy.wrap($btns.first()).click(); // Clicks the first visible accept button
      }
    }
  );
};

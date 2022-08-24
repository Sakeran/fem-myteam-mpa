describe("Footer component", () => {
  const screens = [375, 768, 1440];
  it("Has a link to the home page", () => {
    screens.forEach((w) => {
      cy.viewport(w, 800);

      cy.visit("/fixtures/shared/footer");

      cy.contains("home").click();
      cy.url().should("eql", Cypress.config().baseUrl + "/");
    });
  });

  it("Has a link to the about page", () => {
    screens.forEach((w) => {
      cy.viewport(w, 800);

      cy.visit("/fixtures/shared/footer");

      cy.contains("about").click();
      cy.url().should("contain", "/about");
    });
  });

  it("Has social media links", () => {
    screens.forEach((w) => {
      cy.viewport(w, 800);

      cy.visit("/fixtures/shared/footer");

      cy.contains("Visit us on Facebook");
      cy.contains("Visit us on Pintrest");
      cy.contains("Visit us on Twitter");
    });
  });
});

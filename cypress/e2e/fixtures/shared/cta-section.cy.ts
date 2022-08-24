describe("CTA Section", () => {
  it("Has a link to the contact page", () => {
    [375, 768, 1440].forEach((w) => {
      cy.viewport(w, 800);
      cy.visit("/fixtures/shared/cta-section");

      cy.contains("contact us").click();
      cy.url().should("contain", "/contact");
    });
  });
});

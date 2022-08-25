describe("Teammate Bio Widget", () => {
  beforeEach(() => {
    cy.visit("/fixtures/about/teammate-bio");
  });

  it("Has a visible front face by default", () => {
    cy.get(".front-face").as("front-face").should("be.visible");
    cy.get("@front-face").get("img").should("be.visible");
    cy.get("@front-face").get("h3").should("be.visible");
    cy.get("@front-face").get("p").should("be.visible");

    cy.get(".back-face").should("not.exist");
  });

  it("Can toggle a back face on button click", () => {
    cy.contains("Show more info for").click();

    cy.get(".back-face").should("exist");

    cy.contains("Hide info for").click();
    cy.get(".back-face").should("not.exist");
  });

  it("Has social media links on the back face.", () => {
    cy.contains("Show more info for").click();

    cy.get(".back-face").as("back-face").should("be.visible");
    cy.get("@back-face").contains("Twitter");
    cy.get("@back-face").contains("LinkedIn");
  });
});

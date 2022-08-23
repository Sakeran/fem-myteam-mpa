describe("Header component", () => {
  it("Is visible on at all sizes", () => {
    cy.visit("/fixtures/shared/header");
    [375, 768, 1440].forEach((w) => {
      cy.viewport(w, 800);

      cy.get("header").should("be.visible");
      cy.contains("myteam");
      if (w !== 375) {
        // Nav should be visible at non-mobile sizes.
        cy.contains("home");
        cy.contains("about");
        cy.contains("contact us");
      }
    });
  });

  it("Can access the mobile navigation", () => {
    cy.viewport(375,800);
    
    cy.visit("/fixtures/shared/header");

    cy.contains("Open Menu").click();
    cy.get("nav").should("be.visible");

    cy.contains("home");
    cy.contains("about");
    cy.contains("contact us");

    cy.contains("Close Menu").click();
    cy.get("nav").should("not.be.visible");
  });

  it("Has working logo link to index page", () => {
    cy.visit("/fixtures/shared/header");

    cy.contains("myteam").click();
    cy.url().should("eql", Cypress.config().baseUrl + "/");
  });

  it("Has working nav link to index page", () => {
    cy.visit("/fixtures/shared/header");

    cy.contains("home").click();
    cy.url().should("eql", Cypress.config().baseUrl + "/");
  });

  it("Has working link to about page", () => {
    cy.visit("/fixtures/shared/header");

    cy.contains("about").click();
    cy.url().should("include", "/about");
  });

  it("Has working link to contact page", () => {
    cy.visit("/fixtures/shared/header");

    cy.contains("contact").click();
    cy.url().should("include", "/contact");
  });
});

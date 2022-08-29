describe("Form Elements", () => {
  beforeEach(() => {
    cy.visit("/fixtures/contact/form-elements");
  });

  it("Can correctly enter text", () => {
    cy.get('[type="text"]').as("text-input").type("My Name");

    cy.get("@text-input").next('p').should("not.be.visible");
  });

  it("Can show an error on empty text input blur", () => {
    cy.get('[type="text"]').as("text-input").click().blur();

    cy.get("@text-input")
      .next()
      .contains("This field is required")
      .should("be.visible");
  });

  it("Can correctly enter an email", () => {
    cy.get('[type="email"]').as("email-input").type("hi@example.com");

    cy.get("@email-input").next().should("not.be.visible");
  });

  it("Can show an error on empty email input blur", () => {
    cy.get('[type="email"]').as("email-input").click().blur();

    cy.get("@email-input")
      .next()
      .contains("This field is required")
      .should("be.visible");
  });

  it("Can show an error on invalid email inputs", () => {
    cy.get('[type="email"]').as("email-input").type("invalidemail");

    cy.get("@email-input")
      .next()
      .contains("Enter a valid email address")
      .should("be.visible");
  });

  it("Can correctly enter into a text area", () => {
    cy.get("textarea").as("text-area").type("Hello,{enter}This is a message.");

    cy.get("@text-area").next('p').should("not.be.visible");
  });

  it("Can show an error on empty textarea blur", () => {
    cy.get("textarea").as("text-area").click().blur();

    cy.get("@text-area")
      .next()
      .contains("Please enter a message")
      .should("be.visible");
  });
});

/* eslint-disable no-undef */
describe("Main tests", () => {
  it("Renders 9 images", () => {
    cy.visit("localhost:3000");
    cy.get("[data-cy=image-list]").children().should("have.length", 9);
  });

  it("Can type an input", () => {
    cy.visit("localhost:3000");
    cy.get("[data-cy=query-text]")
      .clear()
      .type("dog")
      .should("have.value", "dog");
  });

  it("Can submit a query", () => {
    cy.visit("localhost:3000");
    cy.get("[data-cy=query-text]")
      .clear()
      .type("dog")
      .should("have.value", "dog");

    cy.get("[data-cy=query-button]").click();
  });

  it("Can get to second page", () => {
    cy.visit("localhost:3000");

    cy.get("[data-cy=next-page]").click();
  });

  it("Previous button is disabled", () => {
    cy.visit("localhost:3000");

    cy.get("[data-cy=prev-page]").should("is.disabled", true);
  });
});

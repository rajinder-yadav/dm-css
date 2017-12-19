describe("Display", () => {

  before(() => {
    cy.visit("/test/web-pages/display.html");
  });

  it("show", () => {
    cy.get("#show")
      .should("have.class", "show")
      .should("have.css", "display", "inline")
      .should("be.visible");
  });
  it("hide", () => {
    cy.get("#hide")
      .should("have.class", "hide")
      .should("have.css", "display", "none")
      .should("be.not.visible");
  });
  it("none", () => {
    cy.get("#d-none")
      .should("have.class", "d-none")
      .should("have.css", "display", "none")
      .should("be.not.visible");
  });
  it("inline", () => {
    cy.get("#d-inline")
      .should("have.class", "d-inline")
      .should("have.css", "display", "inline");
  });
  it("inline-block", () => {
    cy.get("#d-inline-block")
      .should("have.class", "d-inline-block")
      .should("have.css", "display", "inline-block");
  });
  it("block", () => {
    cy.get("#d-block")
      .should("have.class", "d-block")
      .should("have.css", "display", "block");
  });
  it("flex", () => {
    cy.get("#d-flex")
      .should("have.class", "d-flex")
      .should("have.css", "display", "flex");
  });
  it("inline-flex", () => {
    cy.get("#d-inline-flex")
      .should("have.class", "d-inline-flex")
      .should("have.css", "display", "inline-flex");
  });
  it("grid", () => {
    cy.get("#d-grid")
      .should("have.class", "d-grid")
      .should("have.css", "display", "grid");
  });
  it("inline-grid", () => {
    cy.get("#d-inline-grid")
      .should("have.class", "d-inline-grid")
      .should("have.css", "display", "inline-grid");
  });
});

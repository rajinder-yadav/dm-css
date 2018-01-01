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
    cy.get("#dnone")
      .should("have.class", "dnone")
      .should("have.css", "display", "none")
      .should("be.not.visible");
  });
  it("inline", () => {
    cy.get("#dinline")
      .should("have.class", "dinline")
      .should("have.css", "display", "inline");
  });
  it("inline-block", () => {
    cy.get("#dinline-block")
      .should("have.class", "dinline-block")
      .should("have.css", "display", "inline-block");
  });
  it("block", () => {
    cy.get("#dblock")
      .should("have.class", "dblock")
      .should("have.css", "display", "block");
  });
  it("flex", () => {
    cy.get("#dflex")
      .should("have.class", "dflex")
      .should("have.css", "display", "flex");
  });
  it("inline-flex", () => {
    cy.get("#dinline-flex")
      .should("have.class", "dinline-flex")
      .should("have.css", "display", "inline-flex");
  });
  it("grid", () => {
    cy.get("#dgrid")
      .should("have.class", "dgrid")
      .should("have.css", "display", "grid");
  });
  it("inline-grid", () => {
    cy.get("#dinline-grid")
      .should("have.class", "dinline-grid")
      .should("have.css", "display", "inline-grid");
  });
  it("table", () => {
    cy.get("#dtable")
      .should("have.class", "dtable")
      .should("have.css", "display", "table");
  });
  it("table-row", () => {
    cy.get("#dtable-row")
      .should("have.class", "dtable-row")
      .should("have.css", "display", "table-row");
  });
  it("table-cell", () => {
    cy.get("#dtable-cell")
      .should("have.class", "dtable-cell")
      .should("have.css", "display", "table-cell");
  });
});

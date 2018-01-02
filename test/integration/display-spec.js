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
  it("diblock", () => {
    cy.get("#diblock")
      .should("have.class", "diblock")
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
  it("iflex", () => {
    cy.get("#diflex")
      .should("have.class", "diflex")
      .should("have.css", "display", "inline-flex");
  });
  it("grid", () => {
    cy.get("#dgrid")
      .should("have.class", "dgrid")
      .should("have.css", "display", "grid");
  });
  it("igrid", () => {
    cy.get("#digrid")
      .should("have.class", "digrid")
      .should("have.css", "display", "inline-grid");
  });
  it("dtable", () => {
    cy.get("#dtable")
      .should("have.class", "dtable")
      .should("have.css", "display", "table");
  });
  it("dtr", () => {
    cy.get("#dtr")
      .should("have.class", "dtr")
      .should("have.css", "display", "table-row");
  });
  it("dtd", () => {
    cy.get("#dtd")
      .should("have.class", "dtd")
      .should("have.css", "display", "table-cell");
  });

  it("dtcol", () => {
    cy.get("#dtcol")
      .should("have.class", "dtcol")
      .should("have.css", "display", "table-column");
  });
  it("dtcolg", () => {
    cy.get("#dtcolg")
      .should("have.class", "dtcolg")
      .should("have.css", "display", "table-column-group");
  });
  it("dtcap", () => {
    cy.get("#dtcap")
      .should("have.class", "dtcap")
      .should("have.css", "display", "table-caption");
  });
  it("dthead", () => {
    cy.get("#dthead")
      .should("have.class", "dthead")
      .should("have.css", "display", "table-header-group");
  });
  it("dtbody", () => {
    cy.get("#dtbody")
      .should("have.class", "dtbody")
      .should("have.css", "display", "table-row-group");
  });
  it("dtfoot", () => {
    cy.get("#dtfoot")
      .should("have.class", "dtfoot")
      .should("have.css", "display", "table-footer-group");
  });

});

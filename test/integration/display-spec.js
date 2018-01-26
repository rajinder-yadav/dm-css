describe("Display", () => {

  before(() => {
    cy.visit("/web-pages/display.html");
  });

  context("Display", () => {

    it("show", () => {
      cy.get("#show")
        .should("have.class", "show")
        .should("have.css", "display", "block")
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
  });
  context("Table display", () => {
    it("table", () => {
      cy.get("#table")
        .should("have.class", "table")
        .should("have.css", "display", "table");
    });
    it("tr", () => {
      cy.get("#tr")
        .should("have.class", "tr")
        .should("have.css", "display", "table-row");
    });
    it("td", () => {
      cy.get("#td")
        .should("have.class", "td")
        .should("have.css", "display", "table-cell");
    });

    it("tcol", () => {
      cy.get("#tcol")
        .should("have.class", "tcol")
        .should("have.css", "display", "table-column");
    });
    it("tcolgroup", () => {
      cy.get("#tcolgroup")
        .should("have.class", "tcolgroup")
        .should("have.css", "display", "table-column-group");
    });
    it("tcap", () => {
      cy.get("#tcap")
        .should("have.class", "tcap")
        .should("have.css", "display", "table-caption");
    });
    it("thead", () => {
      cy.get("#thead")
        .should("have.class", "thead")
        .should("have.css", "display", "table-header-group");
    });
    it("tbody", () => {
      cy.get("#tbody")
        .should("have.class", "tbody")
        .should("have.css", "display", "table-row-group");
    });
    it("tfoot", () => {
      cy.get("#tfoot")
        .should("have.class", "tfoot")
        .should("have.css", "display", "table-footer-group");
    });
    it("tcapt", () => {
      cy.get("#tcapt")
        .should("have.class", "tcapt")
        .should("have.css", "caption-side", "top");
    });
    it("tcapb", () => {
      cy.get("#tcapb")
        .should("have.class", "tcapb")
        .should("have.css", "caption-side", "bottom");
    });
  });

});

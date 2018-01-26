describe("Column", () => {

  before(() => {
    cy.visit("/web-pages/column.html");
  });

  context("Columns sizes", () => {
    it("Count 1", () => {
      cy.get(".col1")
        .should("have.class", "col1")
        .should("have.css", "column-count", "1");
    });
    it("Count 2", () => {
      cy.get(".col2")
        .should("have.class", "col2")
        .should("have.css", "column-count", "2");
    });
    it("Count 3", () => {
      cy.get(".col3")
        .should("have.class", "col3")
        .should("have.css", "column-count", "3");
    });
    it("Count 4", () => {
      cy.get(".col4")
        .should("have.class", "col4")
        .should("have.css", "column-count", "4");
    });
    it("Count 5", () => {
      cy.get(".col5")
        .should("have.class", "col5")
        .should("have.css", "column-count", "5");
    });
    it("Count 6", () => {
      cy.get(".col6")
        .should("have.class", "col6")
        .should("have.css", "column-count", "6");
    });
    it("Count 7", () => {
      cy.get(".col7")
        .should("have.class", "col7")
        .should("have.css", "column-count", "auto");
    });
  });

  context("Fixed columns sizes", () => {
    it("Count 1", () => {
      cy.get(".colf1")
        .should("have.class", "colf1")
        .should("have.css", "column-width", "960px");
    });
    it("Count 2", () => {
      cy.get(".colf2")
        .should("have.class", "colf2")
        .should("have.css", "column-width", "480px");
    });
    it("Count 3", () => {
      cy.get(".colf3")
        .should("have.class", "colf3")
        .should("have.css", "column-width", "320px");
    });
    it("Count 4", () => {
      cy.get(".colf4")
        .should("have.class", "colf4")
        .should("have.css", "column-width", "240px");
    });
    it("Count 5", () => {
      cy.get(".colf5")
        .should("have.class", "colf5")
        .should("have.css", "column-width", "192px");
    });
    it("Count 6", () => {
      cy.get(".colf6")
        .should("have.class", "colf6")
        .should("have.css", "column-width", "160px");
    });
    it("Count 7", () => {
      cy.get(".colf7")
        .should("have.class", "colf7")
        .should("have.css", "column-width", "auto");
    });
  });

  context("Columns gaps", () => {
    it("Gap 0", () => {
      cy.get(".colgap0")
        .should("have.class", "colgap0")
        .should("have.css", "column-gap", "0px");
    });
    it("Gap 1", () => {
      cy.get(".colgap1")
        .should("have.class", "colgap1")
        .should("have.css", "column-gap", "3px");
    });
    it("Gap 2", () => {
      cy.get(".colgap2")
        .should("have.class", "colgap2")
        .should("have.css", "column-gap", "5px");
    });
    it("Gap 3", () => {
      cy.get(".colgap3")
        .should("have.class", "colgap3")
        .should("have.css", "column-gap", "8px");
    });
    it("Gap 4", () => {
      cy.get(".colgap4")
        .should("have.class", "colgap4")
        .should("have.css", "column-gap", "14px");
    });
    it("Gap 5", () => {
      cy.get(".colgap5")
        .should("have.class", "colgap5")
        .should("have.css", "column-gap", "22px");
    });
    it("Gap 6", () => {
      cy.get(".colgap6")
        .should("have.class", "colgap6")
        .should("have.css", "column-gap", "36px");
    });
    it("Gap 7", () => {
      cy.get(".colgap7")
        .should("have.class", "colgap7")
        .should("have.css", "column-gap", "58px");
    });
  });

  context("Columns", () => {
    it("auto", () => {
      cy.get(".colauto")
        .should("have.class", "colauto")
        .should("have.css", "column-width", "auto");
    });
    it("span all", () => {
      cy.get(".colsa")
        .should("have.class", "colsa")
        .should("have.css", "column-span", "all");
    });
  });
});

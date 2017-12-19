describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/position.html");
  });

  context("Position", () => {
    it("Top left", () => {
      cy.get("#tl")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tl>div:first")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "left", "0px");
    });
    it("Top right", () => {
      cy.get("#tr")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tr>div:first")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "right", "0px");
    });
    it("Bottom left", () => {
      cy.get("#bl")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#bl>div:first")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "left", "0px");
    });
    it("Bottom right", () => {
      cy.get("#br")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#br>div:first")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "right", "0px");
    });
  });
});

describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/utility.html");
  });

  context("Utility", () => {
    it("Visible", () => {
      cy.get(".visible")
        .should("have.css", "visibility", "visible");
    });
    it("Invisible", () => {
      cy.get(".invisible")
        .should("have.css", "visibility", "hidden");
    });
    it("Center x", () => {
      cy.get(".centerx")
        .should("have.css", "display", "flex")
        .should("have.css", "justify-content", "center");
    });
    it("Center y", () => {
      cy.get(".centery")
        .should("have.css", "display", "flex")
        .should("have.css", "align-items", "center");
    });
    it("Center", () => {
      cy.get(".center")
        .should("have.css", "display", "flex")
        .should("have.css", "justify-content", "center")
        .should("have.css", "align-items", "center");
    });
  });
});

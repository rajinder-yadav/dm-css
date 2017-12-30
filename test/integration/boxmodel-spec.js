describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/boxmodel.html");
  });

  context("Border box", () => {
    it("Size 100%", () => {
      cy.get("#bb1")
        .should("have.css", "box-sizing", "border-box")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
      cy.get("#bb1>div:first-child")
        .should("have.css", "box-sizing", "border-box")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
    });
    it("Size 100%", () => {
      cy.get("#bb2")
        .should("have.css", "box-sizing", "border-box")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
      cy.get("#bb2>div:first-child")
        .should("have.css", "box-sizing", "border-box")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "98px")
        .should("have.css", "width", "98px");
    });
    it("Size 100%", () => {
      cy.get("#bb3")
        .should("have.css", "box-sizing", "border-box")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
      cy.get("#bb3>div:first-child")
        .should("have.css", "box-sizing", "border-box")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "98px")
        .should("have.css", "width", "98px");
    });
  });

  context("Content box", () => {
    it("Size 100%", () => {
      cy.get("#cb1")
        .should("have.css", "box-sizing", "content-box")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
      cy.get("#cb1>div:first-child")
        .should("have.css", "box-sizing", "content-box")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
    });
    it("Size 100%", () => {
      cy.get("#cb2")
        .should("have.css", "box-sizing", "content-box")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
      cy.get("#cb2>div:first-child")
        .should("have.css", "box-sizing", "content-box")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
    });
    it("Size 100%", () => {
      cy.get("#cb3")
        .should("have.css", "box-sizing", "content-box")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
      cy.get("#cb3>div:first-child")
        .should("have.css", "box-sizing", "content-box")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "100px")
        .should("have.css", "width", "100px");
    });
  });
});

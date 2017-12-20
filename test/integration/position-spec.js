describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/position.html");
  });

  context("Position", () => {
    it("Top left", () => {
      cy.get("#tl")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "left", "0px");
    });
    it("Top right", () => {
      cy.get("#tr")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tr>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "right", "0px");
    });
    it("Bottom left", () => {
      cy.get("#bl")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#bl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "left", "0px");
    });
    it("Bottom right", () => {
      cy.get("#br")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#br>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "right", "0px");
    });
    it("Static", () => {
      cy.get("#static")
        .should("have.class", "absolute static")
        .should("have.css", "position", "static");
    });
  });
  context("Fixed", () => {
    it("Top right", () => {
      cy.get("#f1>div:first-child")
        .should("have.class", "fixed")
        .should("have.css", "position", "fixed")
        .should("have.css", "top", "0px")
        .should("have.css", "right", "0px");
    });
    it("Bottom right", () => {
      cy.get("#f2>div:first-child")
        .should("have.class", "fixed")
        .should("have.css", "position", "fixed")
        .should("have.css", "bottom", "0px")
        .should("have.css", "right", "0px");
    });
  });

  context("Z Index", () => {
    it("z1 z0", () => {
      cy.get("#z1>div:first-child")
        .should("have.class", "z1");
      cy.get("#z1>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z2 z0", () => {
      cy.get("#z2>div:first-child")
        .should("have.class", "z2");
      cy.get("#z2>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z3 z0", () => {
      cy.get("#z3>div:first-child")
        .should("have.class", "z3");
      cy.get("#z3>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z4 z0", () => {
      cy.get("#z4>div:first-child")
        .should("have.class", "z4");
      cy.get("#z4>div:first-child").next()
        .should("have.class", "z0");
    });
  });
});

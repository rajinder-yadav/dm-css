describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/position.html");
  });

  context("Position", () => {
    it("tl", () => {
      cy.get("#tl")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "left", "0px");
    });
    it("tr", () => {
      cy.get("#tr")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tr>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "right", "0px");
    });
    it("bl", () => {
      cy.get("#bl")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#bl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "left", "0px");
    });
    it("br", () => {
      cy.get("#br")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#br>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "right", "0px");
    });
    it("Top left", () => {
      cy.get("#topleft")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "left", "0px");
    });
    it("Top right", () => {
      cy.get("#topright")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tr>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "right", "0px");
    });
    it("Bottom left", () => {
      cy.get("#bottomleft")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#bl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "left", "0px");
    });
    it("Bottom right", () => {
      cy.get("#bottomright")
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

  context("Z Index positive", () => {
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
    it("z5 z0", () => {
      cy.get("#z5>div:first-child")
        .should("have.class", "z5");
      cy.get("#z5>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z6 z0", () => {
      cy.get("#z6>div:first-child")
        .should("have.class", "z6");
      cy.get("#z6>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z7 z0", () => {
      cy.get("#z7>div:first-child")
        .should("have.class", "z7");
      cy.get("#z7>div:first-child").next()
        .should("have.class", "z0");
    });
  });

  context("Z Index negative", () => {
    it("z-1 z0", () => {
      cy.get("#z-1>div:first-child")
        .should("have.class", "z-1");
      cy.get("#z-1>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z-2 z0", () => {
      cy.get("#z-2>div:first-child")
        .should("have.class", "z-2");
      cy.get("#z-2>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z-3 z0", () => {
      cy.get("#z-3>div:first-child")
        .should("have.class", "z-3");
      cy.get("#z-3>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z-4 z0", () => {
      cy.get("#z-4>div:first-child")
        .should("have.class", "z-4");
      cy.get("#z-4>div:first-child").next()
        .should("have.class", "z0");
  });
    it("z-5 z0", () => {
      cy.get("#z-5>div:first-child")
        .should("have.class", "z-5");
      cy.get("#z-5>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z-6 z0", () => {
      cy.get("#z-6>div:first-child")
        .should("have.class", "z-6");
      cy.get("#z-6>div:first-child").next()
        .should("have.class", "z0");
    });
    it("z-7 z0", () => {
      cy.get("#z-7>div:first-child")
        .should("have.class", "z-7");
      cy.get("#z-7>div:first-child").next()
        .should("have.class", "z0");
    });
  });
});

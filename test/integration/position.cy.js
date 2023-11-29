describe("Size", () => {
  beforeEach(() => {
    cy.visit("/web-pages/position.html");
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
    it("Top left - alias", () => {
      cy.get("#topleft")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "left", "0px");
    });
    it("Top right - alias", () => {
      cy.get("#topright")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#tr>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "top", "0px")
        .should("have.css", "right", "0px");
    });
    it("Bottom left - alias", () => {
      cy.get("#bottomleft")
        .should("have.class", "relative")
        .should("have.css", "position", "relative");
      cy.get("#bl>div:first-child")
        .should("have.class", "absolute")
        .should("have.css", "position", "absolute")
        .should("have.css", "bottom", "0px")
        .should("have.css", "left", "0px");
    });
    it("Bottom right - alias", () => {
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

  context("Fixed position", () => {
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
    it("Index 1", () => {
      cy.get("#z1>div:first-child")
        .should("have.class", "z1");
      cy.get("#z1>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index 2", () => {
      cy.get("#z2>div:first-child")
        .should("have.class", "z2");
      cy.get("#z2>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index 3", () => {
      cy.get("#z3>div:first-child")
        .should("have.class", "z3");
      cy.get("#z3>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index 4", () => {
      cy.get("#z4>div:first-child")
        .should("have.class", "z4");
      cy.get("#z4>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index 5", () => {
      cy.get("#z5>div:first-child")
        .should("have.class", "z5");
      cy.get("#z5>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index 6", () => {
      cy.get("#z6>div:first-child")
        .should("have.class", "z6");
      cy.get("#z6>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index 7", () => {
      cy.get("#z7>div:first-child")
        .should("have.class", "z7");
      cy.get("#z7>div:first-child").next()
        .should("have.class", "z0");
    });
  });

  context("Z Index negative", () => {
    it("Index -1", () => {
      cy.get("#z-1>div:first-child")
        .should("have.class", "z-1");
      cy.get("#z-1>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index -2", () => {
      cy.get("#z-2>div:first-child")
        .should("have.class", "z-2");
      cy.get("#z-2>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index -3", () => {
      cy.get("#z-3>div:first-child")
        .should("have.class", "z-3");
      cy.get("#z-3>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index -4", () => {
      cy.get("#z-4>div:first-child")
        .should("have.class", "z-4");
      cy.get("#z-4>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index -5", () => {
      cy.get("#z-5>div:first-child")
        .should("have.class", "z-5");
      cy.get("#z-5>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index -6", () => {
      cy.get("#z-6>div:first-child")
        .should("have.class", "z-6");
      cy.get("#z-6>div:first-child").next()
        .should("have.class", "z0");
    });
    it("Index -7", () => {
      cy.get("#z-7>div:first-child")
        .should("have.class", "z-7");
      cy.get("#z-7>div:first-child").next()
        .should("have.class", "z0");
    });
  });

  context("Z index auto", () => {
    it("Index auto", () => {
      cy.get("#zauto")
        .should("have.class", "zauto");
      cy.get("#zauto>div:first-child")
        .should("have.class", "zauto");
      cy.get("#zauto>div:first-child").next()
        .should("have.class", "zauto");
    });
  });

});

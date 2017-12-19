describe("Text", () => {

  before(() => {
    cy.visit("/test/web-pages/text.html");
  });

  context("Justification", () => {
    it("Left", () => {
      cy.get(".ttl")
        .should("have.css", "text-align", "left");
    });
    it("Right", () => {
      cy.get(".ttr")
        .should("have.css", "text-align", "right");
    });
    it("Center", () => {
      cy.get(".ttc")
        .should("have.css", "text-align", "center");
    });
    it("Justify", () => {
      cy.get(".ttj")
        .should("have.css", "text-align", "justify");
        // .should("have.css", "text-justify", "auto"); // <- Chrome has a bug.
    });
  });

  context("Vertical alignment", () => {
    it("Valign top", () => {
      cy.get(".ttvt")
        .should("have.css", "vertical-align", "top");
    });
    it("Valign middle", () => {
      cy.get(".ttvm")
        .should("have.css", "vertical-align", "middle");
    });
    it("Valign baseline", () => {
      cy.get(".ttvbl")
        .should("have.css", "vertical-align", "baseline");
    });
    it("Valign bottom", () => {
      cy.get(".ttvb")
        .should("have.css", "vertical-align", "bottom");
    });
    it("Text top", () => {
      cy.get(".ttvtt")
        .should("have.css", "vertical-align", "text-top");
    });
    it("Text bottom", () => {
      cy.get(".ttvtb")
        .should("have.css", "vertical-align", "text-bottom");
    });
  });

  context("Text transform", () => {
    it("Capatialize", () => {
      cy.get(".tt-caps")
        .should("have.css", "text-transform", "capitalize");
    });
    it("Uppercase", () => {
      cy.get(".tt-upcase")
        .should("have.css", "text-transform", "uppercase");
    });
    it("Lowercase", () => {
      cy.get(".tt-lowcase")
        .should("have.css", "text-transform", "lowercase");
    });
    it("None", () => {
      cy.get(".tt-none")
        .should("have.css", "text-transform", "none");
    });
  });

  context("Text Wrapping", () => {
    it("Wrap", () => {
      cy.get(".tt-wrap")
        .should("have.css", "overflow-wrap", "break-word");
    });
    it("No wrap", () => {
      cy.get(".tt-nowrap")
        .should("have.css", "overflow-wrap", "normal");
    });
  });

  context("Overflow control", () => {
    it("Overflow", () => {
      cy.get(".tt-overflow")
        .should("have.css", "overflow-x", "visible")
        .should("have.css", "overflow-y", "visible");
    });
    it("Overflow auto", () => {
      cy.get(".tt-overflow-auto")
        .should("have.css", "overflow-x", "auto")
        .should("have.css", "overflow-y", "auto");
    });
    it("Clip", () => {
      cy.get(".tt-clip")
        .should("have.css", "overflow-x", "hidden")
        .should("have.css", "overflow-y", "hidden");
    });
    it("Scroll", () => {
      cy.get(".tt-scroll")
        .should("have.css", "overflow-x", "scroll")
        .should("have.css", "overflow-y", "scroll");
    });
    it("Overflow y", () => {
      cy.get(".tt-overflowy")
        .should("have.css", "overflow-y", "visible");
    });
    it("Overflow y auto", () => {
      cy.get(".tt-overflowy-auto")
        .should("have.css", "overflow-y", "auto");
    });
    it("Clip y", () => {
      cy.get(".tt-clipy")
        .should("have.css", "overflow-y", "hidden");
    });
    it("Scroll y", () => {
      cy.get(".tt-scrolly")
        .should("have.css", "overflow-y", "scroll");
    });
    it("Overflow x", () => {
      cy.get(".tt-overflowx")
        .should("have.css", "overflow-x", "visible");
    });
    it("Overflow x auto", () => {
      cy.get(".tt-overflowx-auto")
        .should("have.css", "overflow-x", "auto");
    });
    it("Clip x", () => {
      cy.get(".tt-clipx")
        .should("have.css", "overflow-x", "hidden");
    });
    it("Scroll x", () => {
      cy.get(".tt-scrollx")
        .should("have.css", "overflow-x", "scroll");
    });
  });
});

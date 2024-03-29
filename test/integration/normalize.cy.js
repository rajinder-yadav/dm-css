describe("Normalize", () => {
  beforeEach(() => {
    cy.visit("/web-pages/normalize.html");
  });

  context("Defaults", () => {
    it("root family", () => {
      cy.get(":root")
        .should("have.css", "font-family", "\"Open Sans\", Roboto, sans-serif")
        .should("have.css", "font-style", "normal")
        .should("have.css", "font-size", "16px")
        .should("have.css", "font-weight", "400");
    });
    it("article display", () => {
      cy.get("article")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("aside display", () => {
      cy.get("aside")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("header display", () => {
      cy.get("header")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("footer display", () => {
      cy.get("footer")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("main display", () => {
      cy.get("main")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("nav display", () => {
      cy.get("nav")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("section display", () => {
      cy.get("section")
        .should("have.css", "display", "block")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("font family", () => {
      cy.get("#h1")
        .should("have.css", "font-family", "\"Open Sans\", Roboto, sans-serif")
        .should("have.css", "font-style", "normal");
    });
    it("element h1 margins", () => {
      cy.get("#h1")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-bottom", "8px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("element h1 paddings", () => {
      cy.get("#h1")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("element p font family", () => {
      cy.get("#p")
        .should("have.css", "font-family", "\"Open Sans\", Roboto, sans-serif")
        .should("have.css", "font-style", "normal")
        .should("have.css", "font-weight", "400")
        .should("have.css", "font-size", "16px");
    });
    it("element p margins", () => {
      cy.get("#p")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-bottom", "4px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("element p paddings", () => {
      cy.get("#p")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
  });

});

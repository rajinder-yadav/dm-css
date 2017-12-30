describe("List Style-Notation", () => {

  before(() => {
    cy.visit("/test/web-pages/list.html");
  });

  context("Ordered Lists", () => {
    it("none ol", () => {
      cy.get("ol.li-none")
        .should("have.class", "li-none")
        .should("have.css", "list-style-type", "none");
      cy.get("ol.li-none>li:first-child")
        .should("have.css", "list-style-type", "none");
    });
    it("disc ol", () => {
      cy.get("ol.li-disc")
        .should("have.class", "li-disc")
        .should("have.css", "list-style-type", "disc");
      cy.get("ol.li-disc>li:first-child")
        .should("have.css", "list-style-type", "disc");
    });
    it("square ol", () => {
      cy.get("ol.li-square")
        .should("have.class", "li-square")
        .should("have.css", "list-style-type", "square");
      cy.get("ol.li-square>li:first-child")
        .should("have.css", "list-style-type", "square");
    });
    it("circle ol", () => {
      cy.get("ol.li-circle")
        .should("have.class", "li-circle")
        .should("have.css", "list-style-type", "circle");
      cy.get("ol.li-circle>li:first-child")
        .should("have.css", "list-style-type", "circle");
    });
    it("lower-roman ol", () => {
      cy.get("ol.li-roman")
        .should("have.class", "li-roman")
        .should("have.css", "list-style-type", "lower-roman");
      cy.get("ol.li-roman>li:first-child")
        .should("have.css", "list-style-type", "lower-roman");
    });
    it("decimal ol", () => {
      cy.get("ol.li-decimal")
        .should("have.class", "li-decimal")
        .should("have.css", "list-style-type", "decimal");
      cy.get("ol.li-decimal>li:first-child")
        .should("have.css", "list-style-type", "decimal");
    });
    it("lower-alpha ol", () => {
      cy.get("ol.li-alpha")
        .should("have.class", "li-alpha")
        .should("have.css", "list-style-type", "lower-alpha");
      cy.get("ol.li-alpha>li:first-child")
        .should("have.css", "list-style-type", "lower-alpha");
    });
  });

  context("Unordered Lists", () => {

    it("none ul", () => {
      cy.get("ul.li-none")
        .should("have.class", "li-none")
        .should("have.css", "list-style-type", "none");
      cy.get("ul.li-none>li:first-child")
        .should("have.css", "list-style-type", "none");
    });
    it("disc ul", () => {
      cy.get("ul.li-disc")
        .should("have.class", "li-disc")
        .should("have.css", "list-style-type", "disc");
      cy.get("ul.li-disc>li:first-child")
        .should("have.css", "list-style-type", "disc");
    });
    it("square ul", () => {
      cy.get("ul.li-square")
        .should("have.class", "li-square")
        .should("have.css", "list-style-type", "square");
      cy.get("ul.li-square>li:first-child")
        .should("have.css", "list-style-type", "square");
    });
    it("circle ul", () => {
      cy.get("ul.li-circle")
        .should("have.class", "li-circle")
        .should("have.css", "list-style-type", "circle");
      cy.get("ul.li-circle>li:first-child")
        .should("have.css", "list-style-type", "circle");
    });
    it("lower-roman ul", () => {
      cy.get("ul.li-roman")
        .should("have.class", "li-roman")
        .should("have.css", "list-style-type", "lower-roman");
      cy.get("ul.li-roman>li:first-child")
        .should("have.css", "list-style-type", "lower-roman");
    });
    it("decimal ul", () => {
      cy.get("ul.li-decimal")
        .should("have.class", "li-decimal")
        .should("have.css", "list-style-type", "decimal");
      cy.get("ul.li-decimal>li:first-child")
        .should("have.css", "list-style-type", "decimal");
    });
    it("lower-alpha ul", () => {
      cy.get("ul.li-alpha")
        .should("have.class", "li-alpha")
        .should("have.css", "list-style-type", "lower-alpha");
      cy.get("ul.li-alpha>li:first-child")
        .should("have.css", "list-style-type", "lower-alpha");
    });
  });

  context("Bullet placement", () => {

    it("inside ol", () => {
      cy.get("ol.li-inside")
        .should("have.class", "li-inside")
        .should("have.css", "list-style-position", "inside");
      cy.get("ol.li-inside>li:first-child")
        .should("have.css", "list-style-position", "inside");
    });
    it("outside ol", () => {
      cy.get("ol.li-outside")
        .should("have.class", "li-outside")
        .should("have.css", "list-style-position", "outside");
      cy.get("ol.li-outside>li:first-child")
        .should("have.css", "list-style-position", "outside");
    });

    it("inside ul", () => {
      cy.get("ul.li-inside")
        .should("have.class", "li-inside")
        .should("have.css", "list-style-position", "inside");
      cy.get("ul.li-inside>li:first-child")
        .should("have.css", "list-style-position", "inside");
    });
    it("outside ul", () => {
      cy.get("ul.li-outside")
        .should("have.class", "li-outside")
        .should("have.css", "list-style-position", "outside");
      cy.get("ul.li-outside>li:first-child")
        .should("have.css", "list-style-position", "outside");
    });
  });

  context("List orientation", () => {

    it("row ol", () => {
      cy.get("ol.li-row")
        .should("have.class", "li-row")
        .should("have.css", "display", "inline");
      cy.get("ol.li-row>li:first-child")
        .should("have.css", "display", "inline");
    });
    it("row ul", () => {
      cy.get("ul.li-row")
        .should("have.class", "li-row")
        .should("have.css", "display", "inline");
      cy.get("ul.li-row>li:first-child")
        .should("have.css", "display", "inline");
    });

    it("col ol", () => {
      cy.get("ol.li-col")
        .should("have.class", "li-col")
        .should("have.css", "display", "block");
      cy.get("ol.li-col>li:first-child")
        .should("have.css", "display", "list-item");
    });
    it("col ul", () => {
      cy.get("ul.li-col")
        .should("have.class", "li-col")
        .should("have.css", "display", "block");
      cy.get("ul.li-col>li:first-child")
        .should("have.css", "display", "list-item");
    });
  });

  context("List reset", () => {

    it("reset row ol", () => {
      cy.get("ol.li-row.li-reset")
        .should("have.class", "li-reset")
        .should("have.css", "display", "block");
      cy.get("ol.li-row.li-reset>li:first-child")
        .should("have.css", "display", "list-item");
    });
    it("reset col ul", () => {
      cy.get("ul.li-row.li-reset")
        .should("have.class", "li-reset")
        .should("have.css", "display", "block");
      cy.get("ul.li-row.li-reset>li:first-child")
        .should("have.css", "display", "list-item");
    });
  });
});

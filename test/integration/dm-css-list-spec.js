describe("List Style-Notation", () => {

  before(() => {
    cy.visit("/test/web-pages/list.html");
  });

  context("Ordered Lists", () => {
    it("none ol", () => {
      cy.get("ol.list-none")
        .should("have.class", "list-none")
        .should("have.css", "list-style-type", "none");
      cy.get("ol.list-none>li:first")
        .should("have.css", "list-style-type", "none");
    });
    it("disc ol", () => {
      cy.get("ol.list-disc")
        .should("have.class", "list-disc")
        .should("have.css", "list-style-type", "disc");
      cy.get("ol.list-disc>li:first")
        .should("have.css", "list-style-type", "disc");
    });
    it("square ol", () => {
      cy.get("ol.list-square")
        .should("have.class", "list-square")
        .should("have.css", "list-style-type", "square");
      cy.get("ol.list-square>li:first")
        .should("have.css", "list-style-type", "square");
    });
    it("circle ol", () => {
      cy.get("ol.list-circle")
        .should("have.class", "list-circle")
        .should("have.css", "list-style-type", "circle");
      cy.get("ol.list-circle>li:first")
        .should("have.css", "list-style-type", "circle");
    });
    it("lower-roman ol", () => {
      cy.get("ol.list-roman")
        .should("have.class", "list-roman")
        .should("have.css", "list-style-type", "lower-roman");
      cy.get("ol.list-roman>li:first")
        .should("have.css", "list-style-type", "lower-roman");
    });
    it("decimal ol", () => {
      cy.get("ol.list-decimal")
        .should("have.class", "list-decimal")
        .should("have.css", "list-style-type", "decimal");
      cy.get("ol.list-decimal>li:first")
        .should("have.css", "list-style-type", "decimal");
    });
    it("lower-alpha ol", () => {
      cy.get("ol.list-alpha")
        .should("have.class", "list-alpha")
        .should("have.css", "list-style-type", "lower-alpha");
      cy.get("ol.list-alpha>li:first")
        .should("have.css", "list-style-type", "lower-alpha");
    });
  });

  context("Unordered Lists", () => {

    it("none ul", () => {
      cy.get("ul.list-none")
        .should("have.class", "list-none")
        .should("have.css", "list-style-type", "none");
      cy.get("ul.list-none>li:first")
        .should("have.css", "list-style-type", "none");
    });
    it("disc ul", () => {
      cy.get("ul.list-disc")
        .should("have.class", "list-disc")
        .should("have.css", "list-style-type", "disc");
      cy.get("ul.list-disc>li:first")
        .should("have.css", "list-style-type", "disc");
    });
    it("square ul", () => {
      cy.get("ul.list-square")
        .should("have.class", "list-square")
        .should("have.css", "list-style-type", "square");
      cy.get("ul.list-square>li:first")
        .should("have.css", "list-style-type", "square");
    });
    it("circle ul", () => {
      cy.get("ul.list-circle")
        .should("have.class", "list-circle")
        .should("have.css", "list-style-type", "circle");
      cy.get("ul.list-circle>li:first")
        .should("have.css", "list-style-type", "circle");
    });
    it("lower-roman ul", () => {
      cy.get("ul.list-roman")
        .should("have.class", "list-roman")
        .should("have.css", "list-style-type", "lower-roman");
      cy.get("ul.list-roman>li:first")
        .should("have.css", "list-style-type", "lower-roman");
    });
    it("decimal ul", () => {
      cy.get("ul.list-decimal")
        .should("have.class", "list-decimal")
        .should("have.css", "list-style-type", "decimal");
      cy.get("ul.list-decimal>li:first")
        .should("have.css", "list-style-type", "decimal");
    });
    it("lower-alpha ul", () => {
      cy.get("ul.list-alpha")
        .should("have.class", "list-alpha")
        .should("have.css", "list-style-type", "lower-alpha");
      cy.get("ul.list-alpha>li:first")
        .should("have.css", "list-style-type", "lower-alpha");
    });
  });

  context("Bullet placement", () => {

    it("inside ol", () => {
      cy.get("ol.list-inside")
        .should("have.class", "list-inside")
        .should("have.css", "list-style-position", "inside");
      cy.get("ol.list-inside>li:first")
        .should("have.css", "list-style-position", "inside");
    });
    it("outside ol", () => {
      cy.get("ol.list-outside")
        .should("have.class", "list-outside")
        .should("have.css", "list-style-position", "outside");
      cy.get("ol.list-outside>li:first")
        .should("have.css", "list-style-position", "outside");
    });

    it("inside ul", () => {
      cy.get("ul.list-inside")
        .should("have.class", "list-inside")
        .should("have.css", "list-style-position", "inside");
      cy.get("ul.list-inside>li:first")
        .should("have.css", "list-style-position", "inside");
    });
    it("outside ul", () => {
      cy.get("ul.list-outside")
        .should("have.class", "list-outside")
        .should("have.css", "list-style-position", "outside");
      cy.get("ul.list-outside>li:first")
        .should("have.css", "list-style-position", "outside");
    });
  });

  context("List orientation", () => {

    it("row ol", () => {
      cy.get("ol.list-row")
        .should("have.class", "list-row")
        .should("have.css", "display", "inline");
      cy.get("ol.list-row>li:first")
        .should("have.css", "display", "inline");
    });
    it("row ul", () => {
      cy.get("ul.list-row")
        .should("have.class", "list-row")
        .should("have.css", "display", "inline");
      cy.get("ul.list-row>li:first")
        .should("have.css", "display", "inline");
    });

    it("col ol", () => {
      cy.get("ol.list-col")
        .should("have.class", "list-col")
        .should("have.css", "display", "block");
      cy.get("ol.list-col>li:first")
        .should("have.css", "display", "list-item");
    });
    it("col ul", () => {
      cy.get("ul.list-col")
        .should("have.class", "list-col")
        .should("have.css", "display", "block");
      cy.get("ul.list-col>li:first")
        .should("have.css", "display", "list-item");
    });
  });

  context("List reset", () => {

    it("reset row ol", () => {
      cy.get("ol.list-row.list-reset")
        .should("have.class", "list-reset")
        .should("have.css", "display", "block");
      cy.get("ol.list-row.list-reset>li:first")
        .should("have.css", "display", "list-item");
    });
    it("reset col ul", () => {
      cy.get("ul.list-row.list-reset")
        .should("have.class", "list-reset")
        .should("have.css", "display", "block");
      cy.get("ul.list-row.list-reset>li:first")
        .should("have.css", "display", "list-item");
    });
  });
});

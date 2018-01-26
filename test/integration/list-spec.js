describe("List Style-Notation", () => {

  before(() => {
    cy.visit("/web-pages/list.html");
  });

  context("Ordered Lists", () => {
    it("none ol", () => {
      cy.get("ol.lsnone")
        .should("have.class", "lsnone")
        .should("have.css", "list-style-type", "none");
      cy.get("ol.lsnone>li:first-child")
        .should("have.css", "list-style-type", "none");
    });
    it("disc ol", () => {
      cy.get("ol.lsdisc")
        .should("have.class", "lsdisc")
        .should("have.css", "list-style-type", "disc");
      cy.get("ol.lsdisc>li:first-child")
        .should("have.css", "list-style-type", "disc");
    });
    it("square ol", () => {
      cy.get("ol.lssquare")
        .should("have.class", "lssquare")
        .should("have.css", "list-style-type", "square");
      cy.get("ol.lssquare>li:first-child")
        .should("have.css", "list-style-type", "square");
    });
    it("circle ol", () => {
      cy.get("ol.lscircle")
        .should("have.class", "lscircle")
        .should("have.css", "list-style-type", "circle");
      cy.get("ol.lscircle>li:first-child")
        .should("have.css", "list-style-type", "circle");
    });
    it("lower-roman ol", () => {
      cy.get("ol.lsroman")
        .should("have.class", "lsroman")
        .should("have.css", "list-style-type", "lower-roman");
      cy.get("ol.lsroman>li:first-child")
        .should("have.css", "list-style-type", "lower-roman");
    });
    it("decimal ol", () => {
      cy.get("ol.lsdecimal")
        .should("have.class", "lsdecimal")
        .should("have.css", "list-style-type", "decimal");
      cy.get("ol.lsdecimal>li:first-child")
        .should("have.css", "list-style-type", "decimal");
    });
    it("lower-alpha ol", () => {
      cy.get("ol.lsalpha")
        .should("have.class", "lsalpha")
        .should("have.css", "list-style-type", "lower-alpha");
      cy.get("ol.lsalpha>li:first-child")
        .should("have.css", "list-style-type", "lower-alpha");
    });
  });

  context("Unordered Lists", () => {

    it("none ul", () => {
      cy.get("ul.lsnone")
        .should("have.class", "lsnone")
        .should("have.css", "list-style-type", "none");
      cy.get("ul.lsnone>li:first-child")
        .should("have.css", "list-style-type", "none");
    });
    it("disc ul", () => {
      cy.get("ul.lsdisc")
        .should("have.class", "lsdisc")
        .should("have.css", "list-style-type", "disc");
      cy.get("ul.lsdisc>li:first-child")
        .should("have.css", "list-style-type", "disc");
    });
    it("square ul", () => {
      cy.get("ul.lssquare")
        .should("have.class", "lssquare")
        .should("have.css", "list-style-type", "square");
      cy.get("ul.lssquare>li:first-child")
        .should("have.css", "list-style-type", "square");
    });
    it("circle ul", () => {
      cy.get("ul.lscircle")
        .should("have.class", "lscircle")
        .should("have.css", "list-style-type", "circle");
      cy.get("ul.lscircle>li:first-child")
        .should("have.css", "list-style-type", "circle");
    });
    it("lower-roman ul", () => {
      cy.get("ul.lsroman")
        .should("have.class", "lsroman")
        .should("have.css", "list-style-type", "lower-roman");
      cy.get("ul.lsroman>li:first-child")
        .should("have.css", "list-style-type", "lower-roman");
    });
    it("decimal ul", () => {
      cy.get("ul.lsdecimal")
        .should("have.class", "lsdecimal")
        .should("have.css", "list-style-type", "decimal");
      cy.get("ul.lsdecimal>li:first-child")
        .should("have.css", "list-style-type", "decimal");
    });
    it("lower-alpha ul", () => {
      cy.get("ul.lsalpha")
        .should("have.class", "lsalpha")
        .should("have.css", "list-style-type", "lower-alpha");
      cy.get("ul.lsalpha>li:first-child")
        .should("have.css", "list-style-type", "lower-alpha");
    });
  });

  context("Bullet placement", () => {

    it("inside ol", () => {
      cy.get("ol.lsin")
        .should("have.class", "lsin")
        .should("have.css", "list-style-position", "inside");
      cy.get("ol.lsin>li:first-child")
        .should("have.css", "list-style-position", "inside");
    });
    it("outside ol", () => {
      cy.get("ol.lsout")
        .should("have.class", "lsout")
        .should("have.css", "list-style-position", "outside");
      cy.get("ol.lsout>li:first-child")
        .should("have.css", "list-style-position", "outside");
    });

    it("inside ul", () => {
      cy.get("ul.lsin")
        .should("have.class", "lsin")
        .should("have.css", "list-style-position", "inside");
      cy.get("ul.lsin>li:first-child")
        .should("have.css", "list-style-position", "inside");
    });
    it("outside ul", () => {
      cy.get("ul.lsout")
        .should("have.class", "lsout")
        .should("have.css", "list-style-position", "outside");
      cy.get("ul.lsout>li:first-child")
        .should("have.css", "list-style-position", "outside");
    });
  });

  context("List orientation", () => {

    it("row ol", () => {
      cy.get("ol.lsrow")
        .should("have.class", "lsrow")
        .should("have.css", "display", "inline");
      cy.get("ol.lsrow>li:first-child")
        .should("have.css", "display", "inline");
    });
    it("row ul", () => {
      cy.get("ul.lsrow")
        .should("have.class", "lsrow")
        .should("have.css", "display", "inline");
      cy.get("ul.lsrow>li:first-child")
        .should("have.css", "display", "inline");
    });

    it("col ol", () => {
      cy.get("ol.lscol")
        .should("have.class", "lscol")
        .should("have.css", "display", "block");
      cy.get("ol.lscol>li:first-child")
        .should("have.css", "display", "list-item");
    });
    it("col ul", () => {
      cy.get("ul.lscol")
        .should("have.class", "lscol")
        .should("have.css", "display", "block");
      cy.get("ul.lscol>li:first-child")
        .should("have.css", "display", "list-item");
    });
  });

  context("List reset", () => {

    it("reset row ol", () => {
      cy.get("ol.lsrow.lsreset")
        .should("have.class", "lsreset")
        .should("have.css", "display", "block");
      cy.get("ol.lsrow.lsreset>li:first-child")
        .should("have.css", "display", "list-item");
    });
    it("reset col ul", () => {
      cy.get("ul.lsrow.lsreset")
        .should("have.class", "lsreset")
        .should("have.css", "display", "block");
      cy.get("ul.lsrow.lsreset>li:first-child")
        .should("have.css", "display", "list-item");
    });
    it("Sanity check order list", () => {
      // Sanity check normal order list properties
      cy.get("#ollist")
        .should("not.have.class", "lsreset")
        .should("have.css", "list-style-type", "decimal")
        .should("have.css", "display", "block");
      // Sanity check normal order list item properties
      cy.get("#ollist>li:first-child")
        .should("have.css", "list-style-type", "decimal")
        .should("have.css", "display", "list-item");
    });
    it("Reset order row and reset", () => {
      cy.get("#olrowreset")
        .should("have.class", "lsreset")
        .should("have.css", "list-style-type", "decimal")
        .should("have.css", "display", "block");
      cy.get("#olrowreset")
        .parent()
        .should("have.class", "lsrow");
      cy.get("#olrowreset>li:first-child")
        .should("have.css", "list-style-type", "decimal")
        .should("have.css", "display", "list-item");
    });
    it("Reset order col and reset", () => {
      cy.get("#olcolreset")
        .should("have.class", "lsreset")
        .should("have.css", "list-style-type", "decimal")
        .should("have.css", "display", "block");
      cy.get("#olcolreset")
        .parent()
        .should("have.class", "lscol");
      cy.get("#olcolreset>li:first-child")
        .should("have.css", "list-style-type", "decimal")
        .should("have.css", "display", "list-item");
    });
    it("Sanity check unorder list", () => {
      // Sanity check normal order list properties
      cy.get("#ullist")
        .should("not.have.class", "lsreset")
        .should("have.css", "list-style-type", "disc")
        .should("have.css", "display", "block");
      // Sanity check normal order list item properties
      cy.get("#ullist>li:first-child")
        .should("have.css", "list-style-type", "disc")
        .should("have.css", "display", "list-item");
    });
    it("Reset unordered col and reset", () => {
      cy.get("#ulcolreset")
        .should("have.class", "lsreset")
        .should("have.css", "list-style-type", "disc")
        .should("have.css", "display", "block");
      cy.get("#ulcolreset")
        .parent()
        .should("have.class", "lscol");
      cy.get("#ulcolreset>li:first-child")
        .should("have.css", "list-style-type", "disc")
        .should("have.css", "display", "list-item");
    });
  });
});

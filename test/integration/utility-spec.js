describe("Size", () => {

  before(() => {
    cy.visit("/web-pages/utility.html");
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

  context("Opacity", () => {
    it("Level 0", () => {
      cy.get(".opacity0")
        .should("have.class", "opacity0",)
        .should("have.css", "opacity", "0");
    });
    it("Level 1", () => {
      cy.get(".opacity1")
        .should("have.class", "opacity1",)
        .should("have.css", "opacity", "0.05");
    });
    it("Level 2", () => {
      cy.get(".opacity2")
        .should("have.class", "opacity2",)
        .should("have.css", "opacity", "0.1");
    });
    it("Level 3", () => {
      cy.get(".opacity3")
        .should("have.class", "opacity3",)
        .should("have.css", "opacity", "0.28");
    });
    it("Level 4", () => {
      cy.get(".opacity4")
        .should("have.class", "opacity4",)
        .should("have.css", "opacity", "0.46");
    });
    it("Level 5", () => {
      cy.get(".opacity5")
        .should("have.class", "opacity5",)
        .should("have.css", "opacity", "0.64");
    });
    it("Level 6", () => {
      cy.get(".opacity6")
        .should("have.class", "opacity6",)
        .should("have.css", "opacity", "0.82");
    });
    it("Level 7", () => {
      cy.get(".opacity7")
        .should("have.class", "opacity7",)
        .should("have.css", "opacity", "1");
    });
  });
});

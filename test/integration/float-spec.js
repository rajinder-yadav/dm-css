describe("Float", () => {

  before(() => {
    cy.visit("/test/web-pages/float.html");
  });

  it("Float alias left", () => {
    cy.get("#fll")
      .should("have.class", "fll")
      .should("have.css", "float", "left");
  });
  it("Float right", () => {
    cy.get("#flr")
      .should("have.class", "flr")
      .should("have.css", "float", "right");
  });
  it("Float none", () => {
    cy.get("#fln")
      .should("have.class", "fln")
      .should("have.css", "float", "none");
  });
});

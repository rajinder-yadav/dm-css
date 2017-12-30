describe("Float", () => {

  before(() => {
    cy.visit("/test/web-pages/float.html");
  });

  it("Float alias left", () => {
    cy.get("#float-l")
      .should("have.class", "float-l")
      .should("have.css", "float", "left");
  });
  it("Float left", () => {
    cy.get("#fll")
      .should("have.class", "fll")
      .should("have.css", "float", "left");
  });
  it("Float alias right", () => {
    cy.get("#float-r")
      .should("have.class", "float-r")
      .should("have.css", "float", "right");
  });
  it("Float right", () => {
    cy.get("#flr")
      .should("have.class", "flr")
      .should("have.css", "float", "right");
  });
  it("Float alias none", () => {
    cy.get("#float-n")
      .should("have.class", "float-n")
      .should("have.css", "float", "none");
  });
  it("Float none", () => {
    cy.get("#fln")
      .should("have.class", "fln")
      .should("have.css", "float", "none");
  });
});

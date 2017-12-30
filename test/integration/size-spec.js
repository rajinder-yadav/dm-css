describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/size.html");
  });

  context("Width", () => {
    it("Size 10%", () => {
      cy.get(".w10")
        .should("have.class", "w10")
        .should("have.css", "width", "10px");
    });
    it("Size 20%", () => {
      cy.get(".w20")
        .should("have.class", "w20")
        .should("have.css", "width", "20px");
    });
    it("Size 30%", () => {
      cy.get(".w30")
        .should("have.class", "w30")
        .should("have.css", "width", "30px");
    });
    it("Size 40%", () => {
      cy.get(".w40")
        .should("have.class", "w40")
        .should("have.css", "width", "40px");
    });
    it("Size 50%", () => {
      cy.get(".w50")
        .should("have.class", "w50")
        .should("have.css", "width", "50px");
    });
    it("Size 60%", () => {
      cy.get(".w60")
        .should("have.class", "w60")
        .should("have.css", "width", "60px");
    });
    it("Size 70%", () => {
      cy.get(".w70")
        .should("have.class", "w70")
        .should("have.css", "width", "70px");
    });
    it("Size 80%", () => {
      cy.get(".w80")
        .should("have.class", "w80")
        .should("have.css", "width", "80px");
    });
    it("Size 90%", () => {
      cy.get(".w90")
        .should("have.class", "w90")
        .should("have.css", "width", "90px");
    });
    it("Size 100%", () => {
      cy.get(".w100")
        .should("have.class", "w100")
        .should("have.css", "width", "100px");
    });
  });

  context("Height", () => {
    it("Size 10%", () => {
      cy.get(".h10")
        .should("have.class", "h10")
        .should("have.css", "height", "10px");
    });
    it("Size 20%", () => {
      cy.get(".h20")
        .should("have.class", "h20")
        .should("have.css", "height", "20px");
    });
    it("Size 30%", () => {
      cy.get(".h30")
        .should("have.class", "h30")
        .should("have.css", "height", "30px");
    });
    it("Size 40%", () => {
      cy.get(".h40")
        .should("have.class", "h40")
        .should("have.css", "height", "40px");
    });
    it("Size 50%", () => {
      cy.get(".h50")
        .should("have.class", "h50")
        .should("have.css", "height", "50px");
    });
    it("Size 60%", () => {
      cy.get(".h60")
        .should("have.class", "h60")
        .should("have.css", "height", "60px");
    });
    it("Size 70%", () => {
      cy.get(".h70")
        .should("have.class", "h70")
        .should("have.css", "height", "70px");
    });
    it("Size 80%", () => {
      cy.get(".h80")
        .should("have.class", "h80")
        .should("have.css", "height", "80px");
    });
    it("Size 90%", () => {
      cy.get(".h90")
        .should("have.class", "h90")
        .should("have.css", "height", "90px");
    });
    it("Size 100%", () => {
      cy.get(".h100")
        .should("have.class", "h100")
        .should("have.css", "height", "100px");
    });
  });
});

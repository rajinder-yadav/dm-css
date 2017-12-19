describe("Size", () => {

  before(() => {
    cy.visit("/test/web-pages/size.html");
  });

  context("Width and height", () => {
    it("size 10%", () => {
      cy.get(".w10")
        .should("have.class", "w10 h10")
        .should("have.css", "height", "10px")
        .should("have.css", "width", "10px");
    })
    it("size 20%", () => {
      cy.get(".w20")
        .should("have.class", "w20 h20")
        .should("have.css", "height", "20px")
        .should("have.css", "width", "20px");
    })
    it("size 30%", () => {
      cy.get(".w30")
        .should("have.class", "w30 h30")
        .should("have.css", "height", "29px")
        .should("have.css", "width", "29px");
    })
    it("size 40%", () => {
      cy.get(".w40")
        .should("have.class", "w40 h40")
        .should("have.css", "height", "39px")
        .should("have.css", "width", "39px");
    })
    it("size 50%", () => {
      cy.get(".w50")
        .should("have.class", "w50 h50")
        .should("have.css", "height", "49px")
        .should("have.css", "width", "49px");
    })
    it("size 60%", () => {
      cy.get(".w60")
        .should("have.class", "w60 h60")
        .should("have.css", "height", "59px")
        .should("have.css", "width", "59px");
    })
    it("size 70%", () => {
      cy.get(".w70")
        .should("have.class", "w70 h70")
        .should("have.css", "height", "69px")
        .should("have.css", "width", "69px");
    })
    it("size 80%", () => {
      cy.get(".w80")
        .should("have.class", "w80 h80")
        .should("have.css", "height", "78px")
        .should("have.css", "width", "78px");
    })
    it("size 90%", () => {
      cy.get(".w90")
        .should("have.class", "w90 h90")
        .should("have.css", "height", "88px")
        .should("have.css", "width", "88px");
    })
    it("size 100%", () => {
      cy.get(".w100")
        .should("have.class", "w100 h100")
        .should("have.css", "height", "98px")
        .should("have.css", "width", "98px");
    })
  });
});

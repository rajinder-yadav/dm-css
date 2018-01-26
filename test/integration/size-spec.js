describe("Size", () => {

  before(() => {
    cy.visit("/web-pages/size.html");
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

  context("Minimum width", () => {
    it("Size 10%", () => {
      cy.get(".wmin10")
        .should("have.class", "wmin10")
        .should("have.css", "min-width", "10%");
    });
    it("Size 20%", () => {
      cy.get(".wmin20")
        .should("have.class", "wmin20")
        .should("have.css", "min-width", "20%");
    });
    it("Size 30%", () => {
      cy.get(".wmin30")
        .should("have.class", "wmin30")
        .should("have.css", "min-width", "30%");
    });
    it("Size 40%", () => {
      cy.get(".wmin40")
        .should("have.class", "wmin40")
        .should("have.css", "min-width", "40%");
    });
    it("Size 50%", () => {
      cy.get(".wmin50")
        .should("have.class", "wmin50")
        .should("have.css", "min-width", "50%");
    });
    it("Size 60%", () => {
      cy.get(".wmin60")
        .should("have.class", "wmin60")
        .should("have.css", "min-width", "60%");
    });
    it("Size 70%", () => {
      cy.get(".wmin70")
        .should("have.class", "wmin70")
        .should("have.css", "min-width", "70%");
    });
    it("Size 80%", () => {
      cy.get(".wmin80")
        .should("have.class", "wmin80")
        .should("have.css", "min-width", "80%");
    });
    it("Size 90%", () => {
      cy.get(".wmin90")
        .should("have.class", "wmin90")
        .should("have.css", "min-width", "90%");
    });
    it("Size 100%", () => {
      cy.get(".wmin100")
        .should("have.class", "wmin100")
        .should("have.css", "min-width", "100%");
    });
  });

  context("Maximum width", () => {
    it("Size 10%", () => {
      cy.get(".wmax10")
        .should("have.class", "wmax10")
        .should("have.css", "max-width", "10%");
    });
    it("Size 20%", () => {
      cy.get(".wmax20")
        .should("have.class", "wmax20")
        .should("have.css", "max-width", "20%");
    });
    it("Size 30%", () => {
      cy.get(".wmax30")
        .should("have.class", "wmax30")
        .should("have.css", "max-width", "30%");
    });
    it("Size 40%", () => {
      cy.get(".wmax40")
        .should("have.class", "wmax40")
        .should("have.css", "max-width", "40%");
    });
    it("Size 50%", () => {
      cy.get(".wmax50")
        .should("have.class", "wmax50")
        .should("have.css", "max-width", "50%");
    });
    it("Size 60%", () => {
      cy.get(".wmax60")
        .should("have.class", "wmax60")
        .should("have.css", "max-width", "60%");
    });
    it("Size 70%", () => {
      cy.get(".wmax70")
        .should("have.class", "wmax70")
        .should("have.css", "max-width", "70%");
    });
    it("Size 80%", () => {
      cy.get(".wmax80")
        .should("have.class", "wmax80")
        .should("have.css", "max-width", "80%");
    });
    it("Size 90%", () => {
      cy.get(".wmax90")
        .should("have.class", "wmax90")
        .should("have.css", "max-width", "90%");
    });
    it("Size 100%", () => {
      cy.get(".wmax100")
        .should("have.class", "wmax100")
        .should("have.css", "max-width", "100%");
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

  context("Minimum height", () => {
    it("Size 10%", () => {
      cy.get(".hmin10")
        .should("have.class", "hmin10")
        .should("have.css", "min-height", "10%");
    });
    it("Size 20%", () => {
      cy.get(".hmin20")
        .should("have.class", "hmin20")
        .should("have.css", "min-height", "20%");
    });
    it("Size 30%", () => {
      cy.get(".hmin30")
        .should("have.class", "hmin30")
        .should("have.css", "min-height", "30%");
    });
    it("Size 40%", () => {
      cy.get(".hmin40")
        .should("have.class", "hmin40")
        .should("have.css", "min-height", "40%");
    });
    it("Size 50%", () => {
      cy.get(".hmin50")
        .should("have.class", "hmin50")
        .should("have.css", "min-height", "50%");
    });
    it("Size 60%", () => {
      cy.get(".hmin60")
        .should("have.class", "hmin60")
        .should("have.css", "min-height", "60%");
    });
    it("Size 70%", () => {
      cy.get(".hmin70")
        .should("have.class", "hmin70")
        .should("have.css", "min-height", "70%");
    });
    it("Size 80%", () => {
      cy.get(".hmin80")
        .should("have.class", "hmin80")
        .should("have.css", "min-height", "80%");
    });
    it("Size 90%", () => {
      cy.get(".hmin90")
        .should("have.class", "hmin90")
        .should("have.css", "min-height", "90%");
    });
    it("Size 100%", () => {
      cy.get(".hmin100")
        .should("have.class", "hmin100")
        .should("have.css", "min-height", "100%");
    });
  });
  context("Maximum height", () => {
    it("Size 10%", () => {
      cy.get(".hmax10")
        .should("have.class", "hmax10")
        .should("have.css", "max-height", "10%");
    });
    it("Size 20%", () => {
      cy.get(".hmax20")
        .should("have.class", "hmax20")
        .should("have.css", "max-height", "20%");
    });
    it("Size 30%", () => {
      cy.get(".hmax30")
        .should("have.class", "hmax30")
        .should("have.css", "max-height", "30%");
    });
    it("Size 40%", () => {
      cy.get(".hmax40")
        .should("have.class", "hmax40")
        .should("have.css", "max-height", "40%");
    });
    it("Size 50%", () => {
      cy.get(".hmax50")
        .should("have.class", "hmax50")
        .should("have.css", "max-height", "50%");
    });
    it("Size 60%", () => {
      cy.get(".hmax60")
        .should("have.class", "hmax60")
        .should("have.css", "max-height", "60%");
    });
    it("Size 70%", () => {
      cy.get(".hmax70")
        .should("have.class", "hmax70")
        .should("have.css", "max-height", "70%");
    });
    it("Size 80%", () => {
      cy.get(".hmax80")
        .should("have.class", "hmax80")
        .should("have.css", "max-height", "80%");
    });
    it("Size 90%", () => {
      cy.get(".hmax90")
        .should("have.class", "hmax90")
        .should("have.css", "max-height", "90%");
    });
    it("Size 100%", () => {
      cy.get(".hmax100")
        .should("have.class", "hmax100")
        .should("have.css", "max-height", "100%");
    });
  });
});

describe("Typography", () => {
  beforeEach(() => {
    cy.visit("/web-pages/typography.html");
  });

  context("Headings", () => {
    it("h1", () => {
      cy.get(".h1")
        .should("have.class", "h1")
        .should("have.css", "font-size", "48.832px");
    });
    it("h2", () => {
      cy.get(".h2")
        .should("have.class", "h2")
        .should("have.css", "font-size", "39.056px");
    });
    it("h3", () => {
      cy.get(".h3")
        .should("have.class", "h3")
        .should("have.css", "font-size", "31.248px");
    });
    it("h4", () => {
      cy.get(".h4")
        .should("have.class", "h4")
        .should("have.css", "font-size", "25.008px");
    });
    it("h5", () => {
      cy.get(".h5")
        .should("have.class", "h5")
        .should("have.css", "font-size", "20px");
    });
    it("h6", () => {
      cy.get(".h6")
        .should("have.class", "h6")
        .should("have.css", "font-size", "16px");
    });
    it("h7", () => {
      cy.get(".h7")
        .should("have.class", "h7")
        .should("have.css", "font-size", "14.224px");
    });
  });

  context("Font height increasing", () => {
    it("fh1", () => {
      cy.get(".fh1")
        .should("have.class", "fh1")
        .should("have.css", "font-size", "16px");
    });
    it("fh2", () => {
      cy.get(".fh2")
        .should("have.class", "fh2")
        .should("have.css", "font-size", "21.328px");
    });
    it("fh3", () => {
      cy.get(".fh3")
        .should("have.class", "fh3")
        .should("have.css", "font-size", "28.448px");
    });
    it("fh4", () => {
      cy.get(".fh4")
        .should("have.class", "fh4")
        .should("have.css", "font-size", "37.92px");
    });
    it("fh5", () => {
      cy.get(".fh5")
        .should("have.class", "fh5")
        .should("have.css", "font-size", "50.56px");
    });
    it("fh6", () => {
      cy.get(".fh6")
        .should("have.class", "fh6")
        .should("have.css", "font-size", "67.424px");
    });
    it("fh7", () => {
      cy.get(".fh7")
        .should("have.class", "fh7")
        .should("have.css", "font-size", "89.904px");
    });
  });

  context("Font height decreasing", () => {
    it("fh-1", () => {
      cy.get(".fh-1")
        .should("have.class", "fh-1")
        .should("have.css", "font-size", "14.4px");
    });
    it("fh-2", () => {
      cy.get(".fh-2")
        .should("have.class", "fh-2")
        .should("have.css", "font-size", "12.8px");
    });
    it("fh-3", () => {
      cy.get(".fh-3")
        .should("have.class", "fh-3")
        .should("have.css", "font-size", "11.2px");
    });
    it("fh-4", () => {
      cy.get(".fh-4")
        .should("have.class", "fh-4")
        .should("have.css", "font-size", "9.6px");
    });
    it("fh-5", () => {
      cy.get(".fh-5")
        .should("have.class", "fh-5")
        .should("have.css", "font-size", "8px");
    });
    it("fh-6", () => {
      cy.get(".fh-6")
        .should("have.class", "fh-6")
        .should("have.css", "font-size", "6.4px");
    });
    it("fh-7", () => {
      cy.get(".fh-7")
        .should("have.class", "fh-7")
        .should("have.css", "font-size", "4.8px");
    });
  });

  context("Font style", () => {
    it("fsn", () => {
      cy.get(".fsn")
        .should("have.class", "fsn")
        .should("have.css", "font-style", "normal")
        .should("have.css", "font-weight", "400");
    });
    it("fsi", () => {
      cy.get(".fsi")
        .should("have.class", "fsi")
        .should("have.css", "font-style", "italic");
    });
    it("fsb", () => {
      cy.get(".fsb")
        .should("have.class", "fsb")
        .should("have.css", "font-weight", "700");
    });
    it("fsu", () => {
      cy.get(".fsu")
        .should("have.class", "fsu")
        .should("have.css", "text-decoration-line", "underline")
        .should("have.css", "text-decoration-style", "solid");
    });
    it("fss", () => {
      cy.get(".fss")
        .should("have.css", "text-decoration-line", "line-through")
        .should("have.css", "text-decoration-style", "solid");
    });
    it("fsw", () => {
      cy.get(".fsw")
        .should("have.css", "text-decoration-line", "underline")
        .should("have.css", "text-decoration-style", "wavy");
    });
  });

  context("Font weight", () => {
    it("fw100", () => {
      cy.get(".fw100")
        .should("have.class", "fw100")
        .should("have.css", "font-weight", "100");
    });
    it("fw200", () => {
      cy.get(".fw200")
        .should("have.class", "fw200")
        .should("have.css", "font-weight", "200");
    });
    it("fw300", () => {
      cy.get(".fw300")
        .should("have.class", "fw300")
        .should("have.css", "font-weight", "300");
    });
    it("fw400", () => {
      cy.get(".fw400")
        .should("have.class", "fw400")
        .should("have.css", "font-weight", "400");
    });
    it("fw500", () => {
      cy.get(".fw500")
        .should("have.class", "fw500")
        .should("have.css", "font-weight", "500");
    });
    it("fw600", () => {
      cy.get(".fw600")
        .should("have.class", "fw600")
        .should("have.css", "font-weight", "600");
    });
    it("fw700", () => {
      cy.get(".fw700")
        .should("have.class", "fw700")
        .should("have.css", "font-weight", "700");
    });
    it("fw800", () => {
      cy.get(".fw800")
        .should("have.class", "fw800")
        .should("have.css", "font-weight", "800");
    });
    it("fw900", () => {
      cy.get(".fw900")
        .should("have.class", "fw900")
        .should("have.css", "font-weight", "900");
    });
  });

});

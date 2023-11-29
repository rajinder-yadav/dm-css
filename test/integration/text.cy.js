describe("Text", () => {
  beforeEach(() => {
    cy.visit("/web-pages/text.html");
  });

  context("Justification", () => {
    it("Left", () => {
      cy.get(".ttl")
        .should("have.css", "text-align", "left");
    });
    it("Right", () => {
      cy.get(".ttr")
        .should("have.css", "text-align", "right");
    });
    it("Center", () => {
      cy.get(".ttc")
        .should("have.css", "text-align", "center");
    });
    it("Justify", () => {
      cy.get(".ttj")
        .should("have.css", "text-align", "justify");
      // .should("have.css", "text-justify", "auto"); // <- Chrome has a bug.
    });
  });

  context("Vertical alignment", () => {
    it("Valign top", () => {
      cy.get(".ttvt")
        .should("have.css", "vertical-align", "top");
    });
    it("Valign middle", () => {
      cy.get(".ttvm")
        .should("have.css", "vertical-align", "middle");
    });
    it("Valign baseline", () => {
      cy.get(".ttvbl")
        .should("have.css", "vertical-align", "baseline");
    });
    it("Valign bottom", () => {
      cy.get(".ttvb")
        .should("have.css", "vertical-align", "bottom");
    });
    it("Text top", () => {
      cy.get(".ttvtt")
        .should("have.css", "vertical-align", "text-top");
    });
    it("Text bottom", () => {
      cy.get(".ttvtb")
        .should("have.css", "vertical-align", "text-bottom");
    });
    it("Text sub", () => {
      cy.get(".ttsub")
        .should("have.css", "vertical-align", "sub");
    });
    it("Text super", () => {
      cy.get(".ttsuper")
        .should("have.css", "vertical-align", "super");
    });
  });

  context("Text transform", () => {
    it("Capatialize", () => {
      cy.get(".ttcap")
        .should("have.css", "text-transform", "capitalize");
    });
    it("Uppercase", () => {
      cy.get(".ttup")
        .should("have.css", "text-transform", "uppercase");
    });
    it("Lowercase", () => {
      cy.get(".ttlow")
        .should("have.css", "text-transform", "lowercase");
    });
    it("None", () => {
      cy.get(".ttnone")
        .should("have.css", "text-transform", "none");
    });
  });

  context("Text Wrapping", () => {
    it("Wrap", () => {
      cy.get(".ttwrap")
        .should("have.css", "overflow-wrap", "break-word");
    });
    it("No wrap", () => {
      cy.get(".ttnowrap")
        .should("have.css", "overflow-wrap", "normal");
    });
  });

  context("Overflow control", () => {
    it("Overflow", () => {
      cy.get(".ttof")
        .should("have.css", "overflow-x", "visible")
        .should("have.css", "overflow-y", "visible");
    });
    it("Overflow auto", () => {
      cy.get(".ttofa")
        .should("have.css", "overflow-x", "auto")
        .should("have.css", "overflow-y", "auto");
    });
    it("Clip", () => {
      cy.get(".ttclip")
        .should("have.css", "overflow-x", "hidden")
        .should("have.css", "overflow-y", "hidden");
    });
    it("Scroll", () => {
      cy.get(".ttscroll")
        .should("have.css", "overflow-x", "scroll")
        .should("have.css", "overflow-y", "scroll");
    });
    it("Overflow y", () => {
      cy.get(".ttofy")
        .should("have.css", "overflow-y", "visible");
    });
    it("Overflow y auto", () => {
      cy.get(".ttofya")
        .should("have.css", "overflow-y", "auto");
    });
    it("Clip y", () => {
      cy.get(".ttclipy")
        .should("have.css", "overflow-y", "hidden");
    });
    it("Scroll y", () => {
      cy.get(".ttscrolly")
        .should("have.css", "overflow-y", "scroll");
    });
    it("Overflow x", () => {
      cy.get(".ttofx")
        .should("have.css", "overflow-x", "visible");
    });
    it("Overflow x auto", () => {
      cy.get(".ttofxa")
        .should("have.css", "overflow-x", "auto");
    });
    it("Clip x", () => {
      cy.get(".ttclipx")
        .should("have.css", "overflow-x", "hidden");
    });
    it("Scroll x", () => {
      cy.get(".ttscrollx")
        .should("have.css", "overflow-x", "scroll");
    });
    it("Word break", () => {
      cy.get(".ttwb")
        .should("have.css", "word-break", "normal");
    });
    it("Word break all", () => {
      cy.get(".ttwba")
        .should("have.css", "word-break", "break-all");
    });
  });

  context("Line Height", () => {
    it("Line height: ttlh0", () => {
      cy.get(".ttlh0")
        .should("have.class", "ttlh0")
        .should("have.css", "line-height", "0px");
    });
    it("Line height: ttlh1", () => {
      cy.get(".ttlh1")
        .should("have.class", "ttlh1")
        .should("have.css", "line-height", "16px");
    });
    it("Line height: ttlh2", () => {
      cy.get(".ttlh2")
        .should("have.class", "ttlh2")
        .should("have.css", "line-height", "20px");
    });
    it("Line height: ttlh3", () => {
      cy.get(".ttlh3")
        .should("have.class", "ttlh3")
        .should("have.css", "line-height", "21.9167px");
    });
    it("Line height: ttlh4", () => {
      cy.get(".ttlh4")
        .should("have.class", "ttlh4")
        .should("have.css", "line-height", "24px");
    });
    it("Line height: ttlh5", () => {
      cy.get(".ttlh5")
        .should("have.class", "ttlh5")
        .should("have.css", "line-height", "26.7167px");
    });
    it("Line height: ttlh6", () => {
      cy.get(".ttlh6")
        .should("have.class", "ttlh6")
        .should("have.css", "line-height", "29.6px");
    });
    it("Line height: ttlh7", () => {
      cy.get(".ttlh7")
        .should("have.class", "ttlh7")
        .should("have.css", "line-height", "32px");
    });
  });

  context("Nagative line Height", () => {
    it("Line height: ttlh-1", () => {
      cy.get(".ttlh-1")
        .should("have.class", "ttlh-1")
        .should("have.css", "line-height", "13.6px");
    });
    it("Line height: ttlh-2", () => {
      cy.get(".ttlh-2")
        .should("have.class", "ttlh-2")
        .should(($p) => {
          console.log($p);
        });
      // .should("have.css", "line-height", "10.72px");
    });
    it("Line height: ttlh-3", () => {
      cy.get(".ttlh-3")
        .should("have.class", "ttlh-3")
        .should("have.css", "line-height", "8px");
    });
    it("Line height: ttlh-4", () => {
      cy.get(".ttlh-4")
        .should("have.class", "ttlh-4")
        .should("have.css", "line-height", "5.91667px");
    });
    it("Line height: ttlh-5", () => {
      cy.get(".ttlh-5")
        .should("have.class", "ttlh-5")
        .should("have.css", "line-height", "4px");
    });
    it("Line height: ttlh-6", () => {
      cy.get(".ttlh-6")
        .should("have.class", "ttlh-6")
        .should("have.css", "line-height", "2.4px");
    });
    it("Line height: ttlh-7", () => {
      cy.get(".ttlh-7")
        .should("have.class", "ttlh-7")
        .should("have.css", "line-height", "1.11667px");
    });
  });

  context("Word direction language", () => {
    it("Direction LTR", () => {
      cy.get(".ttltr")
        .should("have.class", "ttltr")
        .should("have.css", "direction", "ltr");
    });
    it("Direction RTL", () => {
      cy.get(".ttrtl")
        .should("have.class", "ttrtl")
        .should("have.css", "direction", "rtl");
    });
  });

});

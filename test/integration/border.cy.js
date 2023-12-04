describe("Border Style-Notation", () => {
  beforeEach(() => {
    cy.visit("/web-pages/border.html");
  });

  context("Border size all sides", () => {
    it("None", () => {
      cy.get("#b0")
        .should("have.class", "b0")
        .should("have.css", "border-top-width", "0px")
        .should("have.css", "border-bottom-width", "0px")
        .should("have.css", "border-left-width", "0px")
        .should("have.css", "border-right-width", "0px");
    });
    it("Border size 1px", () => {
      cy.get("#b1")
        .should("have.class", "b1")
        .should("have.css", "border-top-width", "1px")
        .should("have.css", "border-bottom-width", "1px")
        .should("have.css", "border-left-width", "1px")
        .should("have.css", "border-right-width", "1px");
    });
    it("Border size 2px", () => {
      cy.get("#b2")
        .should("have.class", "b2")
        .should("have.css", "border-top-width", "2px")
        .should("have.css", "border-bottom-width", "2px")
        .should("have.css", "border-left-width", "2px")
        .should("have.css", "border-right-width", "2px");
    });
    it("Border size 3px", () => {
      cy.get("#b3")
        .should("have.class", "b3")
        .should("have.css", "border-top-width", "3px")
        .should("have.css", "border-bottom-width", "3px")
        .should("have.css", "border-left-width", "3px")
        .should("have.css", "border-right-width", "3px");
    });
    it("Border size 4px", () => {
      cy.get("#b4")
        .should("have.class", "b4")
        .should("have.css", "border-top-width", "4px")
        .should("have.css", "border-bottom-width", "4px")
        .should("have.css", "border-left-width", "4px")
        .should("have.css", "border-right-width", "4px");
    });
    it("Border size 5px", () => {
      cy.get("#b5")
        .should("have.class", "b5")
        .should("have.css", "border-top-width", "5px")
        .should("have.css", "border-bottom-width", "5px")
        .should("have.css", "border-left-width", "5px")
        .should("have.css", "border-right-width", "5px");
    });
    it("Border size 6px", () => {
      cy.get("#b6")
        .should("have.class", "b6")
        .should("have.css", "border-top-width", "6px")
        .should("have.css", "border-bottom-width", "6px")
        .should("have.css", "border-left-width", "6px")
        .should("have.css", "border-right-width", "6px");
    });
    it("Border size 7px", () => {
      cy.get("#b7")
        .should("have.class", "b7")
        .should("have.css", "border-top-width", "7px")
        .should("have.css", "border-bottom-width", "7px")
        .should("have.css", "border-left-width", "7px")
        .should("have.css", "border-right-width", "7px");
    });
  });

  context("Border size top", () => {
    it("Border top size 0px", () => {
      cy.get("#bt0")
        .should("have.class", "bt0")
        .should("have.css", "border-top-width", "0px");
    });
    it("Border top size 1px", () => {
      cy.get("#bt1")
        .should("have.class", "bt1")
        .should("have.css", "border-top-width", "1px");
    });
    it("Border top size 2px", () => {
      cy.get("#bt2")
        .should("have.class", "bt2")
        .should("have.css", "border-top-width", "2px");
    });
    it("Border top size 3px", () => {
      cy.get("#bt3")
        .should("have.class", "bt3")
        .should("have.css", "border-top-width", "3px");
    });
    it("Border top size 4px", () => {
      cy.get("#bt4")
        .should("have.class", "bt4")
        .should("have.css", "border-top-width", "4px");
    });
    it("Border top size 5px", () => {
      cy.get("#bt5")
        .should("have.class", "bt5")
        .should("have.css", "border-top-width", "5px");
    });
    it("Border top size 6px", () => {
      cy.get("#bt6")
        .should("have.class", "bt6")
        .should("have.css", "border-top-width", "6px");
    });
    it("Border top size 7px", () => {
      cy.get("#bt7")
        .should("have.class", "bt7")
        .should("have.css", "border-top-width", "7px");
    });
  });

  context("Border size bottom", () => {
    it("Border bottom size 0px", () => {
      cy.get("#bb0")
        .should("have.class", "bb0")
        .should("have.css", "border-bottom-width", "0px");
    });
    it("Border bottom size 1px", () => {
      cy.get("#bb1")
        .should("have.class", "bb1")
        .should("have.css", "border-bottom-width", "1px");
    });
    it("Border bottom size 2px", () => {
      cy.get("#bb2")
        .should("have.class", "bb2")
        .should("have.css", "border-bottom-width", "2px");
    });
    it("Border bottom size 3px", () => {
      cy.get("#bb3")
        .should("have.class", "bb3")
        .should("have.css", "border-bottom-width", "3px");
    });
    it("Border bottom size 4px", () => {
      cy.get("#bb4")
        .should("have.class", "bb4")
        .should("have.css", "border-bottom-width", "4px");
    });
    it("Border bottom size 5px", () => {
      cy.get("#bb5")
        .should("have.class", "bb5")
        .should("have.css", "border-bottom-width", "5px");
    });
    it("Border bottom size 6px", () => {
      cy.get("#bb6")
        .should("have.class", "bb6")
        .should("have.css", "border-bottom-width", "6px");
    });
    it("Border bottom size 7px", () => {
      cy.get("#bb7")
        .should("have.class", "bb7")
        .should("have.css", "border-bottom-width", "7px");
    });
  });

  context("Border size left", () => {
    it("Border left size 0px", () => {
      cy.get("#bl0")
        .should("have.class", "bl0")
        .should("have.css", "border-left-width", "0px");
    });
    it("Border left size 1px", () => {
      cy.get("#bl1")
        .should("have.class", "bl1")
        .should("have.css", "border-left-width", "1px");
    });
    it("Border left size 2px", () => {
      cy.get("#bl2")
        .should("have.class", "bl2")
        .should("have.css", "border-left-width", "2px");
    });
    it("Border left size 3px", () => {
      cy.get("#bl3")
        .should("have.class", "bl3")
        .should("have.css", "border-left-width", "3px");
    });
    it("Border left size 4px", () => {
      cy.get("#bl4")
        .should("have.class", "bl4")
        .should("have.css", "border-left-width", "4px");
    });
    it("Border left size 5px", () => {
      cy.get("#bl5")
        .should("have.class", "bl5")
        .should("have.css", "border-left-width", "5px");
    });
    it("Border left size 6px", () => {
      cy.get("#bl6")
        .should("have.class", "bl6")
        .should("have.css", "border-left-width", "6px");
    });
    it("Border left size 7px", () => {
      cy.get("#bl7")
        .should("have.class", "bl7")
        .should("have.css", "border-left-width", "7px");
    });
  });

  context("Border size right", () => {
    it("Border right size 0px", () => {
      cy.get("#br0")
        .should("have.class", "br0")
        .should("have.css", "border-right-width", "0px");
    });
    it("Border right size 1px", () => {
      cy.get("#br1")
        .should("have.class", "br1")
        .should("have.css", "border-right-width", "1px");
    });
    it("Border right size 2px", () => {
      cy.get("#br2")
        .should("have.class", "br2")
        .should("have.css", "border-right-width", "2px");
    });
    it("Border right size 3px", () => {
      cy.get("#br3")
        .should("have.class", "br3")
        .should("have.css", "border-right-width", "3px");
    });
    it("Border right size 4px", () => {
      cy.get("#br4")
        .should("have.class", "br4")
        .should("have.css", "border-right-width", "4px");
    });
    it("Border right size 5px", () => {
      cy.get("#br5")
        .should("have.class", "br5")
        .should("have.css", "border-right-width", "5px");
    });
    it("Border right size 6px", () => {
      cy.get("#br6")
        .should("have.class", "br6")
        .should("have.css", "border-right-width", "6px");
    });
    it("Border right size 7px", () => {
      cy.get("#br7")
        .should("have.class", "br7")
        .should("have.css", "border-right-width", "7px");
    });
  });

  context("Border size faces", () => {
    it("Border left-right size 0px", () => {
      cy.get("#bx0")
        .should("have.class", "bx0")
        .should("have.css", "border-left-width", "0px")
        .should("have.css", "border-right-width", "0px");
    });
    it("Border left-right size 1px", () => {
      cy.get("#bx1")
        .should("have.class", "bx1")
        .should("have.css", "border-left-width", "1px")
        .should("have.css", "border-right-width", "1px");
    });
    it("Border left-right size 2px", () => {
      cy.get("#bx2")
        .should("have.class", "bx2")
        .should("have.css", "border-left-width", "2px")
        .should("have.css", "border-right-width", "2px");
    });
    it("Border left-right size 3px", () => {
      cy.get("#bx3")
        .should("have.class", "bx3")
        .should("have.css", "border-left-width", "3px")
        .should("have.css", "border-right-width", "3px");
    });
    it("Border left-right size 4px", () => {
      cy.get("#bx4")
        .should("have.class", "bx4")
        .should("have.css", "border-left-width", "4px")
        .should("have.css", "border-right-width", "4px");
    });
    it("Border left-right size 5px", () => {
      cy.get("#bx5")
        .should("have.class", "bx5")
        .should("have.css", "border-left-width", "5px")
        .should("have.css", "border-right-width", "5px");
    });
    it("Border left-right size 6px", () => {
      cy.get("#bx6")
        .should("have.class", "bx6")
        .should("have.css", "border-left-width", "6px")
        .should("have.css", "border-right-width", "6px");
    });
    it("Border left-right size 7px", () => {
      cy.get("#bx7")
        .should("have.class", "bx7")
        .should("have.css", "border-left-width", "7px")
        .should("have.css", "border-right-width", "7px");
    });

    it("Border top-bottom size 0px", () => {
      cy.get("#by0")
        .should("have.class", "by0")
        .should("have.css", "border-top-width", "0px")
        .should("have.css", "border-bottom-width", "0px");
    });
    it("Border top-bottom size 1px", () => {
      cy.get("#by1")
        .should("have.class", "by1")
        .should("have.css", "border-top-width", "1px")
        .should("have.css", "border-bottom-width", "1px");
    });
    it("Border top-bottom size 2px", () => {
      cy.get("#by2")
        .should("have.class", "by2")
        .should("have.css", "border-top-width", "2px")
        .should("have.css", "border-bottom-width", "2px");
    });
    it("Border top-bottom size 3px", () => {
      cy.get("#by3")
        .should("have.class", "by3")
        .should("have.css", "border-top-width", "3px")
        .should("have.css", "border-bottom-width", "3px");
    });
    it("Border top-bottom size 4px", () => {
      cy.get("#by4")
        .should("have.class", "by4")
        .should("have.css", "border-top-width", "4px")
        .should("have.css", "border-bottom-width", "4px");
    });
    it("Border top-bottom size 5px", () => {
      cy.get("#by5")
        .should("have.class", "by5")
        .should("have.css", "border-top-width", "5px")
        .should("have.css", "border-bottom-width", "5px");
    });
    it("Border top-bottom size 6px", () => {
      cy.get("#by6")
        .should("have.class", "by6")
        .should("have.css", "border-top-width", "6px")
        .should("have.css", "border-bottom-width", "6px");
    });
    it("Border top-bottom size 7px", () => {
      cy.get("#by7")
        .should("have.class", "by7")
        .should("have.css", "border-top-width", "7px")
        .should("have.css", "border-bottom-width", "7px");
    });
  });

  context("Border special radius", () => {
    it("Circle", () => {
      cy.get("#circle")
        .should("have.class", "circle")
        .should("have.css", "border-top-left-radius", "50%")
        .should("have.css", "border-top-right-radius", "50%")
        .should("have.css", "border-bottom-left-radius", "50%")
        .should("have.css", "border-bottom-right-radius", "50%");
    });
    it("Pill1", () => {
      cy.get("#pill1")
        .should("have.class", "pill1")
        .should("have.css", "border-top-left-radius", "10% 50%")
        .should("have.css", "border-top-right-radius", "10% 50%")
        .should("have.css", "border-bottom-left-radius", "10% 50%")
        .should("have.css", "border-bottom-right-radius", "10% 50%");
    });
    it("Pill2", () => {
      cy.get("#pill2")
        .should("have.class", "pill2")
        .should("have.css", "border-top-left-radius", "15% 50%")
        .should("have.css", "border-top-right-radius", "15% 50%")
        .should("have.css", "border-bottom-left-radius", "15% 50%")
        .should("have.css", "border-bottom-right-radius", "15% 50%");
    });
    it("Pill3", () => {
      cy.get("#pill3")
        .should("have.class", "pill3")
        .should("have.css", "border-top-left-radius", "20% 50%")
        .should("have.css", "border-top-right-radius", "20% 50%")
        .should("have.css", "border-bottom-left-radius", "20% 50%")
        .should("have.css", "border-bottom-right-radius", "20% 50%");
    });
    it("Pill4 ", () => {
      cy.get("#pill4")
        .should("have.class", "pill4")
        .should("have.css", "border-top-left-radius", "25% 50%")
        .should("have.css", "border-top-right-radius", "25% 50%")
        .should("have.css", "border-bottom-left-radius", "25% 50%")
        .should("have.css", "border-bottom-right-radius", "25% 50%");
    });
  });

  context("Border radius", () => {
    it("r0", () => {
      cy.get("#r0")
        .should("have.class", "r0")
        .should("have.css", "border-top-left-radius", "0px")
        .should("have.css", "border-top-right-radius", "0px")
        .should("have.css", "border-bottom-left-radius", "0px")
        .should("have.css", "border-bottom-right-radius", "0px");
    });
    it("r1", () => {
      cy.get("#r1")
        .should("have.class", "r1")
        .should("have.css", "border-top-left-radius", "4px")
        .should("have.css", "border-top-right-radius", "4px")
        .should("have.css", "border-bottom-left-radius", "4px")
        .should("have.css", "border-bottom-right-radius", "4px");
    });
    it("r2", () => {
      cy.get("#r2")
        .should("have.class", "r2")
        .should("have.css", "border-top-left-radius", "6.464px")
        .should("have.css", "border-top-right-radius", "6.464px")
        .should("have.css", "border-bottom-left-radius", "6.464px")
        .should("have.css", "border-bottom-right-radius", "6.464px");
    });
    it("r3", () => {
      cy.get("#r3")
        .should("have.class", "r3")
        .should("have.css", "border-top-left-radius", "10.48px")
        .should("have.css", "border-top-right-radius", "10.48px")
        .should("have.css", "border-bottom-left-radius", "10.48px")
        .should("have.css", "border-bottom-right-radius", "10.48px");
    });
    it("r4", () => {
      cy.get("#r4")
        .should("have.class", "r4")
        .should("have.css", "border-top-left-radius", "16.944px")
        .should("have.css", "border-top-right-radius", "16.944px")
        .should("have.css", "border-bottom-left-radius", "16.944px")
        .should("have.css", "border-bottom-right-radius", "16.944px");
    });
    it("r5", () => {
      cy.get("#r5")
        .should("have.class", "r5")
        .should("have.css", "border-top-left-radius", "27.424px")
        .should("have.css", "border-top-right-radius", "27.424px")
        .should("have.css", "border-bottom-left-radius", "27.424px")
        .should("have.css", "border-bottom-right-radius", "27.424px");
    });
    it("r6", () => {
      cy.get("#r6")
        .should("have.class", "r6")
        .should("have.css", "border-top-left-radius", "44.368px")
        .should("have.css", "border-top-right-radius", "44.368px")
        .should("have.css", "border-bottom-left-radius", "44.368px")
        .should("have.css", "border-bottom-right-radius", "44.368px");
    });
    it("r7", () => {
      cy.get("#r7")
        .should("have.class", "r7")
        .should("have.css", "border-top-left-radius", "71.776px")
        .should("have.css", "border-top-right-radius", "71.776px")
        .should("have.css", "border-bottom-left-radius", "71.776px")
        .should("have.css", "border-bottom-right-radius", "71.776px");
    });
  });

  context("Border corner radius", () => {
    it("TL Radius0", () => {
      cy.get("#rtl0")
        .should("have.class", "rtl0")
        .should("have.css", "border-top-left-radius", "0px");
    });
    it("TL Radius1", () => {
      cy.get("#rtl1")
        .should("have.class", "rtl1")
        .should("have.css", "border-top-left-radius", "4px");
    });
    it("TL Radius2", () => {
      cy.get("#rtl2")
        .should("have.class", "rtl2")
        .should("have.css", "border-top-left-radius", "6.464px");
    });
    it("TL Radius3", () => {
      cy.get("#rtl3")
        .should("have.class", "rtl3")
        .should("have.css", "border-top-left-radius", "10.48px");
    });
    it("TL Radius4", () => {
      cy.get("#rtl4")
        .should("have.class", "rtl4")
        .should("have.css", "border-top-left-radius", "16.944px");
    });
    it("TL Radius5", () => {
      cy.get("#rtl5")
        .should("have.class", "rtl5")
        .should("have.css", "border-top-left-radius", "27.424px");
    });
    it("TL Radius6", () => {
      cy.get("#rtl6")
        .should("have.class", "rtl6")
        .should("have.css", "border-top-left-radius", "44.368px");
    });
    it("TL Radius7", () => {
      cy.get("#rtl7")
        .should("have.class", "rtl7")
        .should("have.css", "border-top-left-radius", "71.776px");
    });

    it("TR Radius0", () => {
      cy.get("#rtr0")
        .should("have.class", "rtr0")
        .should("have.css", "border-top-right-radius", "0px");
    });
    it("TR Radius1", () => {
      cy.get("#rtr1")
        .should("have.class", "rtr1")
        .should("have.css", "border-top-right-radius", "4px");
    });
    it("TR Radius2", () => {
      cy.get("#rtr2")
        .should("have.class", "rtr2")
        .should("have.css", "border-top-right-radius", "6.464px");
    });
    it("TR Radius3", () => {
      cy.get("#rtr3")
        .should("have.class", "rtr3")
        .should("have.css", "border-top-right-radius", "10.48px");
    });
    it("TR Radius4", () => {
      cy.get("#rtr4")
        .should("have.class", "rtr4")
        .should("have.css", "border-top-right-radius", "16.944px");
    });
    it("TR Radius5", () => {
      cy.get("#rtr5")
        .should("have.class", "rtr5")
        .should("have.css", "border-top-right-radius", "27.424px");
    });
    it("TR Radius6", () => {
      cy.get("#rtr6")
        .should("have.class", "rtr6")
        .should("have.css", "border-top-right-radius", "44.368px");
    });
    it("TR Radius7", () => {
      cy.get("#rtr7")
        .should("have.class", "rtr7")
        .should("have.css", "border-top-right-radius", "71.776px");
    });

    it("BL Radius0", () => {
      cy.get("#rbl0")
        .should("have.class", "rbl0")
        .should("have.css", "border-bottom-left-radius", "0px");
    });
    it("BL Radius1", () => {
      cy.get("#rbl1")
        .should("have.class", "rbl1")
        .should("have.css", "border-bottom-left-radius", "4px");
    });
    it("BL Radius2", () => {
      cy.get("#rbl2")
        .should("have.class", "rbl2")
        .should("have.css", "border-bottom-left-radius", "6.464px");
    });
    it("BL Radius3", () => {
      cy.get("#rbl3")
        .should("have.class", "rbl3")
        .should("have.css", "border-bottom-left-radius", "10.48px");
    });
    it("BL Radius4", () => {
      cy.get("#rbl4")
        .should("have.class", "rbl4")
        .should("have.css", "border-bottom-left-radius", "16.944px");
    });
    it("BL Radius5", () => {
      cy.get("#rbl5")
        .should("have.class", "rbl5")
        .should("have.css", "border-bottom-left-radius", "27.424px");
    });
    it("BL Radius6", () => {
      cy.get("#rbl6")
        .should("have.class", "rbl6")
        .should("have.css", "border-bottom-left-radius", "44.368px");
    });
    it("BL Radius7", () => {
      cy.get("#rbl7")
        .should("have.class", "rbl7")
        .should("have.css", "border-bottom-left-radius", "71.776px");
    });

    it("BR Radius0", () => {
      cy.get("#rbr0")
        .should("have.class", "rbr0")
        .should("have.css", "border-bottom-right-radius", "0px");
    });
    it("BR Radius1", () => {
      cy.get("#rbr1")
        .should("have.class", "rbr1")
        .should("have.css", "border-bottom-right-radius", "4px");
    });
    it("BR Radius2", () => {
      cy.get("#rbr2")
        .should("have.class", "rbr2")
        .should("have.css", "border-bottom-right-radius", "6.464px");
    });
    it("BR Radius3", () => {
      cy.get("#rbr3")
        .should("have.class", "rbr3")
        .should("have.css", "border-bottom-right-radius", "10.48px");
    });
    it("BR Radius4", () => {
      cy.get("#rbr4")
        .should("have.class", "rbr4")
        .should("have.css", "border-bottom-right-radius", "16.944px");
    });
    it("BR Radius5", () => {
      cy.get("#rbr5")
        .should("have.class", "rbr5")
        .should("have.css", "border-bottom-right-radius", "27.424px");
    });
    it("BR Radius6", () => {
      cy.get("#rbr6")
        .should("have.class", "rbr6")
        .should("have.css", "border-bottom-right-radius", "44.368px");
    });
    it("BR Radius7", () => {
      cy.get("#rbr7")
        .should("have.class", "rbr7")
        .should("have.css", "border-bottom-right-radius", "71.776px");
    });
  });

  context("Border face radius", () => {
    it("T Radius0", () => {
      cy.get("#rt0")
        .should("have.class", "rt0")
        .should("have.css", "border-top-left-radius", "0px")
        .should("have.css", "border-top-right-radius", "0px");
    });
    it("T Radius1", () => {
      cy.get("#rt1")
        .should("have.class", "rt1")
        .should("have.css", "border-top-left-radius", "4px")
        .should("have.css", "border-top-right-radius", "4px");
    });
    it("T Radius2", () => {
      cy.get("#rt2")
        .should("have.class", "rt2")
        .should("have.css", "border-top-left-radius", "6.464px")
        .should("have.css", "border-top-right-radius", "6.464px");
    });
    it("T Radius3", () => {
      cy.get("#rt3")
        .should("have.class", "rt3")
        .should("have.css", "border-top-left-radius", "10.48px")
        .should("have.css", "border-top-right-radius", "10.48px");
    });
    it("T Radius4", () => {
      cy.get("#rt4")
        .should("have.class", "rt4")
        .should("have.css", "border-top-left-radius", "16.944px")
        .should("have.css", "border-top-right-radius", "16.944px");
    });
    it("T Radius5", () => {
      cy.get("#rt5")
        .should("have.class", "rt5")
        .should("have.css", "border-top-left-radius", "27.424px")
        .should("have.css", "border-top-right-radius", "27.424px");
    });
    it("T Radius6", () => {
      cy.get("#rt6")
        .should("have.class", "rt6")
        .should("have.css", "border-top-left-radius", "44.368px")
        .should("have.css", "border-top-right-radius", "44.368px");
    });
    it("T Radius7", () => {
      cy.get("#rt7")
        .should("have.class", "rt7")
        .should("have.css", "border-top-left-radius", "71.776px")
        .should("have.css", "border-top-right-radius", "71.776px");
    });

    it("B Radius0", () => {
      cy.get("#rb0")
        .should("have.class", "rb0")
        .should("have.css", "border-bottom-left-radius", "0px")
        .should("have.css", "border-bottom-right-radius", "0px");
    });
    it("B Radius1", () => {
      cy.get("#rb1")
        .should("have.class", "rb1")
        .should("have.css", "border-bottom-left-radius", "4px")
        .should("have.css", "border-bottom-right-radius", "4px");
    });
    it("B Radius2", () => {
      cy.get("#rb2")
        .should("have.class", "rb2")
        .should("have.css", "border-bottom-left-radius", "6.464px")
        .should("have.css", "border-bottom-right-radius", "6.464px");
    });
    it("B Radius3", () => {
      cy.get("#rb3")
        .should("have.class", "rb3")
        .should("have.css", "border-bottom-left-radius", "10.48px")
        .should("have.css", "border-bottom-right-radius", "10.48px");
    });
    it("B Radius4", () => {
      cy.get("#rb4")
        .should("have.class", "rb4")
        .should("have.css", "border-bottom-left-radius", "16.944px")
        .should("have.css", "border-bottom-right-radius", "16.944px");
    });
    it("B Radius5", () => {
      cy.get("#rb5")
        .should("have.class", "rb5")
        .should("have.css", "border-bottom-left-radius", "27.424px")
        .should("have.css", "border-bottom-right-radius", "27.424px");
    });
    it("B Radius6", () => {
      cy.get("#rb6")
        .should("have.class", "rb6")
        .should("have.css", "border-bottom-left-radius", "44.368px")
        .should("have.css", "border-bottom-right-radius", "44.368px");
    });
    it("B Radius7", () => {
      cy.get("#rb7")
        .should("have.class", "rb7")
        .should("have.css", "border-bottom-left-radius", "71.776px")
        .should("have.css", "border-bottom-right-radius", "71.776px");
    });

    it("L Radius0", () => {
      cy.get("#rl0")
        .should("have.class", "rl0")
        .should("have.css", "border-top-left-radius", "0px")
        .should("have.css", "border-bottom-left-radius", "0px");
    });
    it("L Radius1", () => {
      cy.get("#rl1")
        .should("have.class", "rl1")
        .should("have.css", "border-top-left-radius", "4px")
        .should("have.css", "border-bottom-left-radius", "4px");
    });
    it("L Radius2", () => {
      cy.get("#rl2")
        .should("have.class", "rl2")
        .should("have.css", "border-top-left-radius", "6.464px")
        .should("have.css", "border-bottom-left-radius", "6.464px");
    });
    it("L Radius3", () => {
      cy.get("#rl3")
        .should("have.class", "rl3")
        .should("have.css", "border-top-left-radius", "10.48px")
        .should("have.css", "border-bottom-left-radius", "10.48px");
    });
    it("L Radius4", () => {
      cy.get("#rl4")
        .should("have.class", "rl4")
        .should("have.css", "border-top-left-radius", "16.944px")
        .should("have.css", "border-bottom-left-radius", "16.944px");
    });
    it("L Radius5", () => {
      cy.get("#rl5")
        .should("have.class", "rl5")
        .should("have.css", "border-top-left-radius", "27.424px")
        .should("have.css", "border-bottom-left-radius", "27.424px");
    });
    it("L Radius6", () => {
      cy.get("#rl6")
        .should("have.class", "rl6")
        .should("have.css", "border-top-left-radius", "44.368px")
        .should("have.css", "border-bottom-left-radius", "44.368px");
    });
    it("L Radius7", () => {
      cy.get("#rl7")
        .should("have.class", "rl7")
        .should("have.css", "border-top-left-radius", "71.776px")
        .should("have.css", "border-bottom-left-radius", "71.776px");
    });
    it("R Radius0", () => {
      cy.get("#rr0")
        .should("have.class", "rr0")
        .should("have.css", "border-top-right-radius", "0px")
        .should("have.css", "border-bottom-right-radius", "0px");
    });
    it("R Radius1", () => {
      cy.get("#rr1")
        .should("have.class", "rr1")
        .should("have.css", "border-top-right-radius", "4px")
        .should("have.css", "border-bottom-right-radius", "4px");
    });
    it("R Radius2", () => {
      cy.get("#rr2")
        .should("have.class", "rr2")
        .should("have.css", "border-top-right-radius", "6.464px")
        .should("have.css", "border-bottom-right-radius", "6.464px");
    });
    it("R Radius3", () => {
      cy.get("#rr3")
        .should("have.class", "rr3")
        .should("have.css", "border-top-right-radius", "10.48px")
        .should("have.css", "border-bottom-right-radius", "10.48px");
    });
    it("R Radius4", () => {
      cy.get("#rr4")
        .should("have.class", "rr4")
        .should("have.css", "border-top-right-radius", "16.944px")
        .should("have.css", "border-bottom-right-radius", "16.944px");
    });
    it("R Radius5", () => {
      cy.get("#rr5")
        .should("have.class", "rr5")
        .should("have.css", "border-top-right-radius", "27.424px")
        .should("have.css", "border-bottom-right-radius", "27.424px");
    });
    it("R Radius6", () => {
      cy.get("#rr6")
        .should("have.class", "rr6")
        .should("have.css", "border-top-right-radius", "44.368px")
        .should("have.css", "border-bottom-right-radius", "44.368px");
    });
    it("R Radius7", () => {
      cy.get("#rr7")
        .should("have.class", "rr7")
        .should("have.css", "border-top-right-radius", "71.776px")
        .should("have.css", "border-bottom-right-radius", "71.776px");
    });
  });

  context("Borders line styles", () => {
    it("Border style dash", () => {
      cy.get("#bdash")
        .should("have.class", "bdash")
        .should("have.css", "border-top-style", "dashed")
        .should("have.css", "border-bottom-style", "dashed")
        .should("have.css", "border-left-style", "dashed")
        .should("have.css", "border-right-style", "dashed");
    });
    it("Border style top dash", () => {
      cy.get("#bdasht")
        .should("have.class", "bdasht")
        .should("have.css", "border-top-style", "dashed");
    });
    it("Border style bottom dash", () => {
      cy.get("#bdashb")
        .should("have.class", "bdashb")
        .should("have.css", "border-bottom-style", "dashed");
    });
    it("Border style left dash", () => {
      cy.get("#bdashl")
        .should("have.class", "bdashl")
        .should("have.css", "border-left-style", "dashed");
    });
    it("Border style right dash", () => {
      cy.get("#bdashr")
        .should("have.class", "bdashr")
        .should("have.css", "border-right-style", "dashed");
    });
    it("Border style left-right dash", () => {
      cy.get("#bdashx")
        .should("have.class", "bdashx")
        .should("have.css", "border-left-style", "dashed")
        .should("have.css", "border-right-style", "dashed");
    });
    it("Border style top-bottom dash", () => {
      cy.get("#bdashy")
        .should("have.class", "bdashy")
        .should("have.css", "border-top-style", "dashed")
        .should("have.css", "border-bottom-style", "dashed");
    });

    it("Border style dot", () => {
      cy.get("#bdot")
        .should("have.class", "bdot")
        .should("have.css", "border-top-style", "dotted")
        .should("have.css", "border-bottom-style", "dotted")
        .should("have.css", "border-left-style", "dotted")
        .should("have.css", "border-right-style", "dotted");
    });
    it("Border style top dot", () => {
      cy.get("#bdott")
        .should("have.class", "bdott")
        .should("have.css", "border-top-style", "dotted");
    });
    it("Border style bottom dot", () => {
      cy.get("#bdotb")
        .should("have.class", "bdotb")
        .should("have.css", "border-bottom-style", "dotted");
    });
    it("Border style left dot", () => {
      cy.get("#bdotl")
        .should("have.class", "bdotl")
        .should("have.css", "border-left-style", "dotted");
    });
    it("Border style right dot", () => {
      cy.get("#bdotr")
        .should("have.class", "bdotr")
        .should("have.css", "border-right-style", "dotted");
    });
    it("Border style left-right dot", () => {
      cy.get("#bdotx")
        .should("have.class", "bdotx")
        .should("have.css", "border-left-style", "dotted")
        .should("have.css", "border-right-style", "dotted");
    });
    it("Border style top-bottom dot", () => {
      cy.get("#bdoty")
        .should("have.class", "bdoty")
        .should("have.css", "border-top-style", "dotted")
        .should("have.css", "border-bottom-style", "dotted");
    });

    it("Border style solid", () => {
      cy.get("#bsolid")
        .should("have.class", "bsolid")
        .should("have.css", "border-top-style", "solid")
        .should("have.css", "border-bottom-style", "solid")
        .should("have.css", "border-left-style", "solid")
        .should("have.css", "border-right-style", "solid");
    });
    it("Border style top solid", () => {
      cy.get("#bsolidt")
        .should("have.class", "bsolidt")
        .should("have.css", "border-top-style", "solid");
    });
    it("Border style bottom solid", () => {
      cy.get("#bsolidb")
        .should("have.class", "bsolidb")
        .should("have.css", "border-bottom-style", "solid");
    });
    it("Border style left solid", () => {
      cy.get("#bsolidl")
        .should("have.class", "bsolidl")
        .should("have.css", "border-left-style", "solid");
    });
    it("Border style right solid", () => {
      cy.get("#bsolidr")
        .should("have.class", "bsolidr")
        .should("have.css", "border-right-style", "solid");
    });
    it("Border style left-right solid", () => {
      cy.get("#bsolidx")
        .should("have.class", "bsolidx")
        .should("have.css", "border-left-style", "solid")
        .should("have.css", "border-right-style", "solid");
    });
    it("Border style top-bottom solid", () => {
      cy.get("#bsolidy")
        .should("have.class", "bsolidy")
        .should("have.css", "border-top-style", "solid")
        .should("have.css", "border-bottom-style", "solid");
    });

    it("Border style double", () => {
      cy.get("#bdouble")
        .should("have.class", "bdouble")
        .should("have.css", "border-top-style", "double")
        .should("have.css", "border-bottom-style", "double")
        .should("have.css", "border-left-style", "double")
        .should("have.css", "border-right-style", "double");
    });
    it("Border style top double", () => {
      cy.get("#bdoublet")
        .should("have.class", "bdoublet")
        .should("have.css", "border-top-style", "double");
    });
    it("Border style bottom double", () => {
      cy.get("#bdoubleb")
        .should("have.class", "bdoubleb")
        .should("have.css", "border-bottom-style", "double");
    });
    it("Border style left double", () => {
      cy.get("#bdoublel")
        .should("have.class", "bdoublel")
        .should("have.css", "border-left-style", "double");
    });
    it("Border style right double", () => {
      cy.get("#bdoubler")
        .should("have.class", "bdoubler")
        .should("have.css", "border-right-style", "double");
    });
    it("Border style left-right double", () => {
      cy.get("#bdoublex")
        .should("have.class", "bdoublex")
        .should("have.css", "border-left-style", "double")
        .should("have.css", "border-right-style", "double");
    });
    it("Border style top-bottom double", () => {
      cy.get("#bdoubley")
        .should("have.class", "bdoubley")
        .should("have.css", "border-top-style", "double")
        .should("have.css", "border-bottom-style", "double");
    });
  });

});

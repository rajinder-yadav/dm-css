describe("Spacing", () => {
  before(() => {
    cy.visit("/test/web-pages/spacing.html");
  });

  context("Padding all", () => {
    it("should not have padding all sides", () => {
      cy.get(".p0")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("should have padding all sides 1", () => {
      cy.get(".p1")
        .should("have.css", "padding-top", "4px")
        .should("have.css", "padding-bottom", "4px")
        .should("have.css", "padding-left", "4px")
        .should("have.css", "padding-right", "4px");
    });
    it("should have padding all sides 2", () => {
      cy.get(".p2")
        .should("have.css", "padding-top", "6.464px")
        .should("have.css", "padding-bottom", "6.464px")
        .should("have.css", "padding-left", "6.464px")
        .should("have.css", "padding-right", "6.464px");
    });
    it("should have padding all sides 3", () => {
      cy.get(".p3")
        .should("have.css", "padding-top", "10.464px")
        .should("have.css", "padding-bottom", "10.464px")
        .should("have.css", "padding-left", "10.464px")
        .should("have.css", "padding-right", "10.464px");
    });
    it("should have padding all sides 4", () => {
      cy.get(".p4")
        .should("have.css", "padding-top", "16.816px")
        .should("have.css", "padding-bottom", "16.816px")
        .should("have.css", "padding-left", "16.816px")
        .should("have.css", "padding-right", "16.816px");
    });
    it("should have padding all sides 5", () => {
      cy.get(".p5")
        .should("have.css", "padding-top", "27.2px")
        .should("have.css", "padding-bottom", "27.2px")
        .should("have.css", "padding-left", "27.2px")
        .should("have.css", "padding-right", "27.2px");
    });
    it("should have padding all sides 6", () => {
      cy.get(".p6")
        .should("have.css", "padding-top", "44px")
        .should("have.css", "padding-bottom", "44px")
        .should("have.css", "padding-left", "44px")
        .should("have.css", "padding-right", "44px");
    });
    it("should have padding all sides 7", () => {
      cy.get(".p7")
        .should("have.css", "padding-top", "71.184px")
        .should("have.css", "padding-bottom", "71.184px")
        .should("have.css", "padding-left", "71.184px")
        .should("have.css", "padding-right", "71.184px");
    });
  });

  context("Padding top", () => {
    it("should not have padding on top", () => {
      cy.get(".pt0")
        .should("have.css", "padding-top", "0px");
    });
    it("should have padding on top 1", () => {
      cy.get(".pt1")
        .should("have.css", "padding-top", "4px");
    });
    it("should have padding on top 2", () => {
      cy.get(".pt2")
        .should("have.css", "padding-top", "6.464px");
    });
    it("should have padding on top 3", () => {
      cy.get(".pt3")
        .should("have.css", "padding-top", "10.464px");
    });
    it("should have padding on top 4", () => {
      cy.get(".pt4")
        .should("have.css", "padding-top", "16.816px");
    });
    it("should have padding on top 5", () => {
      cy.get(".pt5")
        .should("have.css", "padding-top", "27.2px");
    });
    it("should have padding on top 6", () => {
      cy.get(".pt6")
        .should("have.css", "padding-top", "44px");
    });
    it("should have padding on top 7", () => {
      cy.get(".pt7")
        .should("have.css", "padding-top", "71.184px");
    });
  });

  context("Padding bottom", () => {
    it("should not have padding on bottom", () => {
      cy.get(".pb0")
        .should("have.css", "padding-bottom", "0px");
    });
    it("should have padding on bottom 1", () => {
      cy.get(".pb1")
        .should("have.css", "padding-bottom", "4px");
    });
    it("should have padding on bottom 2", () => {
      cy.get(".pb2")
        .should("have.css", "padding-bottom", "6.464px");
    });
    it("should have padding on bottom 3", () => {
      cy.get(".pb3")
        .should("have.css", "padding-bottom", "10.464px");
    });
    it("should have padding on bottom 4", () => {
      cy.get(".pb4")
        .should("have.css", "padding-bottom", "16.816px");
    });
    it("should have padding on bottom 5", () => {
      cy.get(".pb5")
        .should("have.css", "padding-bottom", "27.2px");
    });
    it("should have padding on bottom 6", () => {
      cy.get(".pb6")
        .should("have.css", "padding-bottom", "44px");
    });
    it("should have padding on bottom 7", () => {
      cy.get(".pb7")
        .should("have.css", "padding-bottom", "71.184px");
    });
  });

  context("Padding left", () => {
    it("should not have padding on left", () => {
      cy.get(".pl0")
        .should("have.css", "padding-left", "0px");
    });
    it("should have padding on left 1", () => {
      cy.get(".pl1")
        .should("have.css", "padding-left", "4px");
    });
    it("should have padding on left 2", () => {
      cy.get(".pl2")
        .should("have.css", "padding-left", "6.464px");
    });
    it("should have padding on left 3", () => {
      cy.get(".pl3")
        .should("have.css", "padding-left", "10.464px");
    });
    it("should have padding on left 4", () => {
      cy.get(".pl4")
        .should("have.css", "padding-left", "16.816px");
    });
    it("should have padding on left 5", () => {
      cy.get(".pl5")
        .should("have.css", "padding-left", "27.2px");
    });
    it("should have padding on left 6", () => {
      cy.get(".pl6")
        .should("have.css", "padding-left", "44px");
    });
    it("should have padding on left 7", () => {
      cy.get(".pl7")
        .should("have.css", "padding-left", "71.184px");
    });
  });

  context("Padding right", () => {
    it("should not have padding on right", () => {
      cy.get(".pr0")
        .should("have.css", "padding-right", "0px");
    });
    it("should have padding on right 1", () => {
      cy.get(".pr1")
        .should("have.css", "padding-right", "4px");
    });
    it("should have padding on right 2", () => {
      cy.get(".pr2")
        .should("have.css", "padding-right", "6.464px");
    });
    it("should have padding on right 3", () => {
      cy.get(".pr3")
        .should("have.css", "padding-right", "10.464px");
    });
    it("should have padding on right 4", () => {
      cy.get(".pr4")
        .should("have.css", "padding-right", "16.816px");
    });
    it("should have padding on right 5", () => {
      cy.get(".pr5")
        .should("have.css", "padding-right", "27.2px");
    });
    it("should have padding on right 6", () => {
      cy.get(".pr6")
        .should("have.css", "padding-right", "44px");
    });
    it("should have padding on right 7", () => {
      cy.get(".pr7")
        .should("have.css", "padding-right", "71.184px");
    });
  });

  context("Padding top and bottom", () => {
    it("should not have padding on top and bottom", () => {
      cy.get(".py0")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px");
    });
    it("should have padding on top and bottom 1", () => {
      cy.get(".py1")
        .should("have.css", "padding-top", "4px")
        .should("have.css", "padding-bottom", "4px");
    });
    it("should have padding on top and bottom 2", () => {
      cy.get(".py2")
        .should("have.css", "padding-top", "6.464px")
        .should("have.css", "padding-bottom", "6.464px");
    });
    it("should have padding on top and bottom 3", () => {
      cy.get(".py3")
        .should("have.css", "padding-top", "10.464px")
        .should("have.css", "padding-bottom", "10.464px");
    });
    it("should have padding on top and bottom 4", () => {
      cy.get(".py4")
        .should("have.css", "padding-top", "16.816px")
        .should("have.css", "padding-bottom", "16.816px");
    });
    it("should have padding on top and bottom 5", () => {
      cy.get(".py5")
        .should("have.css", "padding-top", "27.2px")
        .should("have.css", "padding-bottom", "27.2px");
    });
    it("should have padding on top and bottom 6", () => {
      cy.get(".py6")
        .should("have.css", "padding-top", "44px")
        .should("have.css", "padding-bottom", "44px");
    });
    it("should have padding on top and bottom 7", () => {
      cy.get(".py7")
        .should("have.css", "padding-top", "71.184px")
        .should("have.css", "padding-bottom", "71.184px");
    });
  });

  context("Padding left and right", () => {
    it("should not have padding on left and right", () => {
      cy.get(".px0")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("should have padding on left and right 1", () => {
      cy.get(".px1")
        .should("have.css", "padding-left", "4px")
        .should("have.css", "padding-right", "4px");
    });
    it("should have padding on left and right 2", () => {
      cy.get(".px2")
        .should("have.css", "padding-left", "6.464px")
        .should("have.css", "padding-right", "6.464px");
    });
    it("should have padding on left and right 3", () => {
      cy.get(".px3")
        .should("have.css", "padding-left", "10.464px")
        .should("have.css", "padding-right", "10.464px");
    });
    it("should have padding on left and right 4", () => {
      cy.get(".px4")
        .should("have.css", "padding-left", "16.816px")
        .should("have.css", "padding-right", "16.816px");
    });
    it("should have padding on left and right 5", () => {
      cy.get(".px5")
        .should("have.css", "padding-left", "27.2px")
        .should("have.css", "padding-right", "27.2px");
    });
    it("should have padding on left and right 6", () => {
      cy.get(".px6")
        .should("have.css", "padding-left", "44px")
        .should("have.css", "padding-right", "44px");
    });
    it("should have padding on left and right 7", () => {
      cy.get(".px7")
        .should("have.css", "padding-left", "71.184px")
        .should("have.css", "padding-right", "71.184px");
    });
  });

  context("Margin all", () => {
    it("should not have margin all sides", () => {
      cy.get(".m0")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("should have margin all sides 1", () => {
      cy.get(".m1")
        .should("have.css", "margin-top", "4px")
        .should("have.css", "margin-bottom", "4px")
        .should("have.css", "margin-left", "4px")
        .should("have.css", "margin-right", "4px");
    });
    it("should have margin all sides 2", () => {
      cy.get(".m2")
        .should("have.css", "margin-top", "6.464px")
        .should("have.css", "margin-bottom", "6.464px")
        .should("have.css", "margin-left", "6.464px")
        .should("have.css", "margin-right", "6.464px");
    });
    it("should have margin all sides 3", () => {
      cy.get(".m3")
        .should("have.css", "margin-top", "10.464px")
        .should("have.css", "margin-bottom", "10.464px")
        .should("have.css", "margin-left", "10.464px")
        .should("have.css", "margin-right", "10.464px");
    });
    it("should have margin all sides 4", () => {
      cy.get(".m4")
        .should("have.css", "margin-top", "16.816px")
        .should("have.css", "margin-bottom", "16.816px")
        .should("have.css", "margin-left", "16.816px")
        .should("have.css", "margin-right", "16.816px");
    });
    it("should have margin all sides 5", () => {
      cy.get(".m5")
        .should("have.css", "margin-top", "27.2px")
        .should("have.css", "margin-bottom", "27.2px")
        .should("have.css", "margin-left", "27.2px")
        .should("have.css", "margin-right", "27.2px");
    });
    it("should have margin all sides 6", () => {
      cy.get(".m6")
        .should("have.css", "margin-top", "44px")
        .should("have.css", "margin-bottom", "44px")
        .should("have.css", "margin-left", "44px")
        .should("have.css", "margin-right", "44px");
    });
    it("should have margin all sides 7", () => {
      cy.get(".m7")
        .should("have.css", "margin-top", "71.184px")
        .should("have.css", "margin-bottom", "71.184px")
        .should("have.css", "margin-left", "71.184px")
        .should("have.css", "margin-right", "71.184px");
    });
  });

  context("Margin top", () => {
    it("should not have margin on top", () => {
      cy.get(".mt0")
        .should("have.css", "margin-top", "0px");
    });
    it("should have margin on top 1", () => {
      cy.get(".mt1")
        .should("have.css", "margin-top", "4px");
    });
    it("should have margin on top 2", () => {
      cy.get(".mt2")
        .should("have.css", "margin-top", "6.464px");
    });
    it("should have margin on top 3", () => {
      cy.get(".mt3")
        .should("have.css", "margin-top", "10.464px");
    });
    it("should have margin on top 4", () => {
      cy.get(".mt4")
        .should("have.css", "margin-top", "16.816px");
    });
    it("should have margin on top 5", () => {
      cy.get(".mt5")
        .should("have.css", "margin-top", "27.2px");
    });
    it("should have margin on top 6", () => {
      cy.get(".mt6")
        .should("have.css", "margin-top", "44px");
    });
    it("should have margin on top 7", () => {
      cy.get(".mt7")
        .should("have.css", "margin-top", "71.184px");
    });
  });

  context("Margin bottom", () => {
    it("should not have margin on bottom", () => {
      cy.get(".mb0")
        .should("have.css", "margin-bottom", "0px");
    });
    it("should have margin on bottom 1", () => {
      cy.get(".mb1")
        .should("have.css", "margin-bottom", "4px");
    });
    it("should have margin on bottom 2", () => {
      cy.get(".mb2")
        .should("have.css", "margin-bottom", "6.464px");
    });
    it("should have margin on bottom 3", () => {
      cy.get(".mb3")
        .should("have.css", "margin-bottom", "10.464px");
    });
    it("should have margin on bottom 4", () => {
      cy.get(".mb4")
        .should("have.css", "margin-bottom", "16.816px");
    });
    it("should have margin on bottom 5", () => {
      cy.get(".mb5")
        .should("have.css", "margin-bottom", "27.2px");
    });
    it("should have margin on bottom 6", () => {
      cy.get(".mb6")
        .should("have.css", "margin-bottom", "44px");
    });
    it("should have margin on bottom 7", () => {
      cy.get(".mb7")
        .should("have.css", "margin-bottom", "71.184px");
    });
  });

  context("Margin left", () => {
    it("should not have margin on left", () => {
      cy.get(".ml0")
        .should("have.css", "margin-left", "0px");
    });
    it("should have margin on left 1", () => {
      cy.get(".ml1")
        .should("have.css", "margin-left", "4px");
    });
    it("should have margin on left 2", () => {
      cy.get(".ml2")
        .should("have.css", "margin-left", "6.464px");
    });
    it("should have margin on left 3", () => {
      cy.get(".ml3")
        .should("have.css", "margin-left", "10.464px");
    });
    it("should have margin on left 4", () => {
      cy.get(".ml4")
        .should("have.css", "margin-left", "16.816px");
    });
    it("should have margin on left 5", () => {
      cy.get(".ml5")
        .should("have.css", "margin-left", "27.2px");
    });
    it("should have margin on left 6", () => {
      cy.get(".ml6")
        .should("have.css", "margin-left", "44px");
    });
    it("should have margin on left 7", () => {
      cy.get(".ml7")
        .should("have.css", "margin-left", "71.184px");
    });
  });

  context("Margin right", () => {
    it("should not have margin on right", () => {
      cy.get(".mr0")
        .should("have.css", "margin-right", "0px");
    });
    it("should have margin on right 1", () => {
      cy.get(".mr1")
        .should("have.css", "margin-right", "4px");
    });
    it("should have margin on right 2", () => {
      cy.get(".mr2")
        .should("have.css", "margin-right", "6.464px");
    });
    it("should have margin on right 3", () => {
      cy.get(".mr3")
        .should("have.css", "margin-right", "10.464px");
    });
    it("should have margin on right 4", () => {
      cy.get(".mr4")
        .should("have.css", "margin-right", "16.816px");
    });
    it("should have margin on right 5", () => {
      cy.get(".mr5")
        .should("have.css", "margin-right", "27.2px");
    });
    it("should have margin on right 6", () => {
      cy.get(".mr6")
        .should("have.css", "margin-right", "44px");
    });
    it("should have margin on right 7", () => {
      cy.get(".mr7")
        .should("have.css", "margin-right", "71.184px");
    });
  });

  context("Margin top and bottom", () => {
    it("should not have margin on top and bottom", () => {
      cy.get(".my0")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-bottom", "0px");
    });
    it("should have margin on top and bottom 1", () => {
      cy.get(".my1")
        .should("have.css", "margin-top", "4px")
        .should("have.css", "margin-bottom", "4px");
    });
    it("should have margin on top and bottom 2", () => {
      cy.get(".my2")
        .should("have.css", "margin-top", "6.464px")
        .should("have.css", "margin-bottom", "6.464px");
    });
    it("should have margin on top and bottom 3", () => {
      cy.get(".my3")
        .should("have.css", "margin-top", "10.464px")
        .should("have.css", "margin-bottom", "10.464px");
    });
    it("should have margin on top and bottom 4", () => {
      cy.get(".my4")
        .should("have.css", "margin-top", "16.816px")
        .should("have.css", "margin-bottom", "16.816px");
    });
    it("should have margin on top and bottom 5", () => {
      cy.get(".my5")
        .should("have.css", "margin-top", "27.2px")
        .should("have.css", "margin-bottom", "27.2px");
    });
    it("should have margin on top and bottom 6", () => {
      cy.get(".my6")
        .should("have.css", "margin-top", "44px")
        .should("have.css", "margin-bottom", "44px");
    });
    it("should have margin on top and bottom 7", () => {
      cy.get(".my7")
        .should("have.css", "margin-top", "71.184px")
        .should("have.css", "margin-bottom", "71.184px");
    });
  });

  context("Margin left and right", () => {
    it("should not have margin on left and right", () => {
      cy.get(".mx0")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("should have margin on left and right 1", () => {
      cy.get(".mx1")
        .should("have.css", "margin-left", "4px")
        .should("have.css", "margin-right", "4px");
    });
    it("should have margin on left and right 2", () => {
      cy.get(".mx2")
        .should("have.css", "margin-left", "6.464px")
        .should("have.css", "margin-right", "6.464px");
    });
    it("should have margin on left and right 3", () => {
      cy.get(".mx3")
        .should("have.css", "margin-left", "10.464px")
        .should("have.css", "margin-right", "10.464px");
    });
    it("should have margin on left and right 4", () => {
      cy.get(".mx4")
        .should("have.css", "margin-left", "16.816px")
        .should("have.css", "margin-right", "16.816px");
    });
    it("should have margin on left and right 5", () => {
      cy.get(".mx5")
        .should("have.css", "margin-left", "27.2px")
        .should("have.css", "margin-right", "27.2px");
    });
    it("should have margin on left and right 6", () => {
      cy.get(".mx6")
        .should("have.css", "margin-left", "44px")
        .should("have.css", "margin-right", "44px");
    });
    it("should have margin on left and right 7", () => {
      cy.get(".mx7")
        .should("have.css", "margin-left", "71.184px")
        .should("have.css", "margin-right", "71.184px");
    });
  });

  context("Auto margin", () => {
    it("should add margin both left and right sides", () => {
      cy.get(".mxa")
        .should("not.have.css", "margin-left", "0px")
        .should("not.have.css", "margin-right", "0px");
    });
    it("should add margin left side", () => {
      cy.get(".mla")
        .should("not.have.css", "margin-left", "0px")
    });
    it("should add margin right side", () => {
      cy.get(".mra")
        .should("not.have.css", "margin-right", "0px");
    });
    it("should add margin both left and right sides - alias", () => {
      cy.get(".mx-auto")
        .should("not.have.css", "margin-left", "0px")
        .should("not.have.css", "margin-right", "0px");
    });
    it("should add margin left side - alias", () => {
      cy.get(".ml-auto")
        .should("not.have.css", "margin-left", "0px")
    });
    it("should add margin right side - alias", () => {
      cy.get(".mr-auto")
        .should("not.have.css", "margin-right", "0px");
    });
  });
});

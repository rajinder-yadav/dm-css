describe("Spacing", () => {
  beforeEach(() => {
    cy.visit("/web-pages/spacing.html");
  });

  context("Padding all", () => {
    it("All sides 0", () => {
      cy.get(".p0")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("All sides 1", () => {
      cy.get(".p1")
        .should("have.css", "padding-top", "4px")
        .should("have.css", "padding-bottom", "4px")
        .should("have.css", "padding-left", "4px")
        .should("have.css", "padding-right", "4px");
    });
    it("All sides 2", () => {
      cy.get(".p2")
        .should("have.css", "padding-top", "6.464px")
        .should("have.css", "padding-bottom", "6.464px")
        .should("have.css", "padding-left", "6.464px")
        .should("have.css", "padding-right", "6.464px");
    });
    it("All sides 3", () => {
      cy.get(".p3")
        .should("have.css", "padding-top", "10.464px")
        .should("have.css", "padding-bottom", "10.464px")
        .should("have.css", "padding-left", "10.464px")
        .should("have.css", "padding-right", "10.464px");
    });
    it("All sides 4", () => {
      cy.get(".p4")
        .should("have.css", "padding-top", "16.816px")
        .should("have.css", "padding-bottom", "16.816px")
        .should("have.css", "padding-left", "16.816px")
        .should("have.css", "padding-right", "16.816px");
    });
    it("All sides 5", () => {
      cy.get(".p5")
        .should("have.css", "padding-top", "27.2px")
        .should("have.css", "padding-bottom", "27.2px")
        .should("have.css", "padding-left", "27.2px")
        .should("have.css", "padding-right", "27.2px");
    });
    it("All sides 6", () => {
      cy.get(".p6")
        .should("have.css", "padding-top", "44px")
        .should("have.css", "padding-bottom", "44px")
        .should("have.css", "padding-left", "44px")
        .should("have.css", "padding-right", "44px");
    });
    it("All sides 7", () => {
      cy.get(".p7")
        .should("have.css", "padding-top", "71.184px")
        .should("have.css", "padding-bottom", "71.184px")
        .should("have.css", "padding-left", "71.184px")
        .should("have.css", "padding-right", "71.184px");
    });
    it("All sides 8", () => {
      cy.get(".p8")
        .should("have.css", "padding-top", "115.2px")
        .should("have.css", "padding-bottom", "115.2px")
        .should("have.css", "padding-left", "115.2px")
        .should("have.css", "padding-right", "115.2px");
    });
    it("All sides 9", () => {
      cy.get(".p9")
        .should("have.css", "padding-top", "186.4px")
        .should("have.css", "padding-bottom", "186.4px")
        .should("have.css", "padding-left", "186.4px")
        .should("have.css", "padding-right", "186.4px");
    });
    it("All sides 10", () => {
      cy.get(".p10")
        .should("have.css", "padding-top", "303.2px")
        .should("have.css", "padding-bottom", "303.2px")
        .should("have.css", "padding-left", "303.2px")
        .should("have.css", "padding-right", "303.2px");
    });
  });

  context("Padding top", () => {
    it("Top 0", () => {
      cy.get(".pt0")
        .should("have.css", "padding-top", "0px");
    });
    it("Top 1", () => {
      cy.get(".pt1")
        .should("have.css", "padding-top", "4px");
    });
    it("Top 2", () => {
      cy.get(".pt2")
        .should("have.css", "padding-top", "6.464px");
    });
    it("Top 3", () => {
      cy.get(".pt3")
        .should("have.css", "padding-top", "10.464px");
    });
    it("Top 4", () => {
      cy.get(".pt4")
        .should("have.css", "padding-top", "16.816px");
    });
    it("Top 5", () => {
      cy.get(".pt5")
        .should("have.css", "padding-top", "27.2px");
    });
    it("Top 6", () => {
      cy.get(".pt6")
        .should("have.css", "padding-top", "44px");
    });
    it("Top 7", () => {
      cy.get(".pt7")
        .should("have.css", "padding-top", "71.184px");
    });
    it("Top 8", () => {
      cy.get(".pt8")
        .should("have.css", "padding-top", "115.2px");
    });
    it("Top 9", () => {
      cy.get(".pt9")
        .should("have.css", "padding-top", "186.4px");
    });
    it("Top 10", () => {
      cy.get(".pt10")
        .should("have.css", "padding-top", "303.2px");
    });
  });

  context("Padding bottom", () => {
    it("Bottom 0", () => {
      cy.get(".pb0")
        .should("have.css", "padding-bottom", "0px");
    });
    it("Bottom 1", () => {
      cy.get(".pb1")
        .should("have.css", "padding-bottom", "4px");
    });
    it("Bottom 2", () => {
      cy.get(".pb2")
        .should("have.css", "padding-bottom", "6.464px");
    });
    it("Bottom 3", () => {
      cy.get(".pb3")
        .should("have.css", "padding-bottom", "10.464px");
    });
    it("Bottom 4", () => {
      cy.get(".pb4")
        .should("have.css", "padding-bottom", "16.816px");
    });
    it("Bottom 5", () => {
      cy.get(".pb5")
        .should("have.css", "padding-bottom", "27.2px");
    });
    it("Bottom 6", () => {
      cy.get(".pb6")
        .should("have.css", "padding-bottom", "44px");
    });
    it("Bottom 7", () => {
      cy.get(".pb7")
        .should("have.css", "padding-bottom", "71.184px");
    });
    it("Bottom 8", () => {
      cy.get(".pb8")
        .should("have.css", "padding-bottom", "115.2px");
    });
    it("Bottom 9", () => {
      cy.get(".pb9")
        .should("have.css", "padding-bottom", "186.4px");
    });
    it("Bottom 10", () => {
      cy.get(".pb10")
        .should("have.css", "padding-bottom", "303.2px");
    });
  });

  context("Padding left", () => {
    it("Left 0", () => {
      cy.get(".pl0")
        .should("have.css", "padding-left", "0px");
    });
    it("Left 1", () => {
      cy.get(".pl1")
        .should("have.css", "padding-left", "4px");
    });
    it("Left 2", () => {
      cy.get(".pl2")
        .should("have.css", "padding-left", "6.464px");
    });
    it("Left 3", () => {
      cy.get(".pl3")
        .should("have.css", "padding-left", "10.464px");
    });
    it("Left 4", () => {
      cy.get(".pl4")
        .should("have.css", "padding-left", "16.816px");
    });
    it("Left 5", () => {
      cy.get(".pl5")
        .should("have.css", "padding-left", "27.2px");
    });
    it("Left 6", () => {
      cy.get(".pl6")
        .should("have.css", "padding-left", "44px");
    });
    it("Left 7", () => {
      cy.get(".pl7")
        .should("have.css", "padding-left", "71.184px");
    });
    it("Left 8", () => {
      cy.get(".pl8")
        .should("have.css", "padding-left", "115.2px");
    });
    it("Left 9", () => {
      cy.get(".pl9")
        .should("have.css", "padding-left", "186.4px");
    });
    it("Left 10", () => {
      cy.get(".pl10")
        .should("have.css", "padding-left", "303.2px");
    });
  });

  context("Padding right", () => {
    it("Right 0", () => {
      cy.get(".pr0")
        .should("have.css", "padding-right", "0px");
    });
    it("Right 1", () => {
      cy.get(".pr1")
        .should("have.css", "padding-right", "4px");
    });
    it("Right 2", () => {
      cy.get(".pr2")
        .should("have.css", "padding-right", "6.464px");
    });
    it("Right 3", () => {
      cy.get(".pr3")
        .should("have.css", "padding-right", "10.464px");
    });
    it("Right 4", () => {
      cy.get(".pr4")
        .should("have.css", "padding-right", "16.816px");
    });
    it("Right 5", () => {
      cy.get(".pr5")
        .should("have.css", "padding-right", "27.2px");
    });
    it("Right 6", () => {
      cy.get(".pr6")
        .should("have.css", "padding-right", "44px");
    });
    it("Right 7", () => {
      cy.get(".pr7")
        .should("have.css", "padding-right", "71.184px");
    });
    it("Right 8", () => {
      cy.get(".pr8")
        .should("have.css", "padding-right", "115.2px");
    });
    it("Right 9", () => {
      cy.get(".pr9")
        .should("have.css", "padding-right", "186.4px");
    });
    it("Right 10", () => {
      cy.get(".pr10")
        .should("have.css", "padding-right", "303.2px");
    });
  });

  context("Padding top and bottom", () => {
    it("Top and bottom 0", () => {
      cy.get(".py0")
        .should("have.css", "padding-top", "0px")
        .should("have.css", "padding-bottom", "0px");
    });
    it("Top and bottom 1", () => {
      cy.get(".py1")
        .should("have.css", "padding-top", "4px")
        .should("have.css", "padding-bottom", "4px");
    });
    it("Top and bottom 2", () => {
      cy.get(".py2")
        .should("have.css", "padding-top", "6.464px")
        .should("have.css", "padding-bottom", "6.464px");
    });
    it("Top and bottom 3", () => {
      cy.get(".py3")
        .should("have.css", "padding-top", "10.464px")
        .should("have.css", "padding-bottom", "10.464px");
    });
    it("Top and bottom 4", () => {
      cy.get(".py4")
        .should("have.css", "padding-top", "16.816px")
        .should("have.css", "padding-bottom", "16.816px");
    });
    it("Top and bottom 5", () => {
      cy.get(".py5")
        .should("have.css", "padding-top", "27.2px")
        .should("have.css", "padding-bottom", "27.2px");
    });
    it("Top and bottom 6", () => {
      cy.get(".py6")
        .should("have.css", "padding-top", "44px")
        .should("have.css", "padding-bottom", "44px");
    });
    it("Top and bottom 7", () => {
      cy.get(".py7")
        .should("have.css", "padding-top", "71.184px")
        .should("have.css", "padding-bottom", "71.184px");
    });
    it("Top and bottom 8", () => {
      cy.get(".py8")
        .should("have.css", "padding-top", "115.2px")
        .should("have.css", "padding-bottom", "115.2px");
    });
    it("Top and bottom 9", () => {
      cy.get(".py9")
        .should("have.css", "padding-top", "186.4px")
        .should("have.css", "padding-bottom", "186.4px");
    });
    it("Top and bottom 10", () => {
      cy.get(".py10")
        .should("have.css", "padding-top", "303.2px")
        .should("have.css", "padding-bottom", "303.2px");
    });
  });

  context("Padding left and right", () => {
    it("Left and right 0", () => {
      cy.get(".px0")
        .should("have.css", "padding-left", "0px")
        .should("have.css", "padding-right", "0px");
    });
    it("Left and right 1", () => {
      cy.get(".px1")
        .should("have.css", "padding-left", "4px")
        .should("have.css", "padding-right", "4px");
    });
    it("Left and right 2", () => {
      cy.get(".px2")
        .should("have.css", "padding-left", "6.464px")
        .should("have.css", "padding-right", "6.464px");
    });
    it("Left and right 3", () => {
      cy.get(".px3")
        .should("have.css", "padding-left", "10.464px")
        .should("have.css", "padding-right", "10.464px");
    });
    it("Left and right 4", () => {
      cy.get(".px4")
        .should("have.css", "padding-left", "16.816px")
        .should("have.css", "padding-right", "16.816px");
    });
    it("Left and right 5", () => {
      cy.get(".px5")
        .should("have.css", "padding-left", "27.2px")
        .should("have.css", "padding-right", "27.2px");
    });
    it("Left and right 6", () => {
      cy.get(".px6")
        .should("have.css", "padding-left", "44px")
        .should("have.css", "padding-right", "44px");
    });
    it("Left and right 7", () => {
      cy.get(".px7")
        .should("have.css", "padding-left", "71.184px")
        .should("have.css", "padding-right", "71.184px");
    });
    it("Left and right 8", () => {
      cy.get(".px8")
        .should("have.css", "padding-left", "115.2px")
        .should("have.css", "padding-right", "115.2px");
    });
    it("Left and right 9", () => {
      cy.get(".px9")
        .should("have.css", "padding-left", "186.4px")
        .should("have.css", "padding-right", "186.4px");
    });
    it("Left and right 10", () => {
      cy.get(".px10")
        .should("have.css", "padding-left", "303.2px")
        .should("have.css", "padding-right", "303.2px");
    });
  });

  context("Margin all", () => {
    it("Margin all sides 0", () => {
      cy.get(".m0")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-bottom", "0px")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("Margin all sides 1", () => {
      cy.get(".m1")
        .should("have.css", "margin-top", "4px")
        .should("have.css", "margin-bottom", "4px")
        .should("have.css", "margin-left", "4px")
        .should("have.css", "margin-right", "4px");
    });
    it("Margin all sides 2", () => {
      cy.get(".m2")
        .should("have.css", "margin-top", "6.464px")
        .should("have.css", "margin-bottom", "6.464px")
        .should("have.css", "margin-left", "6.464px")
        .should("have.css", "margin-right", "6.464px");
    });
    it("Margin all sides 3", () => {
      cy.get(".m3")
        .should("have.css", "margin-top", "10.464px")
        .should("have.css", "margin-bottom", "10.464px")
        .should("have.css", "margin-left", "10.464px")
        .should("have.css", "margin-right", "10.464px");
    });
    it("Margin all sides 4", () => {
      cy.get(".m4")
        .should("have.css", "margin-top", "16.816px")
        .should("have.css", "margin-bottom", "16.816px")
        .should("have.css", "margin-left", "16.816px")
        .should("have.css", "margin-right", "16.816px");
    });
    it("Margin all sides 5", () => {
      cy.get(".m5")
        .should("have.css", "margin-top", "27.2px")
        .should("have.css", "margin-bottom", "27.2px")
        .should("have.css", "margin-left", "27.2px")
        .should("have.css", "margin-right", "27.2px");
    });
    it("Margin all sides 6", () => {
      cy.get(".m6")
        .should("have.css", "margin-top", "44px")
        .should("have.css", "margin-bottom", "44px")
        .should("have.css", "margin-left", "44px")
        .should("have.css", "margin-right", "44px");
    });
    it("Margin all sides 7", () => {
      cy.get(".m7")
        .should("have.css", "margin-top", "71.184px")
        .should("have.css", "margin-bottom", "71.184px")
        .should("have.css", "margin-left", "71.184px")
        .should("have.css", "margin-right", "71.184px");
    });
    it("Margin all sides 8", () => {
      cy.get(".m8")
        .should("have.css", "margin-top", "115.2px")
        .should("have.css", "margin-bottom", "115.2px")
        .should("have.css", "margin-left", "115.2px")
        .should("have.css", "margin-right", "115.2px");
    });
    it("Margin all sides 9", () => {
      cy.get(".m9")
        .should("have.css", "margin-top", "186.4px")
        .should("have.css", "margin-bottom", "186.4px")
        .should("have.css", "margin-left", "186.4px")
        .should("have.css", "margin-right", "186.4px");
    });
    it("Margin all sides 10", () => {
      cy.get(".m10")
        .should("have.css", "margin-top", "303.2px")
        .should("have.css", "margin-bottom", "303.2px")
        .should("have.css", "margin-left", "303.2px")
        .should("have.css", "margin-right", "303.2px");
    });
  });

  context("Margin top", () => {
    it("Margin on top 0", () => {
      cy.get(".mt0")
        .should("have.css", "margin-top", "0px");
    });
    it("Margin on top 1", () => {
      cy.get(".mt1")
        .should("have.css", "margin-top", "4px");
    });
    it("Margin on top 2", () => {
      cy.get(".mt2")
        .should("have.css", "margin-top", "6.464px");
    });
    it("Margin on top 3", () => {
      cy.get(".mt3")
        .should("have.css", "margin-top", "10.464px");
    });
    it("Margin on top 4", () => {
      cy.get(".mt4")
        .should("have.css", "margin-top", "16.816px");
    });
    it("Margin on top 5", () => {
      cy.get(".mt5")
        .should("have.css", "margin-top", "27.2px");
    });
    it("Margin on top 6", () => {
      cy.get(".mt6")
        .should("have.css", "margin-top", "44px");
    });
    it("Margin on top 7", () => {
      cy.get(".mt7")
        .should("have.css", "margin-top", "71.184px");
    });
    it("Margin on top 8", () => {
      cy.get(".mt8")
        .should("have.css", "margin-top", "115.2px");
    });
    it("Margin on top 9", () => {
      cy.get(".mt9")
        .should("have.css", "margin-top", "186.4px");
    });
    it("Margin on top 10", () => {
      cy.get(".mt10")
        .should("have.css", "margin-top", "303.2px");
    });
  });

  context("Margin bottom", () => {
    it("Margin on bottom 0", () => {
      cy.get(".mb0")
        .should("have.css", "margin-bottom", "0px");
    });
    it("Margin on bottom 1", () => {
      cy.get(".mb1")
        .should("have.css", "margin-bottom", "4px");
    });
    it("Margin on bottom 2", () => {
      cy.get(".mb2")
        .should("have.css", "margin-bottom", "6.464px");
    });
    it("Margin on bottom 3", () => {
      cy.get(".mb3")
        .should("have.css", "margin-bottom", "10.464px");
    });
    it("Margin on bottom 4", () => {
      cy.get(".mb4")
        .should("have.css", "margin-bottom", "16.816px");
    });
    it("Margin on bottom 5", () => {
      cy.get(".mb5")
        .should("have.css", "margin-bottom", "27.2px");
    });
    it("Margin on bottom 6", () => {
      cy.get(".mb6")
        .should("have.css", "margin-bottom", "44px");
    });
    it("Margin on bottom 7", () => {
      cy.get(".mb7")
        .should("have.css", "margin-bottom", "71.184px");
    });
    it("Margin on bottom 8", () => {
      cy.get(".mb8")
        .should("have.css", "margin-bottom", "115.2px");
    });
    it("Margin on bottom 9", () => {
      cy.get(".mb9")
        .should("have.css", "margin-bottom", "186.4px");
    });
    it("Margin on bottom 10", () => {
      cy.get(".mb10")
        .should("have.css", "margin-bottom", "303.2px");
    });
  });

  context("Margin left", () => {
    it("Margin on left 0", () => {
      cy.get(".ml0")
        .should("have.css", "margin-left", "0px");
    });
    it("Margin on left 1", () => {
      cy.get(".ml1")
        .should("have.css", "margin-left", "4px");
    });
    it("Margin on left 2", () => {
      cy.get(".ml2")
        .should("have.css", "margin-left", "6.464px");
    });
    it("Margin on left 3", () => {
      cy.get(".ml3")
        .should("have.css", "margin-left", "10.464px");
    });
    it("Margin on left 4", () => {
      cy.get(".ml4")
        .should("have.css", "margin-left", "16.816px");
    });
    it("Margin on left 5", () => {
      cy.get(".ml5")
        .should("have.css", "margin-left", "27.2px");
    });
    it("Margin on left 6", () => {
      cy.get(".ml6")
        .should("have.css", "margin-left", "44px");
    });
    it("Margin on left 7", () => {
      cy.get(".ml7")
        .should("have.css", "margin-left", "71.184px");
    });
    it("Margin on left 8", () => {
      cy.get(".ml8")
        .should("have.css", "margin-left", "115.2px");
    });
    it("Margin on left 9", () => {
      cy.get(".ml9")
        .should("have.css", "margin-left", "186.4px");
    });
    it("Margin on left 10", () => {
      cy.get(".ml10")
        .should("have.css", "margin-left", "303.2px");
    });
  });

  context("Margin right", () => {
    it("Margin on right 0", () => {
      cy.get(".mr0")
        .should("have.css", "margin-right", "0px");
    });
    it("Margin on right 1", () => {
      cy.get(".mr1")
        .should("have.css", "margin-right", "4px");
    });
    it("Margin on right 2", () => {
      cy.get(".mr2")
        .should("have.css", "margin-right", "6.464px");
    });
    it("Margin on right 3", () => {
      cy.get(".mr3")
        .should("have.css", "margin-right", "10.464px");
    });
    it("Margin on right 4", () => {
      cy.get(".mr4")
        .should("have.css", "margin-right", "16.816px");
    });
    it("Margin on right 5", () => {
      cy.get(".mr5")
        .should("have.css", "margin-right", "27.2px");
    });
    it("Margin on right 6", () => {
      cy.get(".mr6")
        .should("have.css", "margin-right", "44px");
    });
    it("Margin on right 7", () => {
      cy.get(".mr7")
        .should("have.css", "margin-right", "71.184px");
    });
    it("Margin on right 8", () => {
      cy.get(".mr8")
        .should("have.css", "margin-right", "115.2px");
    });
    it("Margin on right 9", () => {
      cy.get(".mr9")
        .should("have.css", "margin-right", "186.4px");
    });
    it("Margin on right 10", () => {
      cy.get(".mr10")
        .should("have.css", "margin-right", "303.2px");
    });
  });

  context("Margin top and bottom", () => {
    it("Margin on top and bottom 0", () => {
      cy.get(".my0")
        .should("have.css", "margin-top", "0px")
        .should("have.css", "margin-bottom", "0px");
    });
    it("Margin on top and bottom 1", () => {
      cy.get(".my1")
        .should("have.css", "margin-top", "4px")
        .should("have.css", "margin-bottom", "4px");
    });
    it("Margin on top and bottom 2", () => {
      cy.get(".my2")
        .should("have.css", "margin-top", "6.464px")
        .should("have.css", "margin-bottom", "6.464px");
    });
    it("Margin on top and bottom 3", () => {
      cy.get(".my3")
        .should("have.css", "margin-top", "10.464px")
        .should("have.css", "margin-bottom", "10.464px");
    });
    it("Margin on top and bottom 4", () => {
      cy.get(".my4")
        .should("have.css", "margin-top", "16.816px")
        .should("have.css", "margin-bottom", "16.816px");
    });
    it("Margin on top and bottom 5", () => {
      cy.get(".my5")
        .should("have.css", "margin-top", "27.2px")
        .should("have.css", "margin-bottom", "27.2px");
    });
    it("Margin on top and bottom 6", () => {
      cy.get(".my6")
        .should("have.css", "margin-top", "44px")
        .should("have.css", "margin-bottom", "44px");
    });
    it("Margin on top and bottom 7", () => {
      cy.get(".my7")
        .should("have.css", "margin-top", "71.184px")
        .should("have.css", "margin-bottom", "71.184px");
    });
    it("Margin on top and bottom 8", () => {
      cy.get(".my8")
        .should("have.css", "margin-top", "115.2px")
        .should("have.css", "margin-bottom", "115.2px");
    });
    it("Margin on top and bottom 9", () => {
      cy.get(".my9")
        .should("have.css", "margin-top", "186.4px")
        .should("have.css", "margin-bottom", "186.4px");
    });
    it("Margin on top and bottom 10", () => {
      cy.get(".my10")
        .should("have.css", "margin-top", "303.2px")
        .should("have.css", "margin-bottom", "303.2px");
    });
  });

  context("Margin left and right", () => {
    it("Margin on left and right 0", () => {
      cy.get(".mx0")
        .should("have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("Margin on left and right 1", () => {
      cy.get(".mx1")
        .should("have.css", "margin-left", "4px")
        .should("have.css", "margin-right", "4px");
    });
    it("Margin on left and right 2", () => {
      cy.get(".mx2")
        .should("have.css", "margin-left", "6.464px")
        .should("have.css", "margin-right", "6.464px");
    });
    it("Margin on left and right 3", () => {
      cy.get(".mx3")
        .should("have.css", "margin-left", "10.464px")
        .should("have.css", "margin-right", "10.464px");
    });
    it("Margin on left and right 4", () => {
      cy.get(".mx4")
        .should("have.css", "margin-left", "16.816px")
        .should("have.css", "margin-right", "16.816px");
    });
    it("Margin on left and right 5", () => {
      cy.get(".mx5")
        .should("have.css", "margin-left", "27.2px")
        .should("have.css", "margin-right", "27.2px");
    });
    it("Margin on left and right 6", () => {
      cy.get(".mx6")
        .should("have.css", "margin-left", "44px")
        .should("have.css", "margin-right", "44px");
    });
    it("Margin on left and right 7", () => {
      cy.get(".mx7")
        .should("have.css", "margin-left", "71.184px")
        .should("have.css", "margin-right", "71.184px");
    });
    it("Margin on left and right 8", () => {
      cy.get(".mx8")
        .should("have.css", "margin-left", "115.2px")
        .should("have.css", "margin-right", "115.2px");
    });
    it("Margin on left and right 9", () => {
      cy.get(".mx9")
        .should("have.css", "margin-left", "186.4px")
        .should("have.css", "margin-right", "186.4px");
    });
    it("Margin on left and right 10", () => {
      cy.get(".mx10")
        .should("have.css", "margin-left", "303.2px")
        .should("have.css", "margin-right", "303.2px");
    });
  });

  context("Auto margin", () => {
    it("Margin both left and right sides 0", () => {
      cy.get(".ma")
        .should("not.have.css", "margin-left", "0px")
        .should("not.have.css", "margin-right", "0px");
    });
    it("Margin left sides", () => {
      cy.get(".max")
        .should("not.have.css", "margin-left", "0px")
        .should("not.have.css", "margin-right", "0px");
    });
    it("Margin left side", () => {
      cy.get(".mal")
        .should("not.have.css", "margin-left", "0px")
        .should("have.css", "margin-right", "0px");
    });
    it("Margin right side", () => {
      cy.get(".mar")
        .should("not.have.css", "margin-right", "0px")
        .should("have.css", "margin-left", "0px");
    });
  });

});

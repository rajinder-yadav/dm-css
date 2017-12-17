describe('Borders', () => {

  before(() => {
    cy.visit('/test/web-pages/border.html');
  });

  it('None', () => {
    cy.get('#b0')
      .should('have.css', 'border-top-width', '0px')
      .should('have.css', 'border-bottom-width', '0px')
      .should('have.css', 'border-left-width', '0px')
      .should('have.css', 'border-right-width', '0px');
  });
  it('Border size 1px', () => {
    cy.get('#b1')
      .should('have.css', 'border-top-width', '1px')
      .should('have.css', 'border-bottom-width', '1px')
      .should('have.css', 'border-left-width', '1px')
      .should('have.css', 'border-right-width', '1px');
  });
  it('Border size 2px', () => {
    cy.get('#b2')
      .should('have.css', 'border-top-width', '2px')
      .should('have.css', 'border-bottom-width', '2px')
      .should('have.css', 'border-left-width', '2px')
      .should('have.css', 'border-right-width', '2px');
  });
  it('Border size 3px', () => {
    cy.get('#b3')
      .should('have.css', 'border-top-width', '3px')
      .should('have.css', 'border-bottom-width', '3px')
      .should('have.css', 'border-left-width', '3px')
      .should('have.css', 'border-right-width', '3px');
  });
  it('Border size 4px', () => {
    cy.get('#b4')
      .should('have.css', 'border-top-width', '4px')
      .should('have.css', 'border-bottom-width', '4px')
      .should('have.css', 'border-left-width', '4px')
      .should('have.css', 'border-right-width', '4px');
  });

  it('Border top size 1px', () => {
    cy.get('#bt0')
      .should('have.css', 'border-top-width', '0px');
  });
  it('Border top size 1px', () => {
    cy.get('#bt1')
      .should('have.css', 'border-top-width', '1px');
  });
  it('Border top size 2px', () => {
    cy.get('#bt2')
      .should('have.css', 'border-top-width', '2px');
  });
  it('Border top size 3px', () => {
    cy.get('#bt3')
      .should('have.css', 'border-top-width', '3px');
  });
  it('Border top size 4px', () => {
    cy.get('#bt4')
      .should('have.css', 'border-top-width', '4px');
  });

  it('Border bottom size 1px', () => {
    cy.get('#bb0')
      .should('have.css', 'border-bottom-width', '0px');
  });
  it('Border bottom size 1px', () => {
    cy.get('#bb1')
      .should('have.css', 'border-bottom-width', '1px');
  });
  it('Border bottom size 2px', () => {
    cy.get('#bb2')
      .should('have.css', 'border-bottom-width', '2px');
  });
  it('Border bottom size 3px', () => {
    cy.get('#bb3')
      .should('have.css', 'border-bottom-width', '3px');
  });
  it('Border bottom size 4px', () => {
    cy.get('#bb4')
      .should('have.css', 'border-bottom-width', '4px');
  });

  it('Border left size 1px', () => {
    cy.get('#bl0')
      .should('have.css', 'border-left-width', '0px');
  });
  it('Border left size 1px', () => {
    cy.get('#bl1')
      .should('have.css', 'border-left-width', '1px');
  });
  it('Border left size 2px', () => {
    cy.get('#bl2')
      .should('have.css', 'border-left-width', '2px');
  });
  it('Border left size 3px', () => {
    cy.get('#bl3')
      .should('have.css', 'border-left-width', '3px');
  });
  it('Border left size 4px', () => {
    cy.get('#bl4')
      .should('have.css', 'border-left-width', '4px');
  });

  it('Border right size 1px', () => {
    cy.get('#br0')
      .should('have.css', 'border-right-width', '0px');
  });
  it('Border right size 1px', () => {
    cy.get('#br1')
      .should('have.css', 'border-right-width', '1px');
  });
  it('Border right size 2px', () => {
    cy.get('#br2')
      .should('have.css', 'border-right-width', '2px');
  });
  it('Border right size 3px', () => {
    cy.get('#br3')
      .should('have.css', 'border-right-width', '3px');
  });
  it('Border right size 4px', () => {
    cy.get('#br4')
      .should('have.css', 'border-right-width', '4px');
  });

  it('Border left-right size 1px', () => {
    cy.get('#bx0')
      .should('have.css', 'border-left-width', '0px')
      .should('have.css', 'border-right-width', '0px');
  });
  it('Border left-right size 1px', () => {
    cy.get('#bx1')
      .should('have.css', 'border-left-width', '1px')
      .should('have.css', 'border-right-width', '1px');
  });
  it('Border left-right size 2px', () => {
    cy.get('#bx2')
      .should('have.css', 'border-left-width', '2px')
      .should('have.css', 'border-right-width', '2px');
  });
  it('Border left-right size 3px', () => {
    cy.get('#bx3')
      .should('have.css', 'border-left-width', '3px')
      .should('have.css', 'border-right-width', '3px');
  });
  it('Border left-right size 4px', () => {
    cy.get('#bx4')
      .should('have.css', 'border-left-width', '4px')
      .should('have.css', 'border-right-width', '4px');
  });

  it('Border top-bottom size 1px', () => {
    cy.get('#by0')
      .should('have.css', 'border-top-width', '0px')
      .should('have.css', 'border-bottom-width', '0px');
  });
  it('Border top-bottom size 1px', () => {
    cy.get('#by1')
      .should('have.css', 'border-top-width', '1px')
      .should('have.css', 'border-bottom-width', '1px');
  });
  it('Border top-bottom size 2px', () => {
    cy.get('#by2')
      .should('have.css', 'border-top-width', '2px')
      .should('have.css', 'border-bottom-width', '2px');
  });
  it('Border top-bottom size 3px', () => {
    cy.get('#by3')
      .should('have.css', 'border-top-width', '3px')
      .should('have.css', 'border-bottom-width', '3px');
  });
  it('Border top-bottom size 4px', () => {
    cy.get('#by4')
      .should('have.css', 'border-top-width', '4px')
      .should('have.css', 'border-bottom-width', '4px');
  });

  it('Circle radius', () => {
    cy.get('#circle')
      .should('have.css', 'border-top-left-radius', '50%')
      .should('have.css', 'border-top-right-radius', '50%')
      .should('have.css', 'border-bottom-left-radius', '50%')
      .should('have.css', 'border-bottom-right-radius', '50%');
  });
  it('Piill1 radius', () => {
    cy.get('#pill1')
      .should('have.css', 'border-top-left-radius', '10% 50%')
      .should('have.css', 'border-top-right-radius', '10% 50%')
      .should('have.css', 'border-bottom-left-radius', '10% 50%')
      .should('have.css', 'border-bottom-right-radius', '10% 50%');
  });
  it('Piill2 radius', () => {
    cy.get('#pill2')
      .should('have.css', 'border-top-left-radius', '15% 50%')
      .should('have.css', 'border-top-right-radius', '15% 50%')
      .should('have.css', 'border-bottom-left-radius', '15% 50%')
      .should('have.css', 'border-bottom-right-radius', '15% 50%');
  });
  it('Piill1 radius', () => {
    cy.get('#pill3')
      .should('have.css', 'border-top-left-radius', '20% 50%')
      .should('have.css', 'border-top-right-radius', '20% 50%')
      .should('have.css', 'border-bottom-left-radius', '20% 50%')
      .should('have.css', 'border-bottom-right-radius', '20% 50%');
  });
  it('Piill1 radius', () => {
    cy.get('#pill4')
      .should('have.css', 'border-top-left-radius', '25% 50%')
      .should('have.css', 'border-top-right-radius', '25% 50%')
      .should('have.css', 'border-bottom-left-radius', '25% 50%')
      .should('have.css', 'border-bottom-right-radius', '25% 50%');
  });

  it('Radius0', () => {
    cy.get('#radius0')
      .should('have.css', 'border-top-left-radius', '0px')
      .should('have.css', 'border-top-right-radius', '0px')
      .should('have.css', 'border-bottom-left-radius', '0px')
      .should('have.css', 'border-bottom-right-radius', '0px');
  });
  it('Radius1', () => {
    cy.get('#radius1')
      .should('have.css', 'border-top-left-radius', '4px')
      .should('have.css', 'border-top-right-radius', '4px')
      .should('have.css', 'border-bottom-left-radius', '4px')
      .should('have.css', 'border-bottom-right-radius', '4px');
  });
  it('Radius2', () => {
    cy.get('#radius2')
      .should('have.css', 'border-top-left-radius', '6.464px')
      .should('have.css', 'border-top-right-radius', '6.464px')
      .should('have.css', 'border-bottom-left-radius', '6.464px')
      .should('have.css', 'border-bottom-right-radius', '6.464px');
  });
  it('Radius3', () => {
    cy.get('#radius3')
      .should('have.css', 'border-top-left-radius', '10.464px')
      .should('have.css', 'border-top-right-radius', '10.464px')
      .should('have.css', 'border-bottom-left-radius', '10.464px')
      .should('have.css', 'border-bottom-right-radius', '10.464px');
  });
  it('Radius4', () => {
    cy.get('#radius4')
      .should('have.css', 'border-top-left-radius', '16.816px')
      .should('have.css', 'border-top-right-radius', '16.816px')
      .should('have.css', 'border-bottom-left-radius', '16.816px')
      .should('have.css', 'border-bottom-right-radius', '16.816px');
  });
  it('Radius5', () => {
    cy.get('#radius5')
      .should('have.css', 'border-top-left-radius', '27.2px')
      .should('have.css', 'border-top-right-radius', '27.2px')
      .should('have.css', 'border-bottom-left-radius', '27.2px')
      .should('have.css', 'border-bottom-right-radius', '27.2px');
  });
  it('Radius6', () => {
    cy.get('#radius6')
      .should('have.css', 'border-top-left-radius', '44px')
      .should('have.css', 'border-top-right-radius', '44px')
      .should('have.css', 'border-bottom-left-radius', '44px')
      .should('have.css', 'border-bottom-right-radius', '44px');
  });
  it('Radius7', () => {
    cy.get('#radius7')
      .should('have.css', 'border-top-left-radius', '71.184px')
      .should('have.css', 'border-top-right-radius', '71.184px')
      .should('have.css', 'border-bottom-left-radius', '71.184px')
      .should('have.css', 'border-bottom-right-radius', '71.184px');
  });

  it('TL Radius0', () => {
    cy.get('#tl-radius0')
      .should('have.css', 'border-top-left-radius', '0px');
  });
  it('TL Radius1', () => {
    cy.get('#tl-radius1')
      .should('have.css', 'border-top-left-radius', '4px');
  });
  it('TL Radius2', () => {
    cy.get('#tl-radius2')
      .should('have.css', 'border-top-left-radius', '6.464px');
  });
  it('TL Radius3', () => {
    cy.get('#tl-radius3')
      .should('have.css', 'border-top-left-radius', '10.464px');
  });
  it('TL Radius4', () => {
    cy.get('#tl-radius4')
      .should('have.css', 'border-top-left-radius', '16.816px');
  });
  it('TL Radius5', () => {
    cy.get('#tl-radius5')
      .should('have.css', 'border-top-left-radius', '27.2px');
  });
  it('TL Radius6', () => {
    cy.get('#tl-radius6')
      .should('have.css', 'border-top-left-radius', '44px');
  });
  it('TL Radius7', () => {
    cy.get('#tl-radius7')
      .should('have.css', 'border-top-left-radius', '71.184px');
  });

  it('TR Radius0', () => {
    cy.get('#tr-radius0')
      .should('have.css', 'border-top-right-radius', '0px');
  });
  it('TR Radius1', () => {
    cy.get('#tr-radius1')
      .should('have.css', 'border-top-right-radius', '4px');
  });
  it('TR Radius2', () => {
    cy.get('#tr-radius2')
      .should('have.css', 'border-top-right-radius', '6.464px');
  });
  it('TR Radius3', () => {
    cy.get('#tr-radius3')
      .should('have.css', 'border-top-right-radius', '10.464px');
  });
  it('TR Radius4', () => {
    cy.get('#tr-radius4')
      .should('have.css', 'border-top-right-radius', '16.816px');
  });
  it('TR Radius5', () => {
    cy.get('#tr-radius5')
      .should('have.css', 'border-top-right-radius', '27.2px');
  });
  it('TR Radius6', () => {
    cy.get('#tr-radius6')
      .should('have.css', 'border-top-right-radius', '44px');
  });
  it('TR Radius7', () => {
    cy.get('#tr-radius7')
      .should('have.css', 'border-top-right-radius', '71.184px');
  });

  it('BL Radius0', () => {
    cy.get('#bl-radius0')
      .should('have.css', 'border-bottom-left-radius', '0px');
  });
  it('BL Radius1', () => {
    cy.get('#bl-radius1')
      .should('have.css', 'border-bottom-left-radius', '4px');
  });
  it('BL Radius2', () => {
    cy.get('#bl-radius2')
      .should('have.css', 'border-bottom-left-radius', '6.464px');
  });
  it('BL Radius3', () => {
    cy.get('#bl-radius3')
      .should('have.css', 'border-bottom-left-radius', '10.464px');
  });
  it('BL Radius4', () => {
    cy.get('#bl-radius4')
      .should('have.css', 'border-bottom-left-radius', '16.816px');
  });
  it('BL Radius5', () => {
    cy.get('#bl-radius5')
      .should('have.css', 'border-bottom-left-radius', '27.2px');
  });
  it('BL Radius6', () => {
    cy.get('#bl-radius6')
      .should('have.css', 'border-bottom-left-radius', '44px');
  });
  it('BL Radius7', () => {
    cy.get('#bl-radius7')
      .should('have.css', 'border-bottom-left-radius', '71.184px');
  });

  it('BR Radius0', () => {
    cy.get('#br-radius0')
      .should('have.css', 'border-bottom-right-radius', '0px');
  });
  it('BR Radius1', () => {
    cy.get('#br-radius1')
      .should('have.css', 'border-bottom-right-radius', '4px');
  });
  it('BR Radius2', () => {
    cy.get('#br-radius2')
      .should('have.css', 'border-bottom-right-radius', '6.464px');
  });
  it('BR Radius3', () => {
    cy.get('#br-radius3')
      .should('have.css', 'border-bottom-right-radius', '10.464px');
  });
  it('BR Radius4', () => {
    cy.get('#br-radius4')
      .should('have.css', 'border-bottom-right-radius', '16.816px');
  });
  it('BR Radius5', () => {
    cy.get('#br-radius5')
      .should('have.css', 'border-bottom-right-radius', '27.2px');
  });
  it('BR Radius6', () => {
    cy.get('#br-radius6')
      .should('have.css', 'border-bottom-right-radius', '44px');
  });
  it('BR Radius7', () => {
    cy.get('#br-radius7')
      .should('have.css', 'border-bottom-right-radius', '71.184px');
  });

  it('T Radius0', () => {
    cy.get('#t-radius0')
      .should('have.css', 'border-top-left-radius', '0px')
      .should('have.css', 'border-top-right-radius', '0px');
  });
  it('T Radius1', () => {
    cy.get('#t-radius1')
      .should('have.css', 'border-top-left-radius', '4px')
      .should('have.css', 'border-top-right-radius', '4px');
  });
  it('T Radius2', () => {
    cy.get('#t-radius2')
      .should('have.css', 'border-top-left-radius', '6.464px')
      .should('have.css', 'border-top-right-radius', '6.464px');
  });
  it('T Radius3', () => {
    cy.get('#t-radius3')
      .should('have.css', 'border-top-left-radius', '10.464px')
      .should('have.css', 'border-top-right-radius', '10.464px');
  });
  it('T Radius4', () => {
    cy.get('#t-radius4')
      .should('have.css', 'border-top-left-radius', '16.816px')
      .should('have.css', 'border-top-right-radius', '16.816px');
  });
  it('T Radius5', () => {
    cy.get('#t-radius5')
      .should('have.css', 'border-top-left-radius', '27.2px')
      .should('have.css', 'border-top-right-radius', '27.2px');
  });
  it('T Radius6', () => {
    cy.get('#t-radius6')
      .should('have.css', 'border-top-left-radius', '44px')
      .should('have.css', 'border-top-right-radius', '44px');
  });
  it('T Radius7', () => {
    cy.get('#t-radius7')
      .should('have.css', 'border-top-left-radius', '71.184px')
      .should('have.css', 'border-top-right-radius', '71.184px');
  });

  it('B Radius0', () => {
    cy.get('#b-radius0')
      .should('have.css', 'border-top-left-radius', '0px')
      .should('have.css', 'border-top-right-radius', '0px');
  });
  it('B Radius1', () => {
    cy.get('#b-radius1')
      .should('have.css', 'border-bottom-left-radius', '4px')
      .should('have.css', 'border-bottom-right-radius', '4px');
  });
  it('B Radius2', () => {
    cy.get('#b-radius2')
      .should('have.css', 'border-bottom-left-radius', '6.464px')
      .should('have.css', 'border-bottom-right-radius', '6.464px');
  });
  it('B Radius3', () => {
    cy.get('#b-radius3')
      .should('have.css', 'border-bottom-left-radius', '10.464px')
      .should('have.css', 'border-bottom-right-radius', '10.464px');
  });
  it('B Radius4', () => {
    cy.get('#b-radius4')
      .should('have.css', 'border-bottom-left-radius', '16.816px')
      .should('have.css', 'border-bottom-right-radius', '16.816px');
  });
  it('B Radius5', () => {
    cy.get('#b-radius5')
      .should('have.css', 'border-bottom-left-radius', '27.2px')
      .should('have.css', 'border-bottom-right-radius', '27.2px');
  });
  it('B Radius6', () => {
    cy.get('#b-radius6')
      .should('have.css', 'border-bottom-left-radius', '44px')
      .should('have.css', 'border-bottom-right-radius', '44px');
  });
  it('B Radius7', () => {
    cy.get('#b-radius7')
      .should('have.css', 'border-bottom-left-radius', '71.184px')
      .should('have.css', 'border-bottom-right-radius', '71.184px');
  });

  it('L Radius0', () => {
    cy.get('#l-radius0')
      .should('have.css', 'border-top-left-radius', '0px')
      .should('have.css', 'border-bottom-left-radius', '0px');
  });
  it('L Radius1', () => {
    cy.get('#l-radius1')
      .should('have.css', 'border-top-left-radius', '4px')
      .should('have.css', 'border-bottom-left-radius', '4px');
  });
  it('L Radius2', () => {
    cy.get('#l-radius2')
      .should('have.css', 'border-top-left-radius', '6.464px')
      .should('have.css', 'border-bottom-left-radius', '6.464px');
  });
  it('L Radius3', () => {
    cy.get('#l-radius3')
      .should('have.css', 'border-top-left-radius', '10.464px')
      .should('have.css', 'border-bottom-left-radius', '10.464px');
  });
  it('L Radius4', () => {
    cy.get('#l-radius4')
      .should('have.css', 'border-top-left-radius', '16.816px')
      .should('have.css', 'border-bottom-left-radius', '16.816px');
  });
  it('L Radius5', () => {
    cy.get('#l-radius5')
      .should('have.css', 'border-top-left-radius', '27.2px')
      .should('have.css', 'border-bottom-left-radius', '27.2px');
  });
  it('L Radius6', () => {
    cy.get('#l-radius6')
      .should('have.css', 'border-top-left-radius', '44px')
      .should('have.css', 'border-bottom-left-radius', '44px');
  });
  it('L Radius7', () => {
    cy.get('#l-radius7')
      .should('have.css', 'border-top-left-radius', '71.184px')
      .should('have.css', 'border-bottom-left-radius', '71.184px');
  });
  it('R Radius0', () => {
    cy.get('#r-radius0')
      .should('have.css', 'border-top-right-radius', '0px')
      .should('have.css', 'border-bottom-right-radius', '0px');
  });
  it('R Radius1', () => {
    cy.get('#r-radius1')
      .should('have.css', 'border-top-right-radius', '4px')
      .should('have.css', 'border-bottom-right-radius', '4px');
  });
  it('R Radius2', () => {
    cy.get('#r-radius2')
      .should('have.css', 'border-top-right-radius', '6.464px')
      .should('have.css', 'border-bottom-right-radius', '6.464px');
  });
  it('R Radius3', () => {
    cy.get('#r-radius3')
      .should('have.css', 'border-top-right-radius', '10.464px')
      .should('have.css', 'border-bottom-right-radius', '10.464px');
  });
  it('R Radius4', () => {
    cy.get('#r-radius4')
      .should('have.css', 'border-top-right-radius', '16.816px')
      .should('have.css', 'border-bottom-right-radius', '16.816px');
  });
  it('R Radius5', () => {
    cy.get('#r-radius5')
      .should('have.css', 'border-top-right-radius', '27.2px')
      .should('have.css', 'border-bottom-right-radius', '27.2px');
  });
  it('R Radius6', () => {
    cy.get('#r-radius6')
      .should('have.css', 'border-top-right-radius', '44px')
      .should('have.css', 'border-bottom-right-radius', '44px');
  });
  it('R Radius7', () => {
    cy.get('#r-radius7')
      .should('have.css', 'border-top-right-radius', '71.184px')
      .should('have.css', 'border-bottom-right-radius', '71.184px');
  });
  it('Border style dash', () => {
    cy.get('#dash')
      .should('have.css', 'border-top-style', 'dashed')
      .should('have.css', 'border-bottom-style', 'dashed')
      .should('have.css', 'border-left-style', 'dashed')
      .should('have.css', 'border-right-style', 'dashed');
  });
  it('Border style top dash', () => {
    cy.get('#dasht')
      .should('have.css', 'border-top-style', 'dashed');
  });
  it('Border style bottom dash', () => {
    cy.get('#dashb')
      .should('have.css', 'border-bottom-style', 'dashed');
  });
  it('Border style left dash', () => {
    cy.get('#dashl')
      .should('have.css', 'border-left-style', 'dashed');
  });
  it('Border style right dash', () => {
    cy.get('#dashr')
      .should('have.css', 'border-right-style', 'dashed');
  });
  it('Border style left-right dash', () => {
    cy.get('#dashx')
      .should('have.css', 'border-left-style', 'dashed')
      .should('have.css', 'border-right-style', 'dashed');
  });
  it('Border style top-bottom dash', () => {
    cy.get('#dashy')
      .should('have.css', 'border-top-style', 'dashed')
      .should('have.css', 'border-bottom-style', 'dashed');
  });

  it('Border style dot', () => {
    cy.get('#dot')
      .should('have.css', 'border-top-style', 'dotted')
      .should('have.css', 'border-bottom-style', 'dotted')
      .should('have.css', 'border-left-style', 'dotted')
      .should('have.css', 'border-right-style', 'dotted');
  });
  it('Border style top dot', () => {
    cy.get('#dott')
      .should('have.css', 'border-top-style', 'dotted');
  });
  it('Border style bottom dot', () => {
    cy.get('#dotb')
      .should('have.css', 'border-bottom-style', 'dotted');
  });
  it('Border style left dot', () => {
    cy.get('#dotl')
      .should('have.css', 'border-left-style', 'dotted');
  });
  it('Border style right dot', () => {
    cy.get('#dotr')
      .should('have.css', 'border-right-style', 'dotted');
  });
  it('Border style left-right dot', () => {
    cy.get('#dotx')
      .should('have.css', 'border-left-style', 'dotted')
      .should('have.css', 'border-right-style', 'dotted');
  });
  it('Border style top-bottom dot', () => {
    cy.get('#doty')
      .should('have.css', 'border-top-style', 'dotted')
      .should('have.css', 'border-bottom-style', 'dotted');
  });
});
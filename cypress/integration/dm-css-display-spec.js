describe('Borders', () => {

  before(() => {
    cy.visit('http://localhost:3000/test/display.html');
  });

  it('None', () => {
    cy.get('#show')
      .should('have.css', 'display', 'inline')
      .should('be.visible');
  });
  it('None', () => {
    cy.get('#hide')
      .should('have.css', 'display', 'none')
      .should('be.not.visible');
  });
  it('None', () => {
    cy.get('#d-none')
      .should('have.css', 'display', 'none')
      .should('be.not.visible');
  });
  it('None', () => {
    cy.get('#d-inline')
      .should('have.css', 'display', 'inline');
  });
  it('None', () => {
    cy.get('#d-inline-block')
      .should('have.css', 'display', 'inline-block');
  });
  it('None', () => {
    cy.get('#d-block')
      .should('have.css', 'display', 'block');
  });
  it('None', () => {
    cy.get('#d-flex')
      .should('have.css', 'display', 'flex');
  });
  it('None', () => {
    cy.get('#d-inline-flex')
      .should('have.css', 'display', 'inline-flex');
  });
  it('None', () => {
    cy.get('#d-grid')
      .should('have.css', 'display', 'grid');
  });
  it('None', () => {
    cy.get('#d-inline-grid')
      .should('have.css', 'display', 'inline-grid');
  });
});

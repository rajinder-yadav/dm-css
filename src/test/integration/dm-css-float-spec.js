describe('Borders', () => {

  before(() => {
    cy.visit('/test/web-pages/float.html');
  });

  it('Float long left', () => {
    cy.get('#float-l')
      .should('have.css', 'float', 'left');
  });
  it('Float left', () => {
    cy.get('#fll')
      .should('have.css', 'float', 'left');
  });
  it('Float long right', () => {
    cy.get('#float-r')
      .should('have.css', 'float', 'right');
  });
  it('Float right', () => {
    cy.get('#flr')
      .should('have.css', 'float', 'right');
  });
  it('Float long none', () => {
    cy.get('#float-n')
      .should('have.css', 'float', 'none');
  });
  it('Float none', () => {
    cy.get('#fln')
      .should('have.css', 'float', 'none');
  });
});

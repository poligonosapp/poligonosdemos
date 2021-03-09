it('list poligonos', () => {
    cy.visit('http://localhost:3000')
    cy.get('.poligonos')
      .type('learn testing{enter}')
      .type('be cool{enter}')
    cy.get('.admin')
      .should('have.length', 2)
  })
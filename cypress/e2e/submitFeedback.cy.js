describe('Demo Tests - Feedback', () => {

    it('Submits a message to support', () => {
  
      cy.visit('https://www.demoblaze.com')
  
  
      cy.get('#nava')
        .should('contain', 'PRODUCT STORE')

      cy.get('#navbarExample > ul > li:nth-child(2) > a').click()
  
    })
  
  })  
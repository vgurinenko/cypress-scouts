describe('Order any product', () => {

    it('Opens the Home page', () => {
  
      cy.visit('https://www.demoblaze.com')
  
  
      cy.get('.hrefch').eq(0).click()

      cy.contains('Add to cart').click()
    
      cy.contains('Place Order').click()
      
      cy.get('#name').type('testName')
      cy.get('#country').type('Norway')
      cy.get('#city').type('Bergen')
      cy.get('#card').type('1111222233334444')
      cy.get('#month').type('07')
      cy.get('#year').type('2025')
      
      cy.contains('Purchase').click()
  
    })
  
  })  
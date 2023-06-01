describe('Demo Tests - Feedback', () => {

    it('Submits a message to support', () => {
  
      cy.visit('https://www.demoblaze.com')
  
  
      cy.get('#nava')
        .should('contain', 'PRODUCT STORE')

      cy.get('#navbarExample > ul > li:nth-child(2) > a').click()

      // Fill out the form and click "Send message"
      cy.get('#recipient-email').type('user@example.com')
      cy.get('#recipient-name').type('John Doe')
      cy.get('#message-text').type('Hi there! This is a test message...')
      cy.get('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary').click()
  
    })
  
  })  
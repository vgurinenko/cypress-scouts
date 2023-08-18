describe('Demo Tests - Feedback', () => {

    it('Submits a message to support', () => {
        
        cy.visit('https://www.demoblaze.com')
        
        cy.get('#nava')
            .should('contain', 'PRODUCT STORE')
        
        cy.get('#navbarExample > ul > li:nth-child(2) > a').click()

      // Fill out the form and click "Send message"

        cy.wait(1000)
      
        cy.get('#recipient-email')
            .invoke('val', 'user@example.com')
            
        cy.get('#recipient-name')
            .invoke('val', 'John Doe')
            
        cy.get('#message-text')
            .invoke('val', 'Hi there! This is a test message...')
            
        cy.get('#exampleModal > div > div > div.modal-footer > button.btn.btn-primary').click()
  
    })
  
  })  
describe('Demo Tests - Feedback', () => {

    it('Submits a message to support', () => {
        
        cy.visit('https://www.demoblaze.com')

        cy.get('a:contains("Contact")').click()

      // Fill out the form and click "Send message"

        cy.wait(1000)
      
        cy.get('#recipient-email')
            .invoke('val', 'user@example.com')
            
        cy.get('#recipient-name')
            .invoke('val', 'John Doe')
            
        cy.get('#message-text')
            .invoke('val', 'Hi there! This is a test message...')
            
        cy.get('button').contains('Send message').click()
  
    })
  
  })  
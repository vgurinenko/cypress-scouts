export const login = (username, password) => {

    cy.get('a:contains("Log in")').click()

     // Fill out the form and click "Login"

     cy.wait(1000)
      
     cy.get('#loginusername')
         .invoke('val', username)
         
     cy.get('#loginpassword')
         .invoke('val', password)
         
     cy.get('button').contains('Log in').click()

     cy.get('#logout2')
        .should('be.visible')

    cy.get('#nameofuser')
        .should('have.text', `Welcome ${username}`)
}
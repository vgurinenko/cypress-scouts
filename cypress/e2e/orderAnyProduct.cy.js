describe('Order any product', () => {

    it('Adds the first item from the catalog to the cart and submits the order', () => {
        cy.visit('https://www.demoblaze.com')

        // Check that we are on the main page of the store
        cy.get('#nava')
            .should('contain', 'PRODUCT STORE')

        // Click on the first product link...
        // cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
        cy.get('.hrefch').first().click()

        // Check that we are on the product page - [Add to cart] button should exist
        // cy.get('#tbodyid > div.row > div > a')
        //    .should('exist')
        //    .click()

        cy.get('a').contains('Add to cart').click()

        // Open the cart...
        cy.get('#cartur')
            .should('contain', 'Cart')
            .click()

        // Check that the cart is not empty (contains at least 1 "Delete")
        // cy.contains('Delete')

        // cy.get('#tbodyid > tr:nth-child(1) > td:nth-child(4) > a')
        //     .should('exist')
        //     .and('have.length', 1)

        cy.get('.success').should('exist')

        // Click the Place Order button
        // cy.get('#page-wrapper > div > div.col-lg-1 > button').click()
        cy.get('button').contains('Place Order').click()

        // Fill out the order form
        cy.get('#name')
            .invoke('val', 'testName')
        
        cy.get('#country')
            .invoke('val', 'Turkey')
        
        cy.get('#city')
            .invoke('val', 'Antalya')
        
        cy.get('#card')
            .invoke('val', '1111222233334444')
        
        cy.get('#month')
            .invoke('val', '07')
        
        cy.get('#year')
            .invoke('val', '2025')

        // Click the Purchase buttonx
        cy.contains('Purchase').click()
    })
  
  })
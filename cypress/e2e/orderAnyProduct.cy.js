describe('Order any product', () => {

    it('Adds the first item from the catalog to the cart and submits the order', () => {
        cy.visit('https://www.demoblaze.com')

        // Check that we are on the main page of the store
        cy.get('#nava')
            .should('contain', 'PRODUCT STORE')

        // Click on the first product link...
        cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()

        // Check that we are on the product page - Add to cart button should exist
        cy.contains('Add to cart').click()

        // Open the cart...
        cy.get('#cartur')
            .should('contain', 'Cart').click()

        // Check that the cart is not empty (contains at least 1 "Delete")
        cy.contains('Delete')

        // Click the Place Order button
        cy.get('#page-wrapper > div > div.col-lg-1 > button').click()

        // Fill out the order form
        cy.get('#name').type('testName')
        cy.get('#country').type('Norway')
        cy.get('#city').type('Bergen')
        cy.get('#card').type('1111222233334444')
        cy.get('#month').type('07')
        cy.get('#year').type('2025')

        // Click the Purchase button
        cy.contains('Purchase').click()
    })
  
  })
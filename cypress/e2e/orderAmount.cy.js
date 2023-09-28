describe('Check order total', () => {

    it('Checks the cost of two identical items in the cart', () => {

        // intercept request for further waits of it
        cy.intercept('POST', '**/addtocart').as('addToCart');

        cy.visit('/')

        // Click the first item on the product list
        cy.get('.hrefch').first().click()

        // click the [Add to cart] button twice
        cy.contains('.btn', 'Add to cart').should('be.visible').click().click()

        // wait until the product is added to cart
        cy.wait('@addToCart')

        // click the [Cart] button
        cy.contains('#cartur', 'Cart').click()

        // wait until the table with the product list is displayed in the cart
        cy.get('.success').should('be.visible')

        // find the cost of the first item in the cart
        cy.get('table tbody tr').eq(0).find('td').eq(2).invoke('text').then(parseInt).as('firstItemPrice')

        // find the cost of the second item in the cart
        cy.get('table tbody tr').eq(1).find('td').eq(2).invoke('text').then(parseInt).as('secondItemPrice')

        // compare Total price with the sum of items in cart
        cy.get('#totalp').invoke('text').then(parseInt).as('totalPrice').then(function() {
          expect(this.firstItemPrice + this.secondItemPrice).to.eq(this.totalPrice)
        })

    })
})
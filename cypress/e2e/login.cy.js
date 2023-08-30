import { login } from "../support/utils/login"

describe('Auth Tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    const username = 'user992221'
    const password = 'pass'

    it('Successfully sign in using valid credentials', () => {

        login(username, password)

        cy.get('#logout2')
            .should('be.visible')
            
        cy.get('#nameofuser')
            .should('have.text', `Welcome ${username}`)

    })

    it.only('Closes the sign in modal when the button "Close" is clicked', () => {

        cy.get('a:contains("Log in")').click()
        
        cy.wait(1000)

        // cy.get('button').contains('Close').click()
        // cy.get('button').contains('Close')
        //     .pause()
        //     .debug()

        cy.get('button').contains('Close').click()

        cy.get('#logInModalLabel')
            .should('be.visible')

    })

    it('Show "Please fill out Username and Password" error when using empty username and password', () => {

        login('', '') // empty username and password

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
      
    })

    it('Show "Please fill out Username and Password" error when using empty username and non-empty password', () => {

        login('', password) // empty username, valid password

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
      
    })

    it('Show "Please fill out Username and Password" error when using non-empty username and empty password', () => {

        login(username, '') // valid username, empty password

        cy.on('window:alert', (text) => {
            expect(text).to.contains('Please fill out Username and Password.')
        })
      
    })

    it('Show "Wrong password" error when using valid username and invalid password', () => {

        login(username, '1234') // invalid password

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'Wrong password.')
          })
      
    })

    it('Show "User does not exist" error when using invalid username and valid password', () => {

        login('invalidUser'+Date.now(), password) // invalid user

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'User does not exist.')
          })
    })

    it('Show "User does not exist" error when using invalid username and invalid password', () => {

        login('user'+Date.now(), 'invalidPassword') // invalid user

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'User does not exist.')
          })
    })

    it('Show "User does not exist" error when using invalid username and password (ALL CAPS)', () => {

        login(username.toUpperCase(), password.toUpperCase()) // invalid user

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'User does not exist.')
          })
    })
})
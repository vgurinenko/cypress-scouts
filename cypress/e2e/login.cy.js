import { login } from "../support/utils/login"

describe('Auth Tests', () => {

    const username = 'user992221'
    const password = 'pass'

    it('Signs in via UI using valid credentials', () => {
        cy.visit('/')

        login(username, password)

        cy.get('#logout2')
            .should('be.visible')
            
        cy.get('#nameofuser')
            .should('have.text', `Welcome ${username}`)

    })

    it('Signs in via UI using valid username and invalid password', () => {
        cy.visit('/')

        login(username, '1234') // invalid password

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'Wrong password.')
          })
      
    })

    it('Signs in via UI using invalid username and valid password', () => {
        cy.visit('/')

        login('invalidUser'+Date.now(), password) // invalid user

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'User does not exist.')
          })
    })

    it('Signs in via UI using invalid username and invalid password', () => {
        cy.visit('/')

        login('user'+Date.now(), 'invalidPassword') // invalid user

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'User does not exist.')
          })
    })

    it('Signs in via UI using invalid username and password (ALL CAPS)', () => {
        cy.visit('/')

        login(username.toUpperCase(), password.toUpperCase()) // invalid user

        cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            cy.get('@winAlert').should('be.calledWith', 'User does not exist.')
          })
    })
})
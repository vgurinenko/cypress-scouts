import { login } from "../support/utils/login"

describe('Auth Test', () => {

    const username = 'user992221'
    const password = 'pass'

    it('Signs in via UI', () => {
        cy.visit('/')

        login(username, password)

    })
})
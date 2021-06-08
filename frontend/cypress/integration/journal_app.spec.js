describe('Journal app', function () {
  describe('when there are no registered users', function () {
    beforeEach(function () {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function () {
      cy.contains('Journal')
      cy.contains('Login')
      cy.contains('Register')
      cy.contains('Welcome to Journal app')
    })

    it('register form can be opened', function () {
      cy.contains('Register').click()
    })

    it('new user can register', function () {
      cy.contains('Register').click()
      cy.get('#username').type('testUser')
      cy.get('#password').type('p4ssw0rd')
      cy.get('#register-button').click()

      cy.contains('New account created')
    })
  })

  describe('when account has been created', function () {
    beforeEach(function () {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')
      cy.visit('http://localhost:3000')

      cy.contains('Register').click()
      cy.get('#username').type('testUser')
      cy.get('#password').type('p4ssw0rd')
      cy.get('#register-button').click()
    })

    it('login form can be opened', function () {
      cy.contains('Login').click()
    })

    it('user can login with correct username and password', function () {
      cy.contains('Login').click()
      cy.get('#username').type('testUser')
      cy.get('#password').type('p4ssw0rd')
      cy.get('#login-button').click()

      cy.contains('testUser logged in')
    })

  })
})
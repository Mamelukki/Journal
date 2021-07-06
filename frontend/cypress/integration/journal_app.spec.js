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
      cy.contains('Ever dreamed of an online journal?')
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

      cy.register({ username: 'testUser', password: 'p4ssw0rd' })
      cy.visit('http://localhost:3000')
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

    it('login fails with wrong password', function() {
      cy.contains('Login').click()
      cy.get('#username').type('testUser')
      cy.get('#password').type('wrongPassword')
      cy.get('#login-button').click()

      cy.contains('Wrong username or password')
      cy.get('html').should('not.contain', 'testUser logged in')
    })
  })

  describe('when user is logged in', function () {
    beforeEach(function () {
      cy.request('POST', 'http://localhost:3001/api/testing/reset')

      cy.register({ username: 'testUser', password: 'p4ssw0rd' })
      cy.login({ username: 'testUser', password: 'p4ssw0rd' })
    })

    it('new journal entry can be created', function () {
      cy.get('#add-new-entry-button').click()
      cy.get('#title').type('Fun day')
      cy.get('#feelings').type('Happy')
      cy.get('#content').type('I have my first day of holiday today, so nice to finally have the time to play some games')
      cy.get('#new-entry-submit-button').click()
      cy.contains('New journal entry added')
    })

    it('created journal entry can be deleted after clicking view', function () {
      cy.createJournalEntry({ title: 'Sad day', feelings: 'Sad', content: 'I am very sad today because I failed my exam :(' })
      cy.get('table').contains('td', 'Sad day').get('#view-button').click()
      cy.get('#delete-journal-entry-button').click()
      cy.contains('Journal entry deleted')
    })

    it('created journal entry can be edited after clicking view', function () {
      cy.createJournalEntry({ title: 'Sad day', feelings: 'Sad', content: 'I am very sad today because I failed my exam :(' })
      cy.get('table').contains('td', 'Sad day').get('#view-button').click()
      cy.get('#edit-journal-entry-button').click()
      cy.get('#feelings').clear()
      cy.get('#feelings').type('Sad, miserable')
      cy.get('#edit-entry-submit-button').click()
      cy.contains('Journal entry edited')
      cy.contains('Sad, miserable')
    })
  })
})
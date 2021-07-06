Cypress.Commands.add('register', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3001/api/users', {
    username, password
  })
})

Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3001/api/login', {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('LoggedJournalAppUser', JSON.stringify(body))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('createJournalEntry', ({ title, feelings, content }) => {
  cy.request({
    url: 'http://localhost:3001/api/journalEntries',
    method: 'POST',
    body: { title, feelings, content },
    headers: {
      'Authorization': `bearer ${JSON.parse(localStorage.getItem('LoggedJournalAppUser')).token}`
    }
  })

  cy.visit('http://localhost:3000')
})
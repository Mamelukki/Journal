const testingRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')
const User = require('../models/user')
const Image = require('../models/image')

testingRouter.post('/reset', async (request, response) => {
  await JournalEntry.deleteMany({})
  await User.deleteMany({})
  await Image.deleteMany({})

  response.status(204).end()
})

module.exports = testingRouter
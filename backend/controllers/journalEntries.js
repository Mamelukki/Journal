const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')
const jwt = require('jsonwebtoken')

journalEntriesRouter.get('/', async (request, response) => {
  const journalEntries = await JournalEntry
    .find({}).populate('user', { username: 1 })
  response.json(journalEntries.map(journalEntry => journalEntry.toJSON()))
})

journalEntriesRouter.post('/', async (request, response) => {
  const body = request.body
  console.log(body)

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  console.log(decodedToken.id)
  console.log(User.find({}))
  const user = await User.findById(decodedToken.id)

  const journalEntry = new JournalEntry({
    content: body.content,
    date: new Date(),
    user: user.id
  })

  const savedJournalEntry = await journalEntry.save()
  user.journalEntries = user.journalEntries.concat(savedJournalEntry.id)
  await user.save()

  response.json(savedJournalEntry.toJSON())
})

journalEntriesRouter.delete('/:id', async (request, response) => {
  // TO DO: delete the journal entry from the user too
  await JournalEntry.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = journalEntriesRouter
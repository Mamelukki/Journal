const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')

journalEntriesRouter.get('/', async (request, response) => {
  const journalEntries = await JournalEntry.find({})
  response.json(journalEntries.map(journalEntry => journalEntry.toJSON()))
})

journalEntriesRouter.post('/', async (request, response, next) => {
  const body = request.body

  const user = await User.findById(body.userId)

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

journalEntriesRouter.delete('/:id', async (request, response, next) => {
  await JournalEntry.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = journalEntriesRouter
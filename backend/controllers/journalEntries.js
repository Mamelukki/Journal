const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')

journalEntriesRouter.get('/', async (request, response) => {
  const journalEntries = await JournalEntry.find({})
  response.json(journalEntries.map(journalEntry => journalEntry.toJSON()))
})

journalEntriesRouter.post('/', async (request, response, next) => {
  const body = request.body

  const journalEntry = new JournalEntry({
    content: body.content,
    date: new Date()
  }) 

  const savedJournalEntry = await journalEntry.save()   
  response.json(savedJournalEntry.toJSON())
})

journalEntriesRouter.delete('/:id', async (request, response, next) => {
  await JournalEntry.findByIdAndRemove(request.params.id)
  response.status(204).end()
})

module.exports = journalEntriesRouter
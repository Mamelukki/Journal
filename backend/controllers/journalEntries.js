const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

journalEntriesRouter.get('/', async (request, response) => {
  const journalEntries = await JournalEntry
    .find({}).populate('user', { username: 1 })
  response.json(journalEntries.map(journalEntry => journalEntry.toJSON()))
})

journalEntriesRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  const user = await User.findById(decodedToken.id)

  const journalEntry = new JournalEntry({
    content: body.content,
    date: new Date(),
    user: user
  })

  const savedJournalEntry = await journalEntry.save()
  user.journalEntries = user.journalEntries.concat(savedJournalEntry.id)
  await user.save()

  response.json(savedJournalEntry.toJSON())
})

journalEntriesRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const journalEntry = await JournalEntry.findById(request.params.id)

  if (journalEntry.user.toString() !== user.id.toString()) {
    return response.status(401).json({ error: 'Only the creator can delete the journal entry' })
  }

  await journalEntry.remove()
  user.journalEntries = user.journalEntries.filter(journalEntry => journalEntry.id.toString() !== request.params.id.toString())
  await user.save()
  response.status(204).end()
})

module.exports = journalEntriesRouter
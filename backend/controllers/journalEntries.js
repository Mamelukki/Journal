const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')

journalEntriesRouter.get('/', (request, response) => {
    JournalEntry.find({}).then(journalEntries => {
        response.json(journalEntries.map(journalEntry => journalEntry.toJSON()))
    })
})

journalEntriesRouter.post('/', (request, response, next) => {
    const body = request.body

    const journalEntry = new JournalEntry({
        content: body.content,
        date: new Date()
    })

    journalEntry.save()
        .then(savedJournalEntry => {
            response.json(journalEntry.toJSON())
        })
        .catch(error => next(error))
})

module.exports = journalEntriesRouter
const JournalEntry = require('../models/journalEntry')
const User = require('../models/user')

const initialJournalEntries = [
    {
        title: 'Great day',
        content: 'We visited our summer cottage today and I had so much fun!',
        feelings: 'Happy, relaxed',
        date: new Date(),
    },
    {
        title: 'Bored...',
        content: 'I am so bored today, I have nothing to do.',
        feelings: 'Bored',
        date: new Date(),
    },
]

const journalEntriesInDb = async () => {
    const journalEntries = await JournalEntry.find({})
    return journalEntries.map(journalEntry => journalEntry.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(user => user.toJSON())
}

module.exports = {
    initialJournalEntries, journalEntriesInDb, usersInDb
}
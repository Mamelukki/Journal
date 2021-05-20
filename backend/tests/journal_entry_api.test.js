const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const JournalEntry = require('../models/journalEntry')
const User = require('../models/user')

const api = supertest(app)

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
  },]

beforeEach(async () => {
  await JournalEntry.deleteMany({})
  let journalEntryObject = new JournalEntry(initialJournalEntries[0])
  await journalEntryObject.save()
  journalEntryObject = new JournalEntry(initialJournalEntries[1])
  await journalEntryObject.save()
})

test('journal entries are returned as json', async () => {
  await api
    .get('/api/journalEntries')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('there are two journal entries', async () => {
  const response = await api.get('/api/journalEntries')

  expect(response.body).toHaveLength(initialJournalEntries.length)
})

test('a spesific journal entry is within the returned journal entries', async () => {
  const response = await api.get('/api/journalEntries')

  const contents = response.body.map(r => r.content)
  expect(contents).toContain(
    'We visited our summer cottage today and I had so much fun!'
  )
})

afterAll(() => {
  mongoose.connection.close()
})
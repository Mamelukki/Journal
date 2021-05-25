const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const JournalEntry = require('../models/journalEntry')
const User = require('../models/user')
const helper = require('./test_helper')

const api = supertest(app)

beforeEach(async () => {
  await JournalEntry.deleteMany({})
  await User.deleteMany({})

  const journalEntryObjects = helper.initialJournalEntries
    .map(journalEntry => new JournalEntry(journalEntry))

  const promiseArray = journalEntryObjects.map(journalEntry => journalEntry.save())
  await Promise.all(promiseArray)
})

describe('When some blogs are saved', () => {
  test('journal entries are returned as json', async () => {
    await api
      .get('/api/journalEntries')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('there are two journal entries', async () => {
    const response = await api.get('/api/journalEntries')

    expect(response.body).toHaveLength(helper.initialJournalEntries.length)
  })

  test('a spesific journal entry is within the returned journal entries', async () => {
    const response = await api.get('/api/journalEntries')

    const contents = response.body.map(r => r.content)
    expect(contents).toContain(
      'We visited our summer cottage today and I had so much fun!'
    )
  })
})

describe('When user is logged in', () => {
  let headers
  let userId

  beforeEach(async () => {
    // create user and login
    const newUser = {
      username: 'testUser',
      password: 'password'
    }

    await api
      .post('/api/users')
      .send(newUser)

    const result = await api
      .post('/api/login')
      .send(newUser)

    headers = {
      'Authorization': `bearer ${result.body.token}`
    }

    userId = result.body.id
  })

  test('a journal entry can be added', async () => {
    const newJournalEntry = {
      title: 'Feeling happy',
      content: 'I am so happy today, I just wanna dance and jump around! :D',
      feelings: 'Happy, energetic',
      date: new Date()
    }

    await api
      .post('/api/journalEntries')
      .send(newJournalEntry)
      .set(headers)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const journalEntriesAtEnd = await helper.journalEntriesInDb()
    expect(journalEntriesAtEnd.length).toBe(helper.initialJournalEntries.length + 1)

    const titles = journalEntriesAtEnd.map(journalEntry => journalEntry.title)
    expect(titles).toContain(
      'Feeling happy'
    )

    users = await helper.usersInDb()
    user = users.find(user => user.id === userId)

    const userJournalEntries = user.journalEntries.map(journalEntry => journalEntry.toString())
    expect(userJournalEntries).toContain(journalEntriesAtEnd[journalEntriesAtEnd.length - 1].id)
  })

  test('a journal entry can be deleted by its creator', async () => {
    // create journal entry and add it while logged in
    const newJournalEntry = {
      title: 'Meeting up with friends',
      content: 'I met some friends today after a long time and was great to catch up with them again. We agreed to meet next week too!',
      feelings: 'Content',
      date: new Date()
    }

    const response = await api
      .post('/api/journalEntries')
      .send(newJournalEntry)
      .set(headers)
    
    const journalEntryToDelete = response.body

    const journalEntriesAtStart = await helper.journalEntriesInDb()
    await api
      .delete(`/api/journalEntries/${journalEntryToDelete.id}`)
      .set(headers)
      .expect(204)

    const journalEntriesAtEnd = await helper.journalEntriesInDb()
    expect(journalEntriesAtEnd.length).toBe(journalEntriesAtStart.length - 1)

    const titles = journalEntriesAtEnd.map(journalEntry => journalEntry.title)
    expect(titles).not.toContain(
      'Meeting up with friends'
    )

    // check that user doesn't have the deleted journal entry anymore

    users = await helper.usersInDb()
    user = users.find(user => user.id === userId)

    const userJournalEntries = user.journalEntries.map(journalEntry => journalEntry.toString())
    expect(userJournalEntries).not.toContain(journalEntryToDelete.id)
  })
})

describe('When user is not logged in', () => {
  test('a journal entry cannot be added', async () => {
    const journalEntriesAtStart = await helper.journalEntriesInDb()
    const newJournalEntry = {
      title: 'Meeting up with friends',
      content: 'I met some friends today after a long time and was great to catch up with them again. We agreed to meet next week too!',
      feelings: 'Content',
      date: new Date()
    }

    await api
      .post('/api/journalEntries')
      .send(newJournalEntry)
      .expect(401)

    const journalEntriesAtEnd = await helper.journalEntriesInDb()
    expect(journalEntriesAtEnd.length).toBe(journalEntriesAtStart.length)
  })
})

afterAll(() => {
  mongoose.connection.close()
})
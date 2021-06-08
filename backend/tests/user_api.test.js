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

  const newUser = {
    username: 'user1',
    password: 'password1',
    date: new Date()
  }

  const result = await api
    .post('/api/users')
    .send(newUser)

  const journalEntryObjects = helper.initialJournalEntries
    .map(journalEntry => new JournalEntry({
      ...journalEntry, user: result.body.id
    }))

  const promiseArray = journalEntryObjects.map(journalEntry => journalEntry.save())
  await Promise.all(promiseArray)
})

describe('creation of a user', () => {
  test('succeeds with valid username and password', async () => {
    const usersAtStart = await helper.usersInDb()
    const newUser = {
      username: 'testUser',
      password: 'password'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const usersAtEnd = await helper.usersInDb()
    expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })

  test('fails if the username is taken', async () => {
    const newUser = {
      username: 'testUser',
      password: 'password'
    }

    await api
      .post('/api/users')
      .send(newUser)

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('`username` to be unique')
  })

  test('fails if the username is shorter than 3 characters', async () => {
    const newUser = {
      username: 'us',
      password: 'password'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('is shorter than the minimum allowed length (3)')
  })

  test('fails if the password is shorter than 8 characters', async () => {
    const newUser = {
      username: 'testUser',
      password: 'secret'
    }

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/)

    expect(result.body.error).toContain('Password must be at least 8 characters long')
  })
})

afterAll(() => {
  mongoose.connection.close()
})
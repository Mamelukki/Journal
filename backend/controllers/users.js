const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const JournalEntry = require('../models/journalEntry')
const Image = require('../models/image')
const cloudinary = require('../utils/cloudinary')

usersRouter.get('/', async (request, response) => {
  const users = await User
    .find({})
    .populate('journalEntries', { title: 1, content: 1, feelings: 1, date: 1 })
  response.json(users.map(user => user.toJSON()))
})

usersRouter.post('/', async (request, response) => {
  const body = request.body

  if ( !body.password || body.password.length < 8 ) {
    return response.status(400).send({
      error: 'Password must be at least 8 characters long'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    name: body.name,
    date: new Date(),
    passwordHash
  })

  const savedUser = await user.save()
  response.json(savedUser)
})

usersRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const journalEntries = await JournalEntry.find({ user: user.id }).populate('images', {  imageUrl: 1, cloudinaryId: 1 })
  await JournalEntry.deleteMany({ user: user.id })
  await Image.deleteMany({ user: user.id })

  // go through the images attached to the user and delete all of them
  await Promise.all(journalEntries.map(async journalEntry => {
    journalEntry.images.map(async image => {
      await cloudinary.uploader.destroy(image.cloudinaryId)
    })
  }))

  await user.remove()

  response.status(204).end()
})

module.exports = usersRouter
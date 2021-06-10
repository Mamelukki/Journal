const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Image = require('../models/image')
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')

journalEntriesRouter.get('/', async (request, response) => {
  const journalEntries = await JournalEntry
    .find({})
    .populate('user', { username: 1 })
    .populate('images', { imageUrl: 1, cloudinaryId: 1 })
  response.json(journalEntries.map(journalEntry => journalEntry.toJSON()))
})

journalEntriesRouter.post('/', async (request, response) => {
  const body = request.body

  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  const user = await User.findById(decodedToken.id)

  const journalEntry = new JournalEntry({
    title: body.title,
    content: body.content,
    feelings: body.feelings,
    date: new Date(),
    user: user._id
  })

  if (!journalEntry.title) {
    return response.status(400).json({ error: 'Journal entry must have a title' })
  }

  if (!journalEntry.content) {
    return response.status(400).json({ error: 'Journal entry cannot be empty' })
  }

  const savedJournalEntry = await journalEntry.save()
  const savedJournalEntryWithUser = await JournalEntry.findById(savedJournalEntry._id).populate('user', { username: 1, images: 1, journalEntries: 1 })
  user.journalEntries = user.journalEntries.concat(savedJournalEntry._id)
  await user.save()

  response.status(201).json(savedJournalEntryWithUser.toJSON())
})

journalEntriesRouter.put('/:id', async (request, response) => {
  const journalEntry = request.body
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  journalEntry.user = user

    if (!journalEntry.title) {
    return response.status(400).json({ error: 'Journal entry must have a title' })
  }

  if (!journalEntry.content) {
    return response.status(400).json({ error: 'Journal entry cannot be empty' })
  }

  const updatedJournalEntry = await JournalEntry
    .findByIdAndUpdate(request.params.id, journalEntry, { new: true })
    .populate('user')
    .populate('images')

  response.json(updatedJournalEntry)
})

journalEntriesRouter.post('/:id/images', async (request, response) => {
  upload(request, response, function (error) {
    if (error) {
      return response.status(500).json(error.message)
    }
  })

  const journalEntry = await JournalEntry.findById(request.params.id)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  if (journalEntry.images.length >= 10) {
    return response.status(400).json({ error: 'Journal entry can have maximum 10 images' })
  }

  const user = await User.findById(decodedToken.id)
  console.log(request.file)
  const cloudinaryImage = await cloudinary.uploader.upload(request.file.path)

  const image = new Image({
    imageUrl: cloudinaryImage.secure_url,
    cloudinaryId: cloudinaryImage.public_id,
    journalEntry: journalEntry,
    user: user
  })

  const savedImage = await image.save()

  journalEntry.images = journalEntry.images.concat(savedImage._id)

  await journalEntry.save()

  user.images = user.images.concat(savedImage._id)
  await user.save()

  response.status(200).json(savedImage)
})

journalEntriesRouter.delete('/:journalEntryId/images/:imageId', async (request, response) => {
  const journalEntry = await JournalEntry.findById(request.params.journalEntryId).populate('images', { cloudinaryId: 1 })
  const image = await Image.findById(request.params.imageId)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id).populate('images', {  imageUrl: 1, cloudinaryId: 1 })
  
  await cloudinary.uploader.destroy(image.cloudinaryId)
  await image.remove()

  journalEntry.images = journalEntry.images.filter(journalEntryImage => journalEntryImage.id.toString() !== image.id.toString())
  await journalEntry.save()

  user.images = user.images.filter(userImage => userImage.id.toString() !== image.id.toString())
  await user.save()

  response.status(204).end()
})

journalEntriesRouter.delete('/:id', async (request, response) => {
  const decodedToken = jwt.verify(request.token, process.env.SECRET)

  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const user = await User.findById(decodedToken.id)
  const journalEntry = await JournalEntry.findById(request.params.id).populate('images', {  imageUrl: 1, cloudinaryId: 1 })

  if (journalEntry.user.toString() !== user.id.toString()) {
    return response.status(401).json({ error: 'Only the creator can delete the journal entry' })
  }

  // go through the images attached to the journal entry and delete all of them
  await Promise.all(journalEntry.images.map(async image => {
    await cloudinary.uploader.destroy(image.cloudinaryId)
    user.images = user.images.filter(userImage => userImage.toString() !== image.id.toString())
  }))

  await Image.deleteMany({ journalEntry: request.params.id })

  await journalEntry.remove()
  user.journalEntries = user.journalEntries.filter(journalEntry => journalEntry.toString() !== request.params.id.toString())
  await user.save()

  response.status(204).end()
})

module.exports = journalEntriesRouter
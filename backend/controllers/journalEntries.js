const journalEntriesRouter = require('express').Router()
const JournalEntry = require('../models/journalEntry')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const Image = require('../models/image')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  console.log(file)
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Wrong file type, make sure the image is either in .jpeg, .jpg or .png format'), false)
  }
}

const upload = multer({ storage: storage, fileFilter: fileFilter })

journalEntriesRouter.get('/', async (request, response) => {
  const journalEntries = await JournalEntry
    .find({})
    .populate('user', { username: 1 })
    .populate('images', { image: 1 })
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

  if (!journalEntry.content) {
    return response.status(400).json({ error: 'Journal entry cannot be empty' })
  }

  const savedJournalEntry = await journalEntry.save()
  user.journalEntries = user.journalEntries.concat(savedJournalEntry.id)
  await user.save()

  response.json(savedJournalEntry.toJSON())
})

journalEntriesRouter.put('/:id', async (request, response) => {
  const journalEntry = request.body
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  const user = await User.findById(decodedToken.id)
  journalEntry.user = user

  if (!journalEntry.content) {
    return response.status(400).json({ error: 'Journal entry cannot be empty' })
  }

  const updatedJournalEntry = await JournalEntry
    .findByIdAndUpdate(request.params.id, journalEntry, { new: true })
    .populate('user')

  response.json(updatedJournalEntry)
})

journalEntriesRouter.post('/:id/images', upload.single('image'), async (request, response) => {
  const journalEntry = await JournalEntry.findById(request.params.id)
  const image = new Image({
    image: request.file.path,
    journalEntry: journalEntry
  })

  const savedImage = await image.save()

  journalEntry.images = journalEntry.images.concat(savedImage._id)
  
  await journalEntry.save()
  console.log(journalEntry)

  response.status(201).json(savedImage)
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

  await Image.deleteMany({ journalEntry: request.params.id })

  await journalEntry.remove()
  user.journalEntries = user.journalEntries.filter(journalEntry => journalEntry.id.toString() !== request.params.id.toString())

  await user.save()

  response.status(204).end()
})

module.exports = journalEntriesRouter
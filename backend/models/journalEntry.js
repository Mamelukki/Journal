const mongoose = require('mongoose')

const journalEntrySchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    minlength: 3
  },
  date: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

journalEntrySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('JournalEntry', journalEntrySchema)
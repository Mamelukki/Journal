import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry, addImage } from '../reducers/journalEntryReducer'
import journalEntryService from '../services/journalEntries'

const JournalEntry = ({ journalEntry }) => {
  const dispatch = useDispatch()
  const fullDate = new Date(journalEntry.date)
  const date = fullDate.getDate()
  const month = fullDate.getMonth()
  const year = fullDate.getFullYear()
  const [selectedImage, setSelectedImage] = useState('')
  const id = journalEntry.id

  const handleRemove = (id) => {
    dispatch(removeJournalEntry(id))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(selectedImage)
    const formData = new FormData()
    formData.append('image', selectedImage)
    const journalEntry = await journalEntryService.addImage(id, formData)
    dispatch(addImage(journalEntry))
    setSelectedImage('')
  }

  console.log(journalEntry)

  const baseUrl = 'http://localhost:3001'

  return (
    <div className='journal-entry'>
      <h4>{`${date}/${month}/${year}`}</h4>
      <p style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</p>
      <p>Created by {journalEntry.user.username}</p>
      <button onClick={() => handleRemove(journalEntry.id)}>Remove</button>
      <h5>Add image</h5>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      {!journalEntry.images ? null :
        journalEntry.images.map(image =>
          <div key={image.id} >
            <img src={`${baseUrl}/${image.image}`} height={500} width={500} />
          </div>
        )}
    </div>
  )
}

export default JournalEntry
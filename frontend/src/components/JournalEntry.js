import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry, addImage } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import JournalEntryEditForm from './journalEntryEditForm'
import Togglable from './Togglable'
import { Button } from 'semantic-ui-react'

const JournalEntry = ({ journalEntry }) => {
  const dispatch = useDispatch()
  const fullDate = new Date(journalEntry.date)
  const date = fullDate.getDate()
  const month = fullDate.getMonth()
  const year = fullDate.getFullYear()
  const [selectedImage, setSelectedImage] = useState('')
  const id = journalEntry.id

  const handleRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to remove this journal entry?')
    if (confirm) {
      dispatch(removeJournalEntry(id))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const formData = new FormData()
      formData.append('image', selectedImage)
      const journalEntry = await journalEntryService.addImage(id, formData)
      dispatch(addImage(journalEntry))
      dispatch(addNotification('Image added', 'success', 5))
      setSelectedImage('')
    } catch (exception) {
      dispatch(addNotification('Image addition failed', 'error', 5))
    }
  }

  const baseUrl = 'http://localhost:3001'

  return (
    <div className='journal-entry' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px  solid black', backgroundColor: 'azure', padding: '10px', marginBottom: '10px' }}>
      <div>
        <h4>{`${date}/${month}/${year}`}</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</p>
        <p>Created by {journalEntry.user.username}</p>
        <Button basic color='red' icon={{ name: 'trash alternate outline' }} onClick={() => handleRemove(journalEntry.id)}></Button>
        <Togglable buttonLabel='Edit' iconName='edit outline' ><JournalEntryEditForm journalEntry={journalEntry} /></Togglable>
      </div>
      <div>
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
              <img style={{ border: '1px solid black' }} src={`${baseUrl}/${image.image}`} height={300} width={500} />
            </div>
          )}
      </div>
    </div>
  )
}

export default JournalEntry
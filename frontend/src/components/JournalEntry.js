import React, { useState, useRef } from 'react'
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
  const journalEditFormRef = useRef()

  const handleRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.')
    if (confirm) {
      dispatch(removeJournalEntry(id))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!selectedImage || selectedImage === null) {
      return (
        dispatch(addNotification('Please choose an image before uploading', 'error', 5))
      )
    }

    try {
      const formData = new FormData()
      document.getElementById('imageUpload').value = ''
      formData.append('image', selectedImage)
      dispatch(addNotification('Image uploading, please wait a few seconds', 'success', 5))
      const journalEntry = await journalEntryService.addImage(id, formData)
      dispatch(addImage(journalEntry))
      dispatch(addNotification('Image added successfully', 'success', 5))
      setSelectedImage(null)
    } catch (exception) {
      document.getElementById('imageUpload').value = ''
      dispatch(addNotification('Image addition failed', 'error', 5))
      setSelectedImage(null)
    }
  }

  return (
    <div className='journal-entry' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px  solid black', backgroundColor: 'azure', padding: '10px', marginBottom: '10px' }}>
      <div>
        <h4>{`${date}/${month}/${year}`}</h4>
        <p style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</p>
        <Button basic color='red' icon={{ name: 'trash alternate outline' }} onClick={() => handleRemove(journalEntry.id)}></Button>
        <Togglable buttonLabel='Edit' iconName='edit outline' ref={journalEditFormRef} >
          <JournalEntryEditForm journalEntry={journalEntry} journalEditFormRef={journalEditFormRef} />
        </Togglable>
      </div>
      <div>
        <h5>Add image</h5>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id='imageUpload'
              type="file"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
          </div>
          <button type='submit'>Add image</button>
        </form>
        {!journalEntry.images ? null :
          journalEntry.images.map(image =>
            <div key={image.id} >
              <img src={`${image.imageUrl}`} height={300} width={500} />
            </div>
          )}
      </div>
    </div>
  )
}

export default JournalEntry
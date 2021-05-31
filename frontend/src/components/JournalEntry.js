import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry, addImage, removeImage } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import JournalEntryEditForm from './JournalEntryEditForm'
import Togglable from './Togglable'
import { Button, Paper } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from 'react-router-dom'

const JournalEntry = ({ journalEntry }) => {
  if (!journalEntry) {
    return null
  }

  const history = useHistory()
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
      dispatch(addNotification('Journal entry deleted', 'success', 5))
      history.push('/journalEntries')
    }
  }

  const handleRemoveImage = (journalEntryId, imageId) => {
    dispatch(addNotification('Image is being deleted, please wait...', 'success', 5))
    dispatch(removeImage(journalEntryId, imageId))
    dispatch(addNotification('Image deleted', 'success', 5))
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
      console.log('error', exception.response.data)
      dispatch(addNotification(`${exception.response.data}`, 'error', 5))
      setSelectedImage(null)
    }
  }

  return (
    <div>
      <div>
        <Button variant='contained' color='secondary' startIcon={<DeleteIcon />} onClick={() => handleRemove(journalEntry.id)}>Delete</Button>
        <Togglable buttonLabel='Edit' ref={journalEditFormRef} >
          <JournalEntryEditForm journalEntry={journalEntry} journalEditFormRef={journalEditFormRef} />
        </Togglable>
      </div>
      <Paper elevation={10}>
        <div>
          <h3>{`${date}/${month}/${year}`}</h3>
          <h2>{journalEntry.title}</h2>
          <h4>Your feelings today: {journalEntry.feelings}</h4>
          <div style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</div>
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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginRight: '5px', marginLeft: '5px' }}>
              {!journalEntry.images ? null :
                journalEntry.images.map(image =>
                  <div key={image.id} >
                    <img src={`${image.imageUrl}`} height={'auto'} width={'100%'} maxwidth={'400px'} />
                    <Button onClick={() => handleRemoveImage(journalEntry.id, image.id)}>Delete</Button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default JournalEntry
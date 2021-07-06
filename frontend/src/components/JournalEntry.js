import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry, addImage } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import JournalEntryEditForm from './JournalEntryEditForm'
import ImageGallery from './ImageGallery'
import { Button } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

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
  const [showEditForm, setShowEditForm] = useState(false)
  const [uploadFinished, setUploadFinished] = useState(true)
  const [showImageUpload, setShowImageUpload] = useState(false)
  const [deletionFinished, setDeletionFinished] = useState(true)

  const handleRemove = async (id) => {
    const confirm = window.confirm('Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.')
    if (confirm) {
      try {
        if (deletionFinished === true) {
          setDeletionFinished(false)
          dispatch(addNotification('Deleting entry, please wait', 'info', 5))
          await journalEntryService.remove(id)
          dispatch(removeJournalEntry(id))
          dispatch(addNotification('Journal entry deleted', 'success', 5))
          setDeletionFinished(true)
          history.push('/journalEntries')
        }
      } catch (exception) {
        dispatch(addNotification(`${exception.response.data.error}`, 'success', 5))
        setDeletionFinished(true)
      }
    }
  }

  const cancelImageAddition = () => {
    setShowImageUpload(false)
    setSelectedImage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!selectedImage || selectedImage === null) {
      return (
        dispatch(addNotification('Please choose an image before uploading', 'error', 5))
      )
    } else {
      try {
        setUploadFinished(false)
        const formData = new FormData()
        formData.append('image', selectedImage)
        const journalEntry = await journalEntryService.addImage(id, formData)
        dispatch(addImage(journalEntry))
        dispatch(addNotification('Image added successfully', 'success', 5))
        setUploadFinished(true)
        setSelectedImage(null)
        document.getElementById('imageUpload').value = ''
      } catch (exception) {
        setUploadFinished(false)
        if (!exception.response.data.error) {
          dispatch(addNotification(`${exception.response.data}`, 'error', 5))
        } else {
          dispatch(addNotification(`${exception.response.data.error}`, 'error', 15))
        }
        setUploadFinished(true)
        setSelectedImage(null)
        document.getElementById('imageUpload').value = ''
      }
    }
  }

  const printOptionButtons = () => {
    return (
      <div>
        {showEditForm === false && showImageUpload === false ?
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ margin: '5px' }}>
              <Button id='edit-journal-entry-button' variant='contained' color='primary' startIcon={<EditIcon />} onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
            </div>
            <div style={{ margin: '5px' }}>
              <Button variant='contained' color='primary' startIcon={<PhotoCamera />} onClick={() => setShowImageUpload(!showImageUpload)}>Add image</Button>
            </div>
            <div style={{ margin: '5px' }}>
              <Button id='delete-journal-entry-button' variant='contained' color='secondary' startIcon={<DeleteIcon />} onClick={() => handleRemove(journalEntry.id)}>Delete</Button>
            </div>
          </div>
          : null}
        <div style={{ marginTop: '10px' }}>
          {showEditForm === false && showImageUpload && uploadFinished === true ?
            <div>
              <h2>Add image</h2>
              <div>Upload one image at a time. The maximum number of images per entry is 10. Accepted formats are .jpeg, .jpg, .png and .gif.</div>
              <br></br>
              <form onSubmit={handleSubmit}>
                <input accept='image/png, image/jpg, image/gif, image/jpeg' type='file' id='imageUpload' onChange={(e) => setSelectedImage(e.target.files[0])} />
                <label htmlFor='imageUpload'>
                </label>
                <div style={{ marginTop: '15px' }}>
                  {selectedImage && uploadFinished === true ? <Button style={{ marginRight: '10px' }} variant='contained' color='primary' type='submit'>Add image</Button> : null}
                  <Button variant='contained' onClick={() => cancelImageAddition()}>Close</Button>
                </div>
              </form>
            </div>
            : null}
        </div>
        {showImageUpload === true && uploadFinished === false
          ? <div>
            <h2>Add image</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <CircularProgress></CircularProgress>
              <span style={{ marginLeft: '10px' }} >Uploading image, please wait!</span>
            </div>
          </div>
          : null}
      </div>
    )

  }

  return (
    <div>
      {printOptionButtons()}
      <div style={{ marginTop: '25px', marginBottom: '25px' }}>
        {showEditForm ? <JournalEntryEditForm journalEntry={journalEntry} showEditForm={showEditForm} setShowEditForm={setShowEditForm} /> : null}
      </div>
      <div style={{ marginBottom: '25px', marginTop: '25px' }}>
        <h2>{`${date}/${month}/${year}`}</h2>
        <h1 style={{ textTransform: 'uppercase' }}>{journalEntry.title}</h1>
        {journalEntry.feelings ? <h4>Feelings: {journalEntry.feelings}</h4> : null}
        <div style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</div>
      </div>
      <div>
        <ImageGallery journalEntry={journalEntry}></ImageGallery>
      </div>
    </div>
  )
}

export default JournalEntry
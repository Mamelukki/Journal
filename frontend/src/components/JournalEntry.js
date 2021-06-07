import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry, addImage, removeImage } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import JournalEntryEditForm from './JournalEntryEditForm'
import { Button, Paper, IconButton } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

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

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }))

  const classes = useStyles()

  const handleRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.')
    if (confirm) {
      dispatch(removeJournalEntry(id))
      dispatch(addNotification('Journal entry deleted', 'success', 5))
      history.push('/journalEntries')
    }
  }

  const handleRemoveImage = async (journalEntryId, imageId) => {
    dispatch(addNotification('Deleting image, please wait...', 'success', 5))
    await journalEntryService.removeImage(journalEntryId, imageId)
    dispatch(removeImage(journalEntryId, imageId))
    dispatch(addNotification('Image deleted', 'success', 5))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!selectedImage || selectedImage === null) {
      return (
        dispatch(addNotification('Please choose an image before uploading', 'error', 5))
      )
    } else {
      try {
        const formData = new FormData()
        document.getElementById('imageUpload').value = ''
        formData.append('image', selectedImage)
        dispatch(addNotification('Uploading image, please wait...', 'success', 10))
        const journalEntry = await journalEntryService.addImage(id, formData)
        dispatch(addImage(journalEntry))
        dispatch(addNotification('Image added successfully', 'success', 5))
        setSelectedImage(null)
      } catch (exception) {
        document.getElementById('imageUpload').value = ''
        dispatch(addNotification(`${exception.response.data}`, 'error', 5))
        setSelectedImage(null)
      }
    }
  }

  return (
    <div>
      {!showEditForm ?
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <div style={{ margin: '5px' }}>
            <Button variant='contained' color='primary' onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
          </div>
          <div style={{ margin: '5px' }}>
            <Button variant='contained' color='secondary' onClick={() => handleRemove(journalEntry.id)}>Delete</Button>
          </div>
          <div style={{ margin: '5px' }}>
            <Button variant='contained' >Add image</Button>
          </div>
          <form onSubmit={handleSubmit}>
            <span className={classes.root}>
              <input accept='image/png, image/jpg, image/jpeg' className={classes.input} id='imageUpload' type='file' onChange={(e) => setSelectedImage(e.target.files[0])} />
              <label htmlFor='imageUpload'>
                <IconButton color='primary' aria-label='upload picture' component='span'>
                  <PhotoCamera />
                </IconButton>
                {` ${selectedImage ? selectedImage.name : ''}   `}
              </label>
            </span>
            {selectedImage ? <Button type='submit'>Add image</Button> : null}
          </form>
        </div>
        : null}
      <div style={{ margin: '25px' }}>
        {showEditForm ? <JournalEntryEditForm journalEntry={journalEntry} showEditForm={showEditForm} setShowEditForm={setShowEditForm} /> : null}
      </div>
      <Paper elevation={10} style={{ margin: '25px', padding: '20px' }}>
        <div>
          <h1>{`${date}/${month}/${year}`}</h1>
          <h2>{journalEntry.title}</h2>
          <h4>{journalEntry.feelings ? `Your feelings today: ${journalEntry.feelings}` : null}</h4>
          <div style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridGap: '10px', justifyContent: 'space-between' }}>
            {!journalEntry.images ? null :
              journalEntry.images.map(image =>
                <div key={image.id} >
                  <p style={{ margin: '25px', backgroundImage: `url(${image.imageUrl})`, height: '150px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <Button onClick={() => handleRemoveImage(journalEntry.id, image.id)}>Delete</Button>
                  {console.log(`url(${image.imageUrl})`)}
                </div>
              )}
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default JournalEntry
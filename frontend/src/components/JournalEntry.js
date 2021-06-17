import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry, addImage, removeImage } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import JournalEntryEditForm from './JournalEntryEditForm'
import { Button, IconButton } from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import CloseIcon from '@material-ui/icons/Close'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  journalEntryImage: {
    position: 'relative',
    '& .imageDeleteButton': {
      display: 'none',
    },
    '& .zoomButton': {
      display: 'none',
    },
    '&:hover .zoomButton': {
      display: 'block',
      position: 'absolute',
      color: 'white',
      top: '10px',
      left: '1px',
      zIndex: '100',
    },
    '&:hover .imageDeleteButton': {
      display: 'block',
      position: 'absolute',
      color: 'white',
      top: '10px',
      right: '1px',
      zIndex: '100',
    }
  },
  zoomedImage: {
    position: 'relative',
    marginTop: '25px',
    '& .closeZoomButton': {
      display: 'inline-block',
      position: 'absolute',
      color: 'black',
      top: '0px',
      right: '0px',
      zIndex: '100',
    },
    '& .zoomedBackgroundImage': {
      height: 'auto',
      maxWidth: `${window.innerWidth - 160}px`,
    }
  }
}))

const JournalEntry = ({ journalEntry }) => {
  if (!journalEntry) {
    return null
  }

  const classes = useStyles()
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
  const [showFullSizeImage, setShowFullSizeImage] = useState('')

  let zoomedImage = ''
  if (showFullSizeImage) {
    zoomedImage = journalEntry.images.find(image => image.id === showFullSizeImage)
  }

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

  const cancelImageAddition = () => {
    setShowImageUpload(false)
    setSelectedImage('')
  }

  const zoomImage = (id) => {
    setShowFullSizeImage(id)
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

  const printImages = () => {
    if (!journalEntry.images) {
      return null
    }

    if (showFullSizeImage === '') {
      return (
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridGap: '10px', justifyContent: 'space-between', marginTop: '25px' }}>
          {journalEntry.images.map(image =>
            <div key={image.id} className={classes.journalEntryImage}>
              <p className='backgroundImage' style={{ backgroundImage: `url(${image.imageUrl})`, height: '200px', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <IconButton className='imageDeleteButton' onClick={() => handleRemoveImage(journalEntry.id, image.id)}><DeleteIcon /></IconButton>
              <IconButton className='zoomButton' onClick={() => zoomImage(image.id)}><ZoomInIcon/></IconButton>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div className={classes.zoomedImage}>
          <img className='zoomedBackgroundImage' src={zoomedImage.imageUrl}></img>
          <IconButton className='closeZoomButton' onClick={() => setShowFullSizeImage('')}><CloseIcon/></IconButton>
        </div>)
    }
  }

  return (
    <div>
      {showEditForm === false && showImageUpload === false ?
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ margin: '5px' }}>
            <Button variant='contained' color='primary' startIcon={<EditIcon />} onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
          </div>
          <div style={{ margin: '5px' }}>
            <Button variant='contained' color='primary' startIcon={<PhotoCamera />} onClick={() => setShowImageUpload(!showImageUpload)}>Add image</Button>
          </div>
          <div style={{ margin: '5px' }}>
            <Button variant='contained' color='secondary' startIcon={<DeleteIcon />} onClick={() => handleRemove(journalEntry.id)}>Delete</Button>
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
        ? <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <CircularProgress></CircularProgress>
          <span style={{ marginLeft: '10px' }} >Image uploading...</span>
        </div>
        : null}
      <div style={{ marginTop: '25px', marginBottom: '25px' }}>
        {showEditForm ? <JournalEntryEditForm journalEntry={journalEntry} showEditForm={showEditForm} setShowEditForm={setShowEditForm} /> : null}
      </div>
      <div style={{ marginBottom: '25px', marginTop: '25px' }}>
        <h2>{`${date}/${month}/${year}`}</h2>
        <h1>{journalEntry.title}</h1>
        <h4>{journalEntry.feelings ? `Feelings: ${journalEntry.feelings}` : null}</h4>
        <div style={{ whiteSpace: 'pre-line' }}>{journalEntry.content}</div>
      </div>
      <div>
        {printImages()}
      </div>
    </div>
  )
}

export default JournalEntry
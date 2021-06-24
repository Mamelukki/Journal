import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeImage } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import { IconButton } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import ZoomInIcon from '@material-ui/icons/ZoomIn'
import CloseIcon from '@material-ui/icons/Close'
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
      maxWidth: '80%',
    }
  }
}))

const ImageGallery = ({ journalEntry }) => {
  const dispatch = useDispatch()
  const [showFullSizeImage, setShowFullSizeImage] = useState('')
  const [deletionFinished, setDeletionFinished] = useState(true)
  const classes = useStyles()

  let zoomedImage = ''
  if (showFullSizeImage) {
    zoomedImage = journalEntry.images.find(image => image.id === showFullSizeImage)
  }

  const zoomImage = (id) => {
    setShowFullSizeImage(id)
  }

  const handleRemoveImage = async (journalEntryId, imageId) => {
    try {
      if (deletionFinished === true) {
        setDeletionFinished(false)
        dispatch(addNotification('Deleting image, please wait', 'info', 5))
        await journalEntryService.removeImage(journalEntryId, imageId)
        dispatch(removeImage(journalEntryId, imageId))
        dispatch(addNotification('Image deleted', 'success', 5))
        setDeletionFinished(true)
      } else {
        dispatch(addNotification('Wait for the deletion to finish', 'error', 5))
      }
    } catch (exception) {
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
      setDeletionFinished(true)
    }
  }

  const printGallery = () => {
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
              <IconButton className='zoomButton' onClick={() => zoomImage(image.id)}><ZoomInIcon /></IconButton>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div className={classes.zoomedImage}>
          <img className='zoomedBackgroundImage' src={zoomedImage.imageUrl}></img>
          <IconButton className='closeZoomButton' onClick={() => setShowFullSizeImage('')}><CloseIcon /></IconButton>
        </div>)
    }
  }

  return (
    <div>
      {printGallery()}
    </div>
  )
}

export default ImageGallery
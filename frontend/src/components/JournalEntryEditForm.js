import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import { TextField, Button } from '@material-ui/core'

const JournalEntryEditForm = ({ journalEntry, showEditForm, setShowEditForm }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState(journalEntry.content)
  const [feelings, setFeelings] = useState(journalEntry.feelings)
  const [title, setTitle] = useState(journalEntry.title)

  const resetValues = () => {
    setTitle(journalEntry.title)
    setContent(journalEntry.content)
    setFeelings(journalEntry.feelings)
  }

  const handleCancel = () => {
    setTitle(journalEntry.title)
    setContent(journalEntry.content)
    setFeelings(journalEntry.feelings)
    setShowEditForm(!showEditForm)
  }

  const handleEdit = async (event) => {
    event.preventDefault()

    try {
      const id = journalEntry.id
      const editedJournalEntry = await journalEntryService.edit({ id, content, feelings, title })
      dispatch(editJournalEntry(editedJournalEntry))
      dispatch(addNotification('Journal entry edited', 'success', 5))
      setShowEditForm(!showEditForm)
    } catch (exception) {
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
    }
  }

  return (
    <span>
      <h4>Edit journal entry</h4>
      <form onSubmit={handleEdit}>
        <div>
          <div>
            <TextField label='Title' fullWidth
              id='title'
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            <TextField label='Feelings' fullWidth
              id='feelings'
              value={feelings}
              onChange={({ target }) => setFeelings(target.value)}
            />
          </div>
          <TextField label='Content' multiline rows={7} fullWidth
            id='content'
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <br></br>
        <Button id='edit-entry-submit-button' style={{ marginRight: '10px' }} variant='contained' color='primary' type='submit'>Submit</Button>
        <Button style={{ marginRight: '10px' }} variant='contained' color='secondary' onClick={() => resetValues()}>Reset original values</Button>
        <Button style={{ marginRight: '10px' }} variant='contained' onClick={() => handleCancel()}>Cancel</Button>
      </form>
    </span>
  )
}

export default JournalEntryEditForm
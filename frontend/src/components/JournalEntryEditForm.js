import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import { TextField, Button } from '@material-ui/core'

const JournalEntryEditForm = ({ journalEntry, journalEditFormRef }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState(journalEntry.content)
  const [feelings, setFeelings] = useState(journalEntry.feelings)
  const [title, setTitle] = useState(journalEntry.title)

  const resetValues = () => {
    setTitle(journalEntry.title)
    setContent(journalEntry.content)
    setFeelings(journalEntry.feelings)
  }

  const handleEdit = async (event) => {
    event.preventDefault()

    try {
      const id = journalEntry.id
      const editedJournalEntry = await journalEntryService.edit({ id, content, feelings, title })
      dispatch(editJournalEntry(editedJournalEntry))
      dispatch(addNotification('Journal entry edited', 'success', 5))
      journalEditFormRef.current.toggleVisibility()
    } catch (exception) {
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
    }
  }

  return (
    <div>
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
            id='editedContent'
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <Button variant='contained' color='primary' type='submit'>Submit</Button>
        <Button variant='contained' color='secondary' onClick={() => resetValues()}>Reset</Button>
      </form>
    </div>
  )
}

export default JournalEntryEditForm
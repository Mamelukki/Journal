import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import { TextField, Button } from '@material-ui/core'

const JournalEntryEditForm = ({ journalEntry, journalEditFormRef }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState(journalEntry.content)

  const handleEdit = async (event) => {
    event.preventDefault()
    journalEditFormRef.current.toggleVisibility()

    try {
      const id = journalEntry.id
      const editedJournalEntry = await journalEntryService.edit({ id, content })
      dispatch(editJournalEntry(editedJournalEntry))
      dispatch(addNotification('Journal entry edited', 'success', 5))
    } catch (exception) {
      if (!content) {
        setContent(journalEntry.content)
      }
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
    }
  }

  return (
    <div>
      <h4>Edit journal entry</h4>
      <form onSubmit={handleEdit}>
        <div>
          <div>Content</div>
          <TextField multiline rows={7} fullWidth
            id='editedContent'
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <Button variant='contained' color='primary' type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default JournalEntryEditForm
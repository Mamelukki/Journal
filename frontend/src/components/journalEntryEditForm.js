import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'

const JournalEntryEditForm = ({ journalEntry, journalEditFormRef }) => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')

  const handleEdit = async (event) => {
    event.preventDefault()
    journalEditFormRef.current.toggleVisibility()
    try {
      const id = journalEntry.id
      const editedJournalEntry = await journalEntryService.edit({ id, content })
      dispatch(editJournalEntry(editedJournalEntry))
      dispatch(addNotification('Journal entry edited', 'success', 5))
    } catch (exception) {
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
    }
    setContent('')
  }

  return (
    <div>
      <h4>Edit journal entry</h4>
      <form onSubmit={handleEdit}>
        <div>
          <div>Content</div>
          <textarea
            id='editedContent'
            value={!content ? setContent(journalEntry.content) : content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default JournalEntryEditForm
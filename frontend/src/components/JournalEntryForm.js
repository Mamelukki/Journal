import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'

const JournalEntryForm = () => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const newJournalEntry = await journalEntryService.createNew({ content })
      dispatch(addJournalEntry(newJournalEntry))
      dispatch(addNotification('New journal entry added', 'success', 5))
    } catch (exception) {
      dispatch(addNotification('Only logged in users can add journal entries', 'error', 5))
    }
    setContent('')
  }

  return (
    <div>
      <h4>Add journal entry</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Content</div>
          <textarea
            id='content'
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default JournalEntryForm
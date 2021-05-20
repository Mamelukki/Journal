import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'

const JournalEntryForm = ({ journalEntryAddFormRef }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [feelings, setFeelings] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const newJournalEntry = await journalEntryService.createNew({ title, content, feelings })
      dispatch(addJournalEntry(newJournalEntry))
      dispatch(addNotification('New journal entry added', 'success', 5))
      setTitle('')
      setContent('')
      setFeelings('')
      journalEntryAddFormRef.current.toggleVisibility()
    } catch (exception) {
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
    }
  }

  return (
    <div>
      <h4>How was your day?</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <input
            id='title'
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
          <div>Feelings</div>
          <input
            id='feelings'
            value={feelings}
            onChange={({ target }) => setFeelings(target.value)}
          />
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
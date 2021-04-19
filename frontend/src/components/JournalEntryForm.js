import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJournalEntry } from '../reducers/journalEntryReducer'

const JournalEntryForm = () => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    dispatch(addJournalEntry({ content }))
    setContent('')
  }

  return (
    <div>
      <h4>Add journal entry</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Content
          <input
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
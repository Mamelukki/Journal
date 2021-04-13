import React from 'react'
import { useDispatch } from 'react-redux'
import { addJournalEntry } from '../reducers/journalEntryReducer'

const JournalEntryForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    dispatch(addJournalEntry(content))
  }

  return (
    <div>
      <h4>Add journal entry</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Content
          <input name='content' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default JournalEntryForm
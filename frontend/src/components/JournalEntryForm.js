import React, { useState } from 'react'
import axios from 'axios'

const JournalEntryForm = ({ journalEntries, setJournalEntries }) => {
  const [content, setContent] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const journalEntryObject = {
      content: content,
      date: new Date()
    }

    axios
      .post('http://localhost:3001/api/journalEntries', journalEntryObject)
      .then(response => {
        setJournalEntries(journalEntries.concat(response.data))
        setContent('')
      })
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
        <button id='login-button' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default JournalEntryForm
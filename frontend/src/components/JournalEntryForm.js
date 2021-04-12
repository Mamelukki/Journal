import React, { useState } from 'react'

const JournalEntryForm = () => {
  const [content, setContent] = useState('')

  const handleSubmit = async (event) => {
    console.log(event)
    event.preventDefault()
    setContent('')
  }

  return (
    <div>
      <h2>Add Journal entry</h2>
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
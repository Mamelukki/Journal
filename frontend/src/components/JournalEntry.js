import React from 'react'

const JournalEntry = ({ journalEntry }) => {
  const fullDate = new Date(journalEntry.date)
  const date = fullDate.getDate()
  const month = fullDate.getMonth()
  const year = fullDate.getFullYear()

  const handleRemove = () => {
    return ''
  }

  return(
    <div>
      <h4>{`${date}/${month}/${year}`}</h4>
      {journalEntry.content}
      <button onClick={() => handleRemove(journalEntry.id)}>Remove</button>
    </div>
  )
}

export default JournalEntry
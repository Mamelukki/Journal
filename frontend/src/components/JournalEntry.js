import React from 'react'

const JournalEntry = ({ journalEntry }) => {
  const fullDate = new Date(journalEntry.date)
  const date = fullDate.getDate()
  const month = fullDate.getMonth()
  const year = fullDate.getFullYear()
  return(
    <div>
      <h4>{`${date}/${month}/${year}`}</h4>
      {journalEntry.content}
    </div>
  )
}

export default JournalEntry
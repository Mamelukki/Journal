import React from 'react'
import { useDispatch } from 'react-redux'
import { removeJournalEntry } from '../reducers/journalEntryReducer'

const JournalEntry = ({ journalEntry }) => {
  const dispatch = useDispatch()
  const fullDate = new Date(journalEntry.date)
  const date = fullDate.getDate()
  const month = fullDate.getMonth()
  const year = fullDate.getFullYear()

  const handleRemove = (id) => {
    dispatch(removeJournalEntry(id))
  }

  return (
    <div className='journal-entry'>
      <h4>{`${date}/${month}/${year}`}</h4>
      <p>{journalEntry.content}</p>
      <p>Created by {journalEntry.user.username}</p>
      <button onClick={() => handleRemove(journalEntry.id)}>Remove</button>
    </div>
  )
}

export default JournalEntry
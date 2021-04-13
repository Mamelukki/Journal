import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JournalEntry from './components/JournalEntry'
import JournalEntryForm from './components/JournalEntryForm'
import { initializeJournalEntries } from './reducers/journalEntryReducer'

function App() {
  const dispatch = useDispatch()
  const journalEntries = useSelector(state => state.journalEntries)

  useEffect(() => {
    dispatch(initializeJournalEntries())
  },[dispatch])

  return (
    <div>
      <h1>Journal</h1>
      <JournalEntryForm />
      <h3>Journal entries</h3>
      {journalEntries.map(journalEntry =>
        <JournalEntry key={journalEntry.id} journalEntry={journalEntry} />
      )}
    </div>
  )
}

export default App

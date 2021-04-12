import React, { useState, useEffect } from 'react'
import axios from 'axios'
import JournalEntry from './components/JournalEntry'

function App() {
  const [journalEntries, setJournalEntries] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/api/journalEntries')
      .then(response => {
        console.log('promise fulfilled')
        setJournalEntries(response.data)
      })
  }, [])
  console.log('render', journalEntries.length, 'journal entries')

  return (
    <div>
      <h1>Journal</h1>
      <h3>Journal entries</h3>
      {journalEntries.map(journalEntry =>
        <JournalEntry key={journalEntry.id} journalEntry={journalEntry} />
      )}
    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

const JournalEntryList = ({ currentUser, journalEntries }) => {
  if (currentUser) {
    const personalJournalEntries = journalEntries.filter(journalEntry => journalEntry.user.id === currentUser.id)
    const sortedEntries = personalJournalEntries.sort((a, b) => new Date(b.date) - new Date(a.date))
    sortedEntries.map(s => console.log(typeof s.date))
    return (
      <table style={{ textAlign: 'left', backgroundColor: 'white', width: '100%' }}>
        <tbody>
          <tr>
            <th>
              Title
            </th>
            <th>
              Date
            </th>
          </tr>
          {sortedEntries.map(journalEntry =>
            <tr key={journalEntry.id}>
              <td>
                {journalEntry.title}
              </td>
              <td>
                {new Date(journalEntry.date).toDateString()}
              </td>
              <td>
                <Link to={`journalEntries/${journalEntry.id}`}><button>View</button></Link>              </td>
            </tr>
          )}
        </tbody>
      </table>
    )
  } else {
    return null
  }
}

export default JournalEntryList
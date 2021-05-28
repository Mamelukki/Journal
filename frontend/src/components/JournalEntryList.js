import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import JournalEntryForm from './JournalEntryForm'
import Togglable from './Togglable'
import { TableContainer, Table, TableBody, Paper, TableRow, TableCell, Button } from '@material-ui/core'

const JournalEntryList = ({ currentUser, journalEntries }) => {
  const journalEntryAddFormRef = useRef()

  if (!currentUser) {
    return null
  }

  const personalJournalEntries = journalEntries.filter(journalEntry => journalEntry.user.id === currentUser.id)
  const sortedEntries = personalJournalEntries.sort((a, b) => new Date(b.date) - new Date(a.date))
  sortedEntries.map(s => console.log(typeof s.date))

  return (
    <div>
      <Togglable buttonLabel="New journal entry" ref={journalEntryAddFormRef}>
        <JournalEntryForm journalEntryAddFormRef={journalEntryAddFormRef} />
      </Togglable>
      <h1 style={{ textAlign: 'left' }}>Journal entries</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Date
              </TableCell>
              <TableCell>
                Title
              </TableCell>
              <TableCell>
                Feelings
              </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
            {sortedEntries.map(journalEntry =>
              <TableRow key={journalEntry.id}>
                <TableCell>
                  {new Date(journalEntry.date).toDateString()}
                </TableCell>
                <TableCell>
                  {journalEntry.title}
                </TableCell>
                <TableCell>
                  {journalEntry.feelings}
                </TableCell>
                <TableCell>
                  <Link to={`journalEntries/${journalEntry.id}`}><Button variant='contained'>View</Button></Link>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default JournalEntryList
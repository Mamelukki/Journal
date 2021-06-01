import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import JournalEntryForm from './JournalEntryForm'
import Filter from './Filter'
import Togglable from './Togglable'
import { TableContainer, Table, TableBody, Paper, TableRow, TableCell, Button } from '@material-ui/core'

const JournalEntryList = ({ currentUser, journalEntries }) => {
  const journalEntryAddFormRef = useRef()
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  if (!currentUser) {
    return null
  }

  const personalJournalEntries = journalEntries.filter(journalEntry => journalEntry.user.id === currentUser.id)
  const sortedJournalEntries = personalJournalEntries.sort((a, b) => new Date(b.date) - new Date(a.date))

  const handleRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to remove this journal entry? Confirming will also delete the images of this journal entry.')
    if (confirm) {
      dispatch(removeJournalEntry(id))
      dispatch(addNotification('Journal entry deleted', 'success', 5))
    }
  }

  const filteredJournalEntries = () => {
    if (filter && filter.radioButtonValue === 'title') {
      return sortedJournalEntries.filter(journalEntry => journalEntry.title.toLowerCase().includes(filter.filter.toLowerCase()))
    } else if (filter && filter.radioButtonValue === 'date') {
      return sortedJournalEntries.filter(journalEntry => new Date(journalEntry.date).toDateString().toLowerCase().includes(filter.filter.toLowerCase()))
    } else {
      return sortedJournalEntries
    }
  }

  return (
    <div>
      <Togglable buttonLabel="New journal entry" ref={journalEntryAddFormRef}>
        <JournalEntryForm journalEntryAddFormRef={journalEntryAddFormRef} />
      </Togglable>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h1>Journal entries</h1>
        <Filter></Filter>
      </div>
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
                Options
              </TableCell>
            </TableRow>
            {filteredJournalEntries().map(journalEntry =>
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
                  <Link to={`journalEntries/${journalEntry.id}`}><Button variant='contained' color='primary' >View</Button></Link>
                  <Button style={{ marginLeft: '10px' }} variant='contained' color='secondary' onClick={() => handleRemove(journalEntry.id)}>Delete</Button>
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
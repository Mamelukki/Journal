import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addJournalEntry } from '../reducers/journalEntryReducer'
import { addNotification } from '../reducers/notificationReducer'
import journalEntryService from '../services/journalEntries'
import { TextField, Button } from '@material-ui/core'

const JournalEntryForm = ({ showAddForm, setShowAddForm }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [feelings, setFeelings] = useState('')

  const resetValues = () => {
    setTitle('')
    setContent('')
    setFeelings('')
  }

  const handleCancel = () => {
    setTitle('')
    setContent('')
    setFeelings('')
    setShowAddForm(!showAddForm)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const newJournalEntry = await journalEntryService.createNew({ title, content, feelings })
      dispatch(addJournalEntry(newJournalEntry))
      dispatch(addNotification('New journal entry added', 'success', 5))
      setTitle('')
      setContent('')
      setFeelings('')
      setShowAddForm(!showAddForm)
    } catch (exception) {
      dispatch(addNotification(`${exception.response.data.error}`, 'error', 5))
    }
  }

  return (
    <div>
      <h3 style={{ textAlign: 'left' }}>How was your day?</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <TextField label='Title' fullWidth
              id='title'
              value={title}
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
          <div>
            <TextField label='Feelings' fullWidth
              id='feelings'
              value={feelings}
              onChange={({ target }) => setFeelings(target.value)}
            />
          </div>
          <div>
            <TextField multiline label='Describe your day' rows={7} fullWidth
              id='content'
              value={content}
              onChange={({ target }) => setContent(target.value)}
            />
          </div>
        </div>
        <br></br>
        <Button style={{ marginRight: '10px' }} variant='contained' color='primary' type='submit'>Submit</Button>
        <Button style={{ marginRight: '10px' }} variant='contained' color='secondary' onClick={() => resetValues()}>Reset</Button>
        <Button style={{ marginRight: '10px' }} variant='contained' onClick={() => handleCancel()}>Cancel</Button>
      </form>
    </div>
  )
}

export default JournalEntryForm
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JournalEntry from './components/JournalEntry'
import JournalEntryForm from './components/JournalEntryForm'
import RegisterForm from './components/RegisterForm'
import { initializeJournalEntries } from './reducers/journalEntryReducer'
import { initializeUsers } from './reducers/userReducer'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  const journalEntries = useSelector(state => state.journalEntries)

  useEffect(() => {
    dispatch(initializeJournalEntries())
  }, [dispatch])

  useEffect(() => {
    dispatch(initializeUsers())
  }, [dispatch])

  return (
    <Router>
      <h1>Journal</h1>
      <div style={{ backgroundColor: 'black', padding: '5px' }}>
        <Link style={{ color: 'white', padding: '5px' }} to="/">Home</Link>
        <Link style={{ color: 'white', padding: '5px' }} to="/journalEntries">Journal entries</Link>
        <Link style={{ color: 'white', padding: '5px' }} to="/register">Create account</Link>
      </div>
      <Switch>
        <Route path="/journalEntries">
          <JournalEntryForm />
          <h3>Journal entries</h3>
          {journalEntries.map(journalEntry =>
            <JournalEntry key={journalEntry.id} journalEntry={journalEntry} />
          )}
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/">
          <div style={{ padding: '5px', marginTop: '10px' }}>Welcome to Journal App</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

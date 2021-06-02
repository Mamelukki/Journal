import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JournalEntry from './components/JournalEntry'
import JournalEntryList from './components/JournalEntryList'
import RegisterForm from './components/RegisterForm'
import AccountDropdown from './components/AccountDropdown'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import User from './components/User'
import { initializeJournalEntries } from './reducers/journalEntryReducer'
import { initializeUsers } from './reducers/userReducer'
import { login } from './reducers/loginReducer'
import {
  Switch, Route, Link, useRouteMatch
} from 'react-router-dom'
import storage from './utils/storage'

function App() {
  const dispatch = useDispatch()
  const journalEntries = useSelector(state => state.journalEntries)
  const users = useSelector(state => state.users)
  const currentUser = useSelector(state => state.currentUser)
  const notification = useSelector(state => state.notification)
  const match = useRouteMatch('/journalEntries/:id')
  const journalEntry = match
    ? journalEntries.find(journalEntry => journalEntry.id === match.params.id)
    : null

  useEffect(() => {
    dispatch(initializeJournalEntries())
    dispatch(initializeUsers())
    const user = storage.loadUser()
    if (user) {
      dispatch(login(user))
    }
  }, [dispatch])

  return (
    <div>
      <div className='navigation'>
        <div className='navigation-links'>
          <div className='journal-link' >
            <Link to="/">Journal</Link>
          </div>
          <div className='journal-entries-link'>
            <Link to="/journalEntries">Your journal entries</Link>
          </div>
        </div>
        {!currentUser ?
          <div className='navigation-links'>
            <div className='login-link'>
              <Link to="/login">Login</Link>
            </div>
            <div className='register-link'>
              <Link to="/register">Create account</Link>
            </div>
          </div>
          :
          <div className='navigation-links'>
            <AccountDropdown></AccountDropdown>
          </div>}
      </div>
      <div style={{ marginLeft: '25px', marginTop: '25px', marginRight: '25px', textAlign: 'center' }}>
        <Notification notification={notification} />
        <Switch>
          <Route path="/journalEntries/:id">
            <JournalEntry journalEntry={journalEntry} />
          </Route>
          <Route path="/journalEntries">
            <JournalEntryList currentUser={currentUser} journalEntries={journalEntries} />
          </Route>
          <Route path="/register">
            <RegisterForm />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/users/:id">
            <User users={users} />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JournalEntry from './components/JournalEntry'
import JournalEntryForm from './components/JournalEntryForm'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import User from './components/User'
import Togglable from './components/Togglable'
import { initializeJournalEntries } from './reducers/journalEntryReducer'
import { initializeUsers } from './reducers/userReducer'
import { login, logout } from './reducers/loginReducer'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom'
import storage from './utils/storage'

function App() {
  const dispatch = useDispatch()
  const journalEntries = useSelector(state => state.journalEntries)
  const users = useSelector(state => state.users)
  const currentUser = useSelector(state => state.currentUser)
  const notification = useSelector(state => state.notification)

  useEffect(() => {
    dispatch(initializeJournalEntries())
    dispatch(initializeUsers())
    const user = storage.loadUser()
    if (user) {
      dispatch(login(user))
    }
  }, [dispatch])

  const handleLogout = () => {
    dispatch(logout())
    storage.logoutUser()
  }

  const printJournalEntries = () => {
    if (currentUser) {
      const personalJournalEntries = journalEntries.filter(journalEntry => journalEntry.user.id === currentUser.id)
      return (
        <div>
          <h3>Journal entries</h3>
          <div className='journal-entries'>
            {personalJournalEntries.map(journalEntry =>
              <JournalEntry key={journalEntry.id} journalEntry={journalEntry} />
            )}
          </div>
        </div>
      )
    }
  }

  const journalEntryForm = () => {
    return (
      <Togglable buttonLabel="New journal entry" iconName='calendar plus outline'>
        <JournalEntryForm />
      </Togglable>
    )
  }

  return (
    <div className='container'>
      <Router>
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
              <em className='logged-user'>Welcome <Link to={`users/${currentUser.id}`}>{currentUser.username}</Link> <button onClick={() => handleLogout()}>Logout</button></em>
            </div>}
        </div>
        <div style={{ marginLeft: '25px', marginTop: '25px', marginRight: '25px', textAlign: 'center' }}>
          <Notification notification={notification} />
          <Switch>
            <Route path="/journalEntries">
              {journalEntryForm()}
              {printJournalEntries()}
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
              <div>Welcome to Journal App</div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App

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
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    textTransform: 'uppercase'
  },
  title: {
    marginRight: '15px'
  },
  rightSide: {
    marginLeft: 'auto'
  },
  appBar: {
    backgroundColor: 'black',
  },
  toolbar: {
    minHeight: 60
  }
}))

const App = () => {
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

  const classes = useStyles()

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          {currentUser ?
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" className={classes.title}>
                Journal
              </Typography>
              <Button style={{ color: 'inherit' }} component={Link} to="/journalEntries">
                Your journal entries
              </Button>
              <div className={classes.rightSide}>
                <AccountDropdown></AccountDropdown>
              </div>
            </Toolbar>
            : <Toolbar><Typography variant="h6" className={classes.title}>
              Journal
            </Typography>
            <div className={classes.rightSide}>
              <Button component={Link} to='/login' style={{ color: 'inherit' }}>Login</Button>
              <Button component={Link} to='/register' style={{ color: 'inherit' }}>Register</Button>
            </div>
            </Toolbar>
          }
        </AppBar>
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
            <JournalEntryList currentUser={currentUser} journalEntries={journalEntries} />
          </Route>
        </Switch>
      </div>
    </div >
  )
}

export default App

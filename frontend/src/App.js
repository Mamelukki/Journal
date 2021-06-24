import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import JournalEntry from './components/JournalEntry'
import JournalEntryList from './components/JournalEntryList'
import RegisterForm from './components/RegisterForm'
import AccountDropdown from './components/AccountDropdown'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import HomePage from './components/HomePage'
import User from './components/User'
import { initializeJournalEntries } from './reducers/journalEntryReducer'
import { initializeUsers } from './reducers/userReducer'
import { login } from './reducers/loginReducer'
import GitHubIcon from '@material-ui/icons/GitHub'
import ImageIcon from '@material-ui/icons/Image'
import {
  Switch, Route, Link, useRouteMatch
} from 'react-router-dom'
import storage from './utils/storage'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    textTransform: 'uppercase',
    zIndex: 1
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
    minHeight: 80,
    zIndex: 1
  },
  bottomAppBar: {
    bottom: 0,
    backgroundColor: 'white',
    color: 'black'
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
    <div style={{ paddingBottom: '30px' }}>
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          {currentUser ?
            <Toolbar className={classes.toolbar}>
              <Typography variant="h5" className={classes.title}>
                <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Journal</Link>
              </Typography>
              <Button style={{ color: 'inherit' }} component={Link} to="/journalEntries">
                Your entries
              </Button>
              <div className={classes.rightSide}>
                <AccountDropdown></AccountDropdown>
              </div>
            </Toolbar>
            : <Toolbar className={classes.toolbar}>
              <Typography variant="h5" className={classes.title}>
                <Link style={{ color: 'white', textDecoration: 'none' }} to='/'>Journal</Link>
              </Typography>
              <div className={classes.rightSide}>
                <Button component={Link} to='/login' style={{ color: 'inherit' }}>Login</Button>
                <Button component={Link} to='/register' style={{ color: 'inherit' }}>Register</Button>
              </div>
            </Toolbar>
          }
        </AppBar>
      </div>
      <div style={{ marginLeft: '25px', marginBottom: '60px', marginTop: '25px', marginRight: '25px', textAlign: 'center' }}>
        <Notification notification={notification} />
        <Switch>
          <Route path="/journalEntries/:id">
            <JournalEntry journalEntry={journalEntry} />
          </Route>
          <Route path="/journalEntries">
            <JournalEntryList />
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
            {!currentUser ?
              <HomePage></HomePage> :
              <JournalEntryList />
            }
          </Route>
        </Switch>
      </div>
      <footer style={{ position: 'absolute', bottom: '0', width: '100%', backgroundColor: '#f0f0f0' }}>
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', padding: '25px' }}>
          <a href='https://github.com/Mamelukki/Journal' style={{ textDecoration: 'none' }}><GitHubIcon style={{ fontSize: 'medium', color: 'black', marginRight: '10px' }}></GitHubIcon></a>
          <a href='https://unsplash.com/' style={{ textDecoration: 'none' }}><ImageIcon style={{ fontSize: 'medium', color: 'black' }}></ImageIcon></a>
        </div>
      </footer>
    </div>
  )
}

export default App

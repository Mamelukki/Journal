import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IconButton, Menu, MenuItem, makeStyles } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { logout } from '../reducers/loginReducer'
import storage from '../utils/storage'
import {
  useHistory, Link
} from 'react-router-dom'

const useStyles = makeStyles(() => ({
  button: {
    flexGrow: 1
  }
}))

const AccountDropdown = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentUser = useSelector(state => state.currentUser)
  const [anchorEl, setAnchorEl] = useState()

  const classes = useStyles()

  const openDropdown = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const closeDropdown = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    dispatch(logout())
    storage.logoutUser()
    history.push('/login')
  }

  return (
    <span>
      <IconButton className={classes.button}
        color='inherit'
        aria-controls='profileDropdown'
        aria-haspopup='true'
        onClick={openDropdown}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="profileDropdown"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeDropdown}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Link style={{ color: 'inherit' }} to={`/users/${currentUser.id}`}><MenuItem onClick={closeDropdown}>My account</MenuItem></Link>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </span>
  )
}

export default AccountDropdown
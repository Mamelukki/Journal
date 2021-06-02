import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Menu, MenuItem } from '@material-ui/core'
import { logout } from '../reducers/loginReducer'
import storage from '../utils/storage'
import {
  useHistory, Link
} from 'react-router-dom'

const AccountDropdown = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const currentUser = useSelector(state => state.currentUser)
  const [anchorEl, setAnchorEl] = useState()

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
    <div>
      <Button
        variant='contained'
        aria-controls='profileDropdown'
        aria-haspopup='true'
        onClick={openDropdown}
      >
        {currentUser.username}
      </Button>
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
        <MenuItem onClick={closeDropdown}><Link style={{ color: 'inherit' }} to={`/users/${currentUser.id}`}>My account</Link></MenuItem>
        <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default AccountDropdown
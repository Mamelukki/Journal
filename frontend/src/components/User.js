import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../reducers/userReducer'
import { logout } from '../reducers/loginReducer'
import { useParams, useHistory } from 'react-router-dom'
import storage from '../utils/storage'
import { TableContainer, Table, TableBody, Paper, TableRow, TableCell, Button } from '@material-ui/core'

const User = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const id = useParams().id
  const users = useSelector(state => state.users)
  const user = users.find(user => user.id === id)

  if (!user) {
    return null
  }

  const handleRemove = (id) => {
    const confirm = window.confirm('Are you sure you want to remove your account? Confirming will delete your account permanently!')
    if (confirm) {
      dispatch(removeUser(id))
      dispatch(logout())
      storage.logoutUser()
      history.push('/login')
    }
  }

  return (
    <div>
      <h2>Account information</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                Username
              </TableCell>
              <TableCell>
                {user.username}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Journal entries added
              </TableCell>
              <TableCell>
                {user.journalEntries.length}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Joined
              </TableCell>
              <TableCell>
                {new Date(user.date).toDateString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Button variant='contained' color='secondary' onClick={() => handleRemove(user.id)}>Delete account</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default User
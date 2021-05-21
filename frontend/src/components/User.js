import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../reducers/userReducer'
import { logout } from '../reducers/loginReducer'
import { useParams, useHistory } from 'react-router-dom'
import storage from '../utils/storage'

const User = ({ users }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(users)
  const id = useParams().id
  console.log(id)
  const user = users.find(user => user.id === id)

  console.log(user)

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
      <table style={{ border: '1px black solid', textAlign: 'left' }}>
        <tbody>
          <tr>
            <th>
              Username
            </th>
            <td>
              {user.username}
            </td>
          </tr>
          <tr>
            <th>
              Journal entries added
            </th>
            <td>
              {user.journalEntries.length}
            </td>
          </tr>
          <tr>
            <th>
              <button onClick={() => handleRemove(user.id)}>Delete account</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div >
  )
}

export default User
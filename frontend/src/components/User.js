import React from 'react'
import { useParams } from 'react-router-dom'

const User = ({ users }) => {
  console.log(users)
  const id = useParams().id
  console.log(id)
  const user = users.find(user => user.id === id)

  console.log(user)

  if (!user) {
    return null
  }

  const handleRemove = () => {
    // TO BE DONE
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
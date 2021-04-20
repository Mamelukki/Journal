import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../reducers/loginReducer'
import { addNotification } from '../reducers/notificationReducer'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    // NOT WORKING CORRECTLY YET!!
    try {
      dispatch(login(username, password))
      dispatch(addNotification(`${username} logged in`, 'success', 5))
    } catch (exception) {
      dispatch(addNotification('Wrong username or password', 'error', 5))
    }
    setUsername('')
    setPassword('')
  }

  return(
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
            Username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          Password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm
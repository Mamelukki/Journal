import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import { login } from '../reducers/loginReducer'
import { addNotification } from '../reducers/notificationReducer'
import storage from '../utils/storage'

const LoginForm = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })
      dispatch(login(user))
      storage.saveUser(user)
      dispatch(addNotification(`${username} logged in`, 'success', 5))
    } catch (error) {
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
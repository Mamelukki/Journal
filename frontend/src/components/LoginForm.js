import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import { login } from '../reducers/loginReducer'
import { addNotification } from '../reducers/notificationReducer'
import storage from '../utils/storage'
import { Link, useHistory } from 'react-router-dom'

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })
      dispatch(login(user))
      storage.saveUser(user)
      dispatch(addNotification(`${user.username} logged in`, 'success', 5))
      history.push('/journalEntries')
    } catch (exception) {
      dispatch(addNotification('Wrong username or password', 'error', 5))
    }
    setUsername('')
    setPassword('')
  }

  return (
    <div>
      <h2 style={{ textTransform: 'uppercase' }}>Login</h2>
      <div>No account yet? <Link to="/register">Register here.</Link></div>
      <br></br>
      <form onSubmit={handleLogin} >
        <div>
          <div>Username</div>
          <input style={{ width: '30%' }}
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <div>Password</div>
          <input style={{ width: '30%' }}
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <br></br>
        <div>
          <button className='login-button' type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
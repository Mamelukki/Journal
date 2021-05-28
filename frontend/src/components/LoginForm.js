import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import loginService from '../services/login'
import { login } from '../reducers/loginReducer'
import { addNotification } from '../reducers/notificationReducer'
import storage from '../utils/storage'
import { Link, useHistory } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'

const LoginForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({ username, password })
      setUsername('')
      setPassword('')
      dispatch(login(user))
      storage.saveUser(user)
      dispatch(addNotification(`${user.username} logged in`, 'success', 5))
      history.push('/journalEntries')
    } catch (exception) {
      setUsername('')
      setPassword('')
      dispatch(addNotification('Wrong username or password', 'error', 5))
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <div>New to us? <Link to="/register">Register here.</Link></div>
      <form onSubmit={handleLogin} >
        <div>
          <TextField label='Username'
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <TextField label='Password'
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <br></br>
        <div>
          <Button variant='contained' color='primary' className='login-button' type="submit">Login</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../reducers/userReducer'
import { addNotification } from '../reducers/notificationReducer'
import userService from '../services/users'

const registerForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const username = event.target.username.value
      const password = event.target.password.value
      const newUser = await userService.createNew(username, password)
      dispatch(addUser(newUser))
      dispatch(addNotification('New account created', 'success', 5))
    } catch (exception) {
      dispatch(addNotification(`Account creation failed. Error: ${exception.message}`, 'error', 5))
    }
    event.target.username.value = ''
    event.target.password.value = ''
  }

  return (
    <div>
      <h4>Create account</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input name='username' />
        </div>
        <div>
          Password
          <input name='password' type='password' />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default registerForm
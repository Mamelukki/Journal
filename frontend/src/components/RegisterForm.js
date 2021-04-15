import React from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../reducers/userReducer'

const registerForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    event.target.username.value = ''
    event.target.password.value = ''
    dispatch(addUser(username, password))
  }

  return (
    <div>
      <h4>Create account</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <input name='username' />
          Password
          <input name='password' type='password' />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default registerForm
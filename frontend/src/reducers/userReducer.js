import userService from '../services/users'

const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'ADD_USER':
    return [...state, action.data]
  default:
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'USERS',
      data: users
    })
  }
}

export const addUser = (username, password) => {
  return async dispatch => {
    const newUser = await userService.createNew(username, password)
    console.log(newUser)
    dispatch({
      type: 'ADD_USER',
      data: newUser
    })
  }
}

export default userReducer
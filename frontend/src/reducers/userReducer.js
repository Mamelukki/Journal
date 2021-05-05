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

export const addUser = (user) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_USER',
      data: user
    })
  }
}

export default userReducer
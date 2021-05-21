import userService from '../services/users'

const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_USERS':
    return action.data
  case 'ADD_USER':
    return [...state, action.data]
  case 'REMOVE_USER':
    return state.filter(user => user.id !== action.data)
  default:
    return state
  }
}

export const initializeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT_USERS',
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

export const removeUser = (id) => {
  return async dispatch => {
    await userService.remove(id)
    dispatch({
      type: 'REMOVE_USER',
      data: id
    })
  }
}

export default userReducer
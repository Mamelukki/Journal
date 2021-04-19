import loginService from '../services/login'
import journalEntryService from '../services/journalEntries'

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'LOGIN':
    console.log(action.data)
    return action.data
  case 'LOGOUT':
    console.log(state)
    return null
  default:
    return state
  }
}

export const login = (username, password) => {
  return async dispatch => {
    const user = await loginService.login({ username, password })
    window.localStorage.setItem(
      'LoggedJournalAppUser', JSON.stringify(user)
    )
    journalEntryService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      data: user
    })
  }
}

export const logout = () => {
  return async dispatch => {
    window.localStorage.removeItem('LoggedJournalAppUser')
    dispatch({
      type: 'LOGOUT'
    })
  }
}

export const setCurrentUser = () => {
  return async dispatch => {
    const loggedUserJSON = window.localStorage.getItem('LoggedJournalAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      journalEntryService.setToken(user.token)

      dispatch({
        type: 'LOGIN',
        data: user
      })
    }
  }
}

export default loginReducer
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import journalEntryReducer from './reducers/journalEntryReducer'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'

const reducer = combineReducers({
  journalEntries: journalEntryReducer,
  users: userReducer,
  currentUser: loginReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
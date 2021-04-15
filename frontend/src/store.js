import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import journalEntryReducer from './reducers/journalEntryReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  journalEntries: journalEntryReducer,
  userReducer: userReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
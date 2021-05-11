import journalEntryService from '../services/journalEntries'
import { initializeUsers } from '../reducers/userReducer'

const journalEntryReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_JOURNAL_ENTRIES':
    return action.data
  case 'ADD_JOURNAL_ENTRY': {
    const newState = [...state, action.data]
    console.log(newState)
    console.log(`täällä? ${action.data}`)
    return [...state, action.data]
  }
  case 'EDIT_JOURNAL_ENTRY':
    return state.map(journalEntry => journalEntry.id === action.data.id ? action.data : journalEntry)
  case 'ADD_IMAGE': {
    const journalEntryToChange = state.find(journalEntry => journalEntry.id === action.data.journalEntry.id)
    const journalEntryWithImage = {
      ...journalEntryToChange,
      images: journalEntryToChange.images.concat(action.data)
    }
    return state.map(journalEntry =>
      journalEntry.id !== action.data.journalEntry.id ? journalEntry : journalEntryWithImage
    )
  }
  case 'REMOVE_JOURNAL_ENTRY':
    return state.filter(journalEntry => journalEntry.id !== action.data)
  default:
    return state
  }
}

export const initializeJournalEntries = () => {
  return async dispatch => {
    const journalEntries = await journalEntryService.getAll()
    dispatch({
      type: 'INIT_JOURNAL_ENTRIES',
      data: journalEntries
    })
  }
}

export const addJournalEntry = (journalEntry) => {
  return async dispatch => {
    dispatch({
      type: 'ADD_JOURNAL_ENTRY',
      data: journalEntry
    })
    dispatch(initializeUsers())
  }
}

export const editJournalEntry = (journalEntry) => {
  console.log(`edit: ${journalEntry.content}`)
  return async dispatch => {
    dispatch({
      type: 'EDIT_JOURNAL_ENTRY',
      data: journalEntry
    })
  }
}

export const addImage = (journalEntry) => {
  console.log(`täällä? ${journalEntry.id}`)
  return async dispatch => {
    dispatch({
      type: 'ADD_IMAGE',
      data: journalEntry
    })
  }
}

export const removeJournalEntry = (id) => {
  return async dispatch => {
    await journalEntryService.remove(id)
    dispatch({
      type: 'REMOVE_JOURNAL_ENTRY',
      data: id
    })
    dispatch(initializeUsers())
  }
}

export default journalEntryReducer
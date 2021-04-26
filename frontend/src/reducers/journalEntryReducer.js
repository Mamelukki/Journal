import journalEntryService from '../services/journalEntries'

const journalEntryReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_JOURNAL_ENTRIES':
    return action.data
  case 'ADD_JOURNAL_ENTRY':
    return [...state, action.data]
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
  }
}

export const removeJournalEntry = (id) => {
  return async dispatch => {
    dispatch({
      type: 'REMOVE_JOURNAL_ENTRY',
      data: id
    })
  }
}

export default journalEntryReducer
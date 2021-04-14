import journalEntryService from '../services/journalEntries'

const journalEntryReducer = (state = [], action) => {
  switch (action.type) {
  case 'INIT_JOURNAL_ENTRIES':
    return action.data
  case 'ADD_JOURNAL_ENTRY':
    return [...state, action.data]
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

export const addJournalEntry = (content) => {
  return async dispatch => {
    const newJournalEntry = await journalEntryService.createNew(content)
    dispatch({
      type: 'ADD_JOURNAL_ENTRY',
      data: newJournalEntry
    })
  }
}

export default journalEntryReducer
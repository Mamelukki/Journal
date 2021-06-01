const filterReducer = (state = null, action) => {
  switch (action.type) {
  case 'SET_FILTER':
    return action.data
  default:
    return state
  }
}

export const setFilter = (filter, radioButtonValue) => {
  return {
    type: 'SET_FILTER',
    data: {
      filter,
      radioButtonValue
    }
  }
}

export default filterReducer
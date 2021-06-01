import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'
import { TextField, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'

const Filter = () => {
  const dispatch = useDispatch()
  const [radioButtonValue, setRadioButtonValue] = useState('date')
  const [filterValue, setFilterValue] = useState('')

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value)
    dispatch(setFilter(event.target.value, radioButtonValue))
  }

  const handleRadioButtonChange = (event) => {
    setRadioButtonValue(event.target.value)
    dispatch(setFilter(filterValue, event.target.value))
  }

  return (
    <span>
      <FormControl component='fieldset'>
        <FormLabel component='legend' style={{ textAlign: 'left' }}>Filter by</FormLabel>
        <RadioGroup row aria-label='position' name='position' defaultValue='date' onChange={handleRadioButtonChange}>
          <FormControlLabel
            value='date'
            control={<Radio color='primary' />}
            label='Date'
          />
          <FormControlLabel
            value='title'
            control={<Radio color='primary' />}
            label='Title'
          />
        </RadioGroup>
      </FormControl>
      <TextField variant='outlined' label='Write your filter here' onChange={handleFilterChange}></TextField>
    </span>
  )
}

export default Filter
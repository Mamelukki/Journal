import React, { useState, useImperativeHandle } from 'react'
import { Button } from '@material-ui/core'

// eslint-disable-next-line react/display-name
const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button variant='contained' color='primary' onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button variant='contained' color='default' onClick={toggleVisibility}>Cancel</Button>
      </div>
    </div>
  )
})

export default Togglable
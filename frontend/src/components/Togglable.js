import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button basic color='black' icon={{ name: `${props.iconName}` }} onClick={toggleVisibility}></Button>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <Button basic color='black' onClick={toggleVisibility}>Cancel</Button>
      </div>
    </div>
  )
}

export default Togglable
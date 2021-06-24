import React from 'react'
import { Alert } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  notification: {
    width: '100%',
    textAlign: 'left',
    marginBottom: '25px'
  },
}))

const Notification = ({ notification }) => {
  const classes = useStyles()

  if (notification === null) {
    return null
  }

  if (notification.messageType === 'info') {
    return (
      <div className={classes.notification}>
        <Alert severity='info'>
          {notification.message}!
        </Alert>
      </div>
    )
  }

  if (notification.messageType === 'error') {
    return (
      <div className={classes.notification}>
        <Alert severity='error'>
          {notification.message}!
        </Alert>
      </div>
    )
  }

  return (
    <div className={classes.notification}>
      <Alert severity='success'>
        {notification.message}!
      </Alert>
    </div>
  )
}

export default Notification
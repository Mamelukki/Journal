import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
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

  if (notification.messageType === 'error') {
    return (
      <div className={classes.notification}>
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {notification.message}!
        </Alert>
      </div>
    )
  }

  return (
    <div className={classes.notification}>
      <Alert severity='success'>
        <AlertTitle>Success</AlertTitle>
        {notification.message}!
      </Alert>
    </div>
  )
}

export default Notification
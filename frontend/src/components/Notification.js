import React from 'react'

const Notification = ({ notification }) => {
  if(notification.message === null) {
    return null
  }

  if (notification.type === 'error') {
    return (
      <div style={{ padding: '10px', backgroundcolor: 'red', textcolor: 'white' }}>
        {notification.message}
      </div>
    )
  }

  return (
    <div style={{ padding: '10px', backgroundcolor: 'green', textcolor: 'white' }}>
      {notification.message}
    </div>
  )
}

export default Notification
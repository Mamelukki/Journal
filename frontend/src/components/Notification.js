import React from 'react'

const Notification = ({ notification }) => {
  if(notification === null)  {
    return null
  }

  if (notification.messageType === 'error') {
    return (
      <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: 'tomato', color: 'white' }}>
        {notification.message}
      </div>
    )
  }

  return (
    <div style={{ marginBottom: '20px', padding: '20px', backgroundColor: 'seagreen', color: 'white' }}>
      {notification.message}
    </div>
  )
}

export default Notification
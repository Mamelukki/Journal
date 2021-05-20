import React from 'react'

const Notification = ({ notification }) => {
  if(notification === null)  {
    return null
  }

  if (notification.messageType === 'error') {
    return (
      <div style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '0', backgroundColor: 'tomato', padding: '10px', color: 'white' }}>
        {notification.message}
      </div>
    )
  }

  return (
    <div style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: '0', backgroundColor: 'DarkSeaGreen', padding: '10px', color: 'white' }}>
      {notification.message}
    </div>
  )
}

export default Notification
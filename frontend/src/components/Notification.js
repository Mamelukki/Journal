import React from 'react'

const Notification = ({ notification }) => {
  if(notification === null)  {
    return null
  }

  if (notification.type === 'error') {
    return (
      <div style={{ padding: '20px', marginTop: '5px', backgroundColor: 'red', color: 'white' }}>
        {notification.message}
      </div>
    )
  }

  return (
    <div style={{ padding: '20px', marginTop: '5px', backgroundColor: 'green', color: 'white' }}>
      {notification.message}
    </div>
  )
}

export default Notification
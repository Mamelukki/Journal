import React from 'react'
import image1 from '../images/homePage1.jpg'
import image2 from '../images/homePage2.jpg'

const HomePage = () => {
  return (
    <div className="content-wrapper">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px' }}>
        <div style={{ position: 'relative' }}>
          <p className='homePageBackgroundImage' style={{ backgroundImage: `url(${image1})`, height: '500px', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ fontSize: 'x-large', position: 'absolute', color: 'white', top: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
            <p className='subtitle'>Ever dreamed of an online journal? We got you! In this journal, you can give the day a title, describe your day and your feelings and add up to 10 images per entry to bring your journal entries to life! <strong>Happy journaling!</strong></p>
          </div>
        </div>
        <div className='imgTextWrapper' style={{ position: 'relative' }}>
          <p className='homePageBackgroundImage' style={{ backgroundImage: `url(${image2})`, height: '500px', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div className='subtitle' style={{ fontSize: 'x-large', position: 'absolute', color: 'white', top: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
            <p>New to us? No worries! Register here and keep your journal entries password protected, just like a locked diary.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
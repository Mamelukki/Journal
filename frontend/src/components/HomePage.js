import React from 'react'
import sunset from '../images/sunset.jpg'
import flower from '../images/flower.jpg'
import {
  Link
} from 'react-router-dom'

const HomePage = () => {
  return (
    <div style={{ marginBottom: '25px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px' }}>
        <div style={{ position: 'relative' }}>
          <p className='homePageBackgroundImage' style={{ backgroundImage: `url(${flower})`, height: '600px', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ fontSize: 'x-large', position: 'absolute', color: 'white', top: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
            <p className='subtitle'>Ever dreamed of an online journal? We got you! In this journal, you can give the day a title, describe your day and your feelings and add up to 10 images per entry to bring your journal entries to life! <strong>Happy journaling!</strong></p>
          </div>
        </div>
        <div className='imgTextWrapper' style={{ position: 'relative' }}>
          <p className='homePageBackgroundImage' style={{ backgroundImage: `url(${sunset})`, height: '600px', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div className='subtitle' style={{ fontSize: 'x-large', position: 'absolute', color: 'white', top: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', paddingLeft: '100px', paddingRight: '100px' }}>
            <p>New to us? No worries! Register here and keep your journal entries password protected, just like a locked diary.</p>
            <Link to='/register' style={{ color: 'white', textDecoration: 'none', border: '1px solid white', padding: '10px 20px' }}><strong>Register</strong></Link>
            <p>Already a member? Login here!</p>
            <Link to='/login' style={{ color: 'white', textDecoration: 'none', border: '1px solid white', padding: '10px 20px' }}><strong>Login</strong></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
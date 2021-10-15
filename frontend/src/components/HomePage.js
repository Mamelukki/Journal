import React from 'react'
import flowers from '../images/flowers.jpg'
import cherryTree from '../images/cherrytree.jpg'
import {
  Link
} from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '25px' }}>
        <div style={{ position: 'relative' }}>
          <p style={{ backgroundImage: `url(${flowers})`, height: '600px', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ fontSize: 'x-large', position: 'absolute', color: 'black', top: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', paddingLeft: '15%', paddingRight: '15%' }}>
            <p>Ever dreamed of an online journal? We&lsquo;ve got you! In this journal, you can give the day a title, describe your day and your feelings and add up to 10 images per entry to bring your journal entries to life. <strong>Happy journaling!</strong></p>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <p style={{ backgroundImage: `url(${cherryTree})`, height: '600px', maxWidth: '100%', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
          <div style={{ fontSize: 'x-large', position: 'absolute', color: 'black', top: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', textAlign: 'center', paddingLeft: '15%', paddingRight: '15%' }}>
            <p>New to us? No worries! Register here and start journaling today!</p>
            <Link to='/register' style={{ color: 'black', textDecoration: 'none', border: '1px solid black', padding: '10px 20px' }}><strong>Register</strong></Link>
            <p>Already a member? Login here!</p>
            <Link to='/login' style={{ color: 'black', textDecoration: 'none', border: '1px solid black', padding: '10px 20px' }}><strong>Login</strong></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage